import { formModel } from "./formModel";

const {
  formFields: { name, brand, price },
} = formModel;

export const initialValues = {
  [name.name]: "",
  [price.name]: "",
  [brand.name]: "",
};
