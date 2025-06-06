import { Link } from "react-router";
import { getProductById } from "../models/products";

export async function loader({ params }) {
  console.log({ params });
  let id = params.id;
  let product = await getProductById(id);
  console.log({ product });
  return product;
}

function individualProduct({ loaderData }) {
  return (
    <main className="max-w-6xl mx-auto">
      <div className="flex mt-5">
        <Link
          prefetch="intent"
          to="/products"
          className="border border-orange-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-orange-500 "
        >
          Back to products
        </Link>

        <Link
          to={`edit`}
          className="border border-orange-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-orange-500 ml-5"
        >
          Edit
        </Link>
      </div>
      <h1 className="font-bold text-4xl text-red-500 mt-5">
        {loaderData.title}
      </h1>
      <img
        src={loaderData.image}
        alt={loaderData.title}
        className="h-[200x]  mt-8"
      />
      <p className="my-4 text-3xl">Ksh{loaderData.price}</p>
    </main>
  );
}

export default individualProduct;
