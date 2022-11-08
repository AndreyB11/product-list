import ProductService from "mockServer/Services/ProductService";
import { RestRequest, RestContext, ResponseFunction } from "msw";
import { IProduct } from "shared/models";

export class ProductController {
  static async getAll(
    req: RestRequest,
    res: ResponseFunction,
    ctx: RestContext
  ) {
    try {
      const products = await ProductService.getAllProducts();

      return res(ctx.status(200), ctx.json(products));
    } catch (err) {
      return res(
        ctx.status(400),
        ctx.json({ message: (err as Error).message })
      );
    }
  }

  static async addProduct(
    req: RestRequest,
    res: ResponseFunction,
    ctx: RestContext
  ) {
    try {
      const body: Omit<IProduct, "id"> = await req.json();
      const product = await ProductService.addProduct(body);

      return res(ctx.status(200), ctx.json(product));
    } catch (err) {
      return res(
        ctx.status(400),
        ctx.json({ message: (err as Error).message })
      );
    }
  }

  static async editProduct(
    req: RestRequest,
    res: ResponseFunction,
    ctx: RestContext
  ) {
    try {
      const id = req.params["id"];
      const product: IProduct = await req.json();
      const newProduct = await ProductService.editProduct(
        id as string,
        product
      );

      return res(ctx.status(200), ctx.json(newProduct));
    } catch (err) {
      return res(
        ctx.status(400),
        ctx.json({ message: (err as Error).message })
      );
    }
  }

  static async deleteProduct(
    req: RestRequest,
    res: ResponseFunction,
    ctx: RestContext
  ) {
    try {
      const id = req.params["id"];
      await ProductService.deleteProduct(id as string);

      return res(ctx.status(200));
    } catch (err) {
      return res(
        ctx.status(400),
        ctx.json({ message: (err as Error).message })
      );
    }
  }
}
