import { ProductController } from "mockServer/Controllers/ProductController";
import { rest } from "msw";
import { apiUrl } from "./apiUrl";

export const productRoutes = [
  rest.get(apiUrl.getAllProducts, ProductController.getAll),
  rest.post(apiUrl.createProduct, ProductController.addProduct),
  rest.put(apiUrl.updateProduct, ProductController.editProduct),
  rest.delete(apiUrl.deleteProduct, ProductController.deleteProduct),
];
