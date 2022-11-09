import { ProductController } from "mockServer/controllers/products";
import { rest } from "msw";
import { getAPIUrls } from "shared/constants";
import { API_URL } from "shared/services/API";
import { prefix } from "shared/util";

const urls = getAPIUrls(":id");

export const productRoutes = [
  rest.get(prefix(API_URL, urls.product.getAll), ProductController.getAll),
  rest.post(prefix(API_URL, urls.product.add), ProductController.addProduct),
  rest.put(prefix(API_URL, urls.product.edit), ProductController.editProduct),
  rest.delete(
    prefix(API_URL, urls.product.delete),
    ProductController.deleteProduct
  ),
];
