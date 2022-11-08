import { IProduct } from "shared/models";

export class ProductService {
  static getAllProducts(): IProduct[] {
    return [
      {
        id: "1",
        name: "acd",
        brand: "Adidas",
        price: "123",
        image:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      },
    ];
  }

  static addProduct(product: IProduct) {}

  static editProduct(product: IProduct) {}

  static deleteProduct(product: IProduct) {}
}
