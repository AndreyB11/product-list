import { IProduct } from "shared/models";

export class ProductService {
  static async getAllProducts() {
    return [] as IProduct[];
  }

  static async addProduct(product: Omit<IProduct, "id">) {
    return {} as IProduct;
  }

  static async editProduct(product: IProduct) {
    return {} as IProduct;
  }

  static async deleteProduct(product: IProduct) {}
}
