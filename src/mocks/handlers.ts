import { rest } from "msw";
import { ProductController } from "./Controllers/ProductController";

export const handlers = [
  rest.get("/products", ProductController.getAll),
  rest.post("/products", ProductController.addProduct),
  rest.put("/products/:id", ProductController.editProduct),
  rest.delete("/products/:id", ProductController.deleteProduct),
];
