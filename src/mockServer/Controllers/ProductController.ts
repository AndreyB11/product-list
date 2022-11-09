import ProductService from "mockServer/Services/ProductService";
import { RestRequest, RestContext, ResponseFunction } from "msw";
import { IProduct } from "shared/models";

export class ProductController {
  static getAll(req: RestRequest, res: ResponseFunction, ctx: RestContext) {
    try {
      const products = ProductService.getAllProducts();

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
      const product = ProductService.addProduct(body);

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
      const id = req.params["id"].toString();
      const product: IProduct = await req.json();
      const newProduct = ProductService.editProduct(id, product);

      return res(ctx.status(200), ctx.json(newProduct));
    } catch (err) {
      return res(
        ctx.status(400),
        ctx.json({ message: (err as Error).message })
      );
    }
  }

  static deleteProduct(
    req: RestRequest,
    res: ResponseFunction,
    ctx: RestContext
  ) {
    try {
      const id = req.params["id"].toString();
      ProductService.deleteProduct(id);

      return res(ctx.status(200));
    } catch (err) {
      return res(
        ctx.status(400),
        ctx.json({ message: (err as Error).message })
      );
    }
  }
}
