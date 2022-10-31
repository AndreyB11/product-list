import { getAPIUrls } from "shared/constants";
import { IProduct } from "shared/models";
import API from "../API";

export class ProductService {
  static async getAllProducts() {
    return (await API.get(getAPIUrls().getAllProducts)).data as IProduct[];
  }

  static async addProduct(product: Omit<IProduct, "id">) {
    return (await API.post(getAPIUrls().addProduct, product)).data as IProduct;
  }

  static async editProduct(product: IProduct) {
    return (await API.put(getAPIUrls(product.id).editProduct, product))
      .data as IProduct;
  }

  static async deleteProduct(product: IProduct) {
    await API.delete(getAPIUrls(product.id).deleteProduct);
  }
}
