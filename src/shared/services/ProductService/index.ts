import { getAPIUrls } from "shared/constants";
import { IProduct } from "shared/models";
import API from "../API";

export class ProductService {
  static getAllProducts() {
    return API.get<IProduct[]>(getAPIUrls().getAllProducts);
  }

  static addProduct(product: Omit<IProduct, "id">) {
    return API.post<IProduct>(getAPIUrls().addProduct, product);
  }

  static async editProduct(product: IProduct) {
    return API.put<IProduct>(getAPIUrls(product.id).editProduct, product);
  }

  static async deleteProduct(product: IProduct) {
    return API.delete(getAPIUrls(product.id).deleteProduct);
  }
}
