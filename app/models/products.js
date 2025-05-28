// import { client } from "../server/Mongo.js";
import { client, ObjectId } from "../.server/Mongo";

let db = client.db("Products");
let collection = db.collection("products");

export async function getProducts() {
  let products = await collection.find().toArray();

  return products;
}

export async function createProducts(products) {
  let result = await collection.insertOne(products);
  return result;
}

export async function getProductById(id) {
  let product = await collection.findOne({
    _id: ObjectId.createFromHexString(id),
  });
  return product;
}

// Update a Product
export async function updateProduct(id, title, price, quantity, image) {
  let result = await collection.updateOne(
    { _id: ObjectId.createFromHexString(id) },
    {
      $set: {
        title,
        price: Number(price),
        quantity: Number(quantity),
        image,
      },
    }
  );
  return result;
}
