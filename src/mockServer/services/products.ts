import { productImages, products } from "mockServer/data/products";
import { IProduct } from "shared/models";

class ProductService {
  getAllProducts() {
    return products;
  }

  addProduct(product: Omit<IProduct, "id">) {
    const newProduct: IProduct = {
      ...product,
      image: productImages[product.brand.toLocaleLowerCase() || "adidas"],
      id: String(Math.floor(Math.random() * 100)),
    };

    products.push(newProduct);

    return newProduct;
  }

  editProduct(id: string, oldProduct: IProduct) {
    const newProduct = products.find((p) => p.id === id);

    if (!newProduct) throw new Error("Product not found");

    Object.assign(newProduct, {
      ...oldProduct,
      image: productImages[oldProduct.brand.toLocaleLowerCase() || "adidas"],
    });
    return newProduct;
  }

  deleteProduct(id: string) {
    const product = products.find((p) => p.id === id);

    if (!product) throw new Error("Product not found");

    products.splice(
      products.findIndex((p) => p.id === id),
      1
    );

    return product;
  }
}

export default new ProductService();
