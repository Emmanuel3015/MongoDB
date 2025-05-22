import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("products", "./routes/products.jsx"),
  route("addProducts", "./routes/addProducts.jsx"),
];
