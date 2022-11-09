import { IProduct } from "shared/models";
import { formModel } from "./formModel";

const {
  formFields: { name, brand, price },
} = formModel;

export const initialValues = {
  [name.name]: "",
  [price.name]: "",
  [brand.name]: "",
};

export const initFromProduct = (product: IProduct) => ({
  [name.name]: product.name,
  [price.name]: product.price,
  [brand.name]: product.brand,
});
