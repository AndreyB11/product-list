import { ProductController } from "mockServer/Controllers/ProductController";
import { rest } from "msw";

export const productRoutes = [
  rest.get("/products", ProductController.getAll),
  rest.post("/products", ProductController.addProduct),
  rest.put("/products/:id", ProductController.editProduct),
  rest.delete("/products/:id", ProductController.deleteProduct),
];
