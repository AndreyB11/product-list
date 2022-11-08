import { Brand } from "./brand";

export interface IProduct {
  id: string;
  name: string;
  price: string;
  brand: Brand;
  image: string;
}
