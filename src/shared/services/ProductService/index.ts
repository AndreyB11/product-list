import { IProduct } from "shared/models";

export class ProductService {
  static async getAllProducts() {
    return [
      {
        id: "1",
        name: "acd",
        brand: "adwd",
        price: "123",
        image:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      },
    ] as IProduct[];
  }

  static async addProduct(product: Omit<IProduct, "id">) {
    return {} as IProduct;
  }

  static async editProduct(product: IProduct) {
    return {} as IProduct;
  }

  static async deleteProduct(product: IProduct) {}
}
