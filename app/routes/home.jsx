// import { Welcome } from "../welcome/welcome";

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
      </main>
    </div>
  );
}
