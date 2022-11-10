import { getAPIUrls } from "shared/constants";
import { IProduct } from "shared/models";
import API from "../API";

export class ProductService {
  static getAllProducts() {
    return API.get<IProduct[]>(getAPIUrls().product.getAll);
  }

  static addProduct(product: Omit<IProduct, "id">) {
    return API.post<IProduct>(getAPIUrls().product.add, product);
  }

  static async editProduct(product: IProduct) {
    return API.put<IProduct>(getAPIUrls(product.id).product.edit, product);
  }

  static async deleteProduct(product: IProduct) {
    return API.delete(getAPIUrls(product.id).product.delete);
  }
}
