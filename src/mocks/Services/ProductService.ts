import { IProduct } from "shared/models";

class ProductService {
  private products: IProduct[] = [];
  private readonly images: string[] = [
    "https://cdn.pixabay.com/photo/2020/04/03/19/02/virus-4999857__340.png",
    "https://cdn.pixabay.com/photo/2017/07/15/21/46/sunflower-2507845__340.png",
    "https://cdn.pixabay.com/photo/2016/11/15/21/29/illustration-1827583__340.jpg",
    "https://cdn.pixabay.com/photo/2020/04/30/17/25/monkey-soldier-5113779__340.png",
  ];

  private getRandomImage(): string {
    return this.images[Math.floor(Math.random() * (this.images.length - 1))];
  }

  async getAllProducts() {
    return this.products;
  }

  async addProduct(product: Omit<IProduct, "id">) {
    const newProduct: IProduct = {
      ...product,
      image: this.getRandomImage(),
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
