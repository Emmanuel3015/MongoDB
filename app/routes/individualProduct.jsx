import { getProductById } from "../models/products";

export function loader({ params }) {
  console.log({ params });

  getProductById(params.id);
}

function individualProduct() {
  return (
    <main className="max-w-6xl mx-auto">
      <h1 className="font-bold text-4xl text-red-500 mt-10">Product</h1>
    </main>
  );
}

export default individualProduct;
