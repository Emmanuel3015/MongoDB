import React from "react";
import { getProducts } from "../models/products.js";
import { Link } from "react-router";

export async function loader() {
  let result = await getProducts();
  let products = result.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));
  console.log({ products });

  return products;
}
const Products = ({ loaderData }) => {
  return (
    <main className="max-w-6xl mx-auto">
      <h1 className="font-bold text-4xl text-red-500 mt-10">Products</h1>
      <Link
        to="/addProducts"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-6 inline-block cursor-pointer"
      >
        Add Products
      </Link>

      <ul className="mt-6 space-y-4 grid grid-cols-3 gap-4">
        {loaderData.map((item) => (
          <li key={item._id} className="p-4 border rounded">
            <Link to={`/products/${item._id}`}>
              <img
                src={item.image}
                alt={item.title}
                className="h-100 object-center"
              />
              <h2 className="text-xl font-semibold mt-6">{item.title}</h2>

              <p className="text-orange-700">${item.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Products;
