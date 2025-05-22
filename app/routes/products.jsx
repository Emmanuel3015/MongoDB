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
      <h1 className="font-bold text-4xl text-red-500 mt-10">Products</h1>
      <ul className="mt-6 space-y-4 grid grid-cols-3 gap-4">
        {loaderData.map((item) => (
          <li key={item._id} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-700">{item.price}</p>
            <p className="text-green-600 font-bold">${item.quantity}</p>
            <img src={item.image} alt={item.title} className="h-100" />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Products;
