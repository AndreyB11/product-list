import { IProduct } from "shared/models";

const images: Record<string, string> = {
  adidas:
    "https://1000logos.net/wp-content/uploads/2019/06/Adidas-Logo-1991.jpg",
  nike: "https://static.nike.com/a/images/f_jpg,q_auto:eco/61b4738b-e1e1-4786-8f6c-26aa0008e80b/swoosh-logo-black.png",
  puma: "https://1000logos.net/wp-content/uploads/2017/05/PUMA-logo.jpg",
};

class ProductService {
  private products: IProduct[] = [
    {
      id: "1",
      price: "100",
      name: "Air Force",
      brand: "Nike",
      image: images["nike"],
    },
  ];

  async getAllProducts() {
    return this.products;
  }

  async addProduct(product: Omit<IProduct, "id">) {
    const newProduct: IProduct = {
      ...product,
      image: images[product.brand.toLocaleLowerCase() || "adidas"],
      id: String(Math.floor(Math.random() * 100)),
    };

    this.products.push(newProduct);

    return newProduct;
  }

  async editProduct(id: string, oldProduct: IProduct) {
    const newProduct = this.products.find((p) => p.id === id);

    if (!newProduct) throw new Error("Product not found");

    Object.assign(newProduct, {
      ...oldProduct,
      image: images[oldProduct.brand.toLocaleLowerCase() || "adidas"],
    });
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
