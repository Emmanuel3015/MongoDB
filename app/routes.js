import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("products", "./routes/products.jsx"),
  route("addProducts", "./routes/addProducts.jsx"),
  route("products/:id", "./routes/individualProduct.jsx"),
  route("products/:id/edit", "./routes/EditProduct.jsx"),
];
