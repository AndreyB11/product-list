import { IProduct } from "shared/models";

class ProductService {
  private products: IProduct[] = [];

  async getAllProducts() {
    return this.products;
  }

  async addProduct(product: Omit<IProduct, "id">) {
    const newProduct: IProduct = {
      ...product,
      id: String(Math.floor(Math.random() * 100)),
    };

    this.products.push(newProduct);

    return newProduct;
  }

  async editProduct(id: string, oldProduct: IProduct) {
    const newProduct = this.products.find((p) => p.id === id);

    if (!newProduct) throw new Error("Product not found");

    Object.assign(newProduct, oldProduct);
    return newProduct;
  }

  async deleteProduct(id: string) {
    const product = this.products.find((p) => p.id === id);

    if (!product) throw new Error("Product not found");

    this.products = this.products.filter((p) => p.id !== id);

    return product;
  }
}

export default new ProductService();
