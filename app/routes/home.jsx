// import { Welcome } from "../welcome/welcome";
import { Link } from "react-router";

export function meta() {
  return [
    { title: "Products" },
    {
      name: "description",
      content: "Get Your Favorite Electronics In OnePlace",
    },
  ];
}

export default function Home() {
  return (
    <div>
      <main className="max-w-6xl mx-auto">
        <h1>Products</h1>
        <Link
          to="/products"
          className="bg-blue-500 text-white px-4 py-2 rounded mt-6 inline-block"
        >
          Products
        </Link>
      </main>
    </div>
  );
}
