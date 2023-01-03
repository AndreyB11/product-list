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
      .required(name.requiredError),
    [brand.name]: yup
      .string()
      .matches(/(Nike|Adidas|Puma|All Star)/, { message: brand.matchError })
      .required(brand.requiredError),
    [price.name]: yup
      .number()
      .required(price.requiredError)
      .positive(price.positiveError)
      .min(5)
      .integer(price.numberError),
  }),
};
