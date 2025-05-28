import React from "react";
import Label from "../components/Label";
import Input from "../components/Input";
import { Form, Link, data } from "react-router";
import Button from "../components/Button";
import { validateText, validateNumber } from "../.server/validation";
import ErrorMessage from "../components/ErrorMessage";
import FormSpacer from "../components/FormSpacer";
import { createProducts } from "../models/products";

export async function action({ request }) {
  let formData = await request.formData();
  let title = formData.get("title");
  let price = formData.get("price");
  let quantity = formData.get("quantity");
  let image = formData.get("image");
  console.log(title, price, quantity, image);

  //   Validate the data
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

  // Save to db
  let productObj = {
    title,
    price: Number(price),
    quantity: Number(quantity),
    image,
  };

  let result = await createProducts(productObj);
  console.log(result);

  return null;
}

const addProducts = ({ actionData }) => {
  console.log({ actionData });

  return (
    <main className="max-w-6xl mx-auto mt-20">
      <Link
        to="/products"
        className="border border-orange-500 text-white px-4 py-2 rounded cursor-pointer"
      >
        Back to products
      </Link>
      <h1 className="text-lg text-red-500 mt-10">Add products</h1>

      <Form method="post" className="mt-6 space-y-4">
        <FormSpacer>
          <Label htmlFor="title" text="Title"></Label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Enter Title"
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
            placeholder="Enter Price"
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
            placeholder="Enter Quantity"
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
            placeholder="Enter imageUrl"
            hasError={actionData?.fieldErrors.image}
          />
          {actionData?.fieldErrors.title ? (
            <ErrorMessage text={actionData?.fieldErrors.image} />
          ) : null}
        </FormSpacer>

        <Button text="Add Products" />
      </Form>
    </main>
  );
};

export default addProducts;
