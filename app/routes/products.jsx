import React from "react";
import { getProducts } from "../models/products.js";

export async function loader() {
  let products = await getProducts();
  console.log({ products });

  return products;
}
const Products = ({ loaderData }) => {
  return (
    <main className="max-w-6xl mx-auto">
      <h1 className="font-bold text-4xl text-red-500">Products</h1>
      <ul className="mt-6 space-y-4 grid grid-cols-3 gap-4">
        {loaderData.map((product) => (
          <li key={product._id} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-700">{product.price}</p>
            <p className="text-green-600 font-bold">${product.quantity}</p>
            <img src={product.image} alt={product.title} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Products;
