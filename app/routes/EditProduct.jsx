import { Form, Link, data, redirect } from "react-router";
import ErrorMessage from "../components/ErrorMessage";
import FormSpacer from "../components/FormSpacer";
import Input from "../components/Input";
import Label from "../components/Label";
import Button from "../components/Button";
import { getProductById, updateProduct } from "../models/products";
import { validateText, validateNumber } from "../.server/validation";

export async function loader({ params }) {
  let id = params.id;
  console.log({ id });

  //   Fetch product by id
  let product = await getProductById(id);
  console.log({ product });
  return product;
}

export async function action({ request, params }) {
  let formData = await request.formData();
  let title = formData.get("title");
  let price = formData.get("price");
  let quantity = formData.get("quantity");
  let image = formData.get("image");
  console.log({ title, price, quantity, image });

  // Validate the products
  let fieldErrors = {
    title: validateText(title),
    price: validateNumber(price),
    quantity: validateNumber(quantity),
    image: validateText(image),
  };

  // Returns errors
  if (Object.values(fieldErrors).some(Boolean)) {
    return data(
      { fieldErrors },
      {
        status: 404,
        statusText: "Bad Request",
      }
    );
  }

  //   Update the Products
  let id = params.id;
  let result = await updateProduct(id, title, price, quantity, image);

  return redirect(`/products/${id}`);
}

function editProduct({ loaderData, actionData }) {
  return (
    <main className="max-w-6xl mx-auto mt-20">
      <div>
        <Link
          to="/products"
          className="border border-orange-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          Back to products
        </Link>
        <Link
          to="/products"
          className="border border-orange-500 text-white px-4 py-2 rounded cursor-pointer ml-5"
        >
          Edit
        </Link>
      </div>
      <h1 className="text-lg text-red-500 mt-10">Edit Products</h1>

      <Form method="post" className="mt-6 space-y-4">
        <FormSpacer>
          <Label htmlFor="title" text="Title"></Label>
          <Input
            type="text"
            name="title"
            id="title"
            defaultValue={loaderData.title}
            hasError={actionData?.fieldErrors.title}
          />
          {actionData?.fieldErrors.title ? (
            <ErrorMessage text={actionData?.fieldErrors.title} />
          ) : null}
        </FormSpacer>
        <FormSpacer>
          <Label htmlFor="price" text="Price"></Label>
          <Input
            type="number"
            name="price"
            id="price"
            defaultValue={loaderData.price}
            hasError={actionData?.fieldErrors.price}
          />
          {actionData?.fieldErrors.title ? (
            <ErrorMessage text={actionData?.fieldErrors.price} />
          ) : null}
        </FormSpacer>
        <FormSpacer>
          <Label htmlFor="quantity" text="Quantity"></Label>
          <Input
            type="number"
            name="quantity"
            id="quantity"
            defaultValue={loaderData.quantity}
            hasError={actionData?.fieldErrors.quantity}
          />
          {actionData?.fieldErrors.title ? (
            <ErrorMessage text={actionData?.fieldErrors.quantity} />
          ) : null}
        </FormSpacer>

        <FormSpacer>
          <Label htmlFor="image" text="Image src"></Label>
          <Input
            type="text"
            name="image"
            id="image"
            defaultValue={loaderData.image}
            hasError={actionData?.fieldErrors.image}
          />
          {actionData?.fieldErrors.title ? (
            <ErrorMessage text={actionData?.fieldErrors.image} />
          ) : null}
        </FormSpacer>

        <Button text="Update Product" />
      </Form>
    </main>
  );
}

export default editProduct;
