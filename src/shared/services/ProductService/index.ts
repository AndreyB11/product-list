import { IProduct } from "shared/models";

export class ProductService {
  static async getAllProducts() {
    return [] as IProduct[];
  }

  static async addProduct(product: IProduct) {}

  static async editProduct(product: IProduct) {}

  static async deleteProduct(product: IProduct) {}
}
