// import { client } from "../server/Mongo.js";
import { client } from "../.server/Mongo";

export async function getProducts() {
  let db = client.db("Products");
  let collection = db.collection("products");

  let products = await collection.find().toArray();

  return products;
}
