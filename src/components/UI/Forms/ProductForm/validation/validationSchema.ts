import { formModel } from "./formModel";
import * as yup from "yup";

const {
  formFields: { name, price, brand },
} = formModel;

export const productValidationSchema = {
  productForm: yup.object().shape({
    [name.name]: yup
      .string()
      .min(3, name.lengthError)
      .required(name.requiredErrorMsg),
    [brand.name]: yup
      .string()
      .min(3, brand.lengthError)
      .required(brand.requiredErrorMsg),
    [price.name]: yup
      .number()
      .min(1, price.numberError)
      .required(price.requiredErrorMsg),
  }),
};
