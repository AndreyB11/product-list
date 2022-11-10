import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { InputField } from "components/UI/FormFields/InputField";
import { Formik, FormikHelpers, FormikValues } from "formik";
import { IProduct } from "shared/models";
import {
  formModel,
  initFromProduct,
  initialValues,
  productValidationSchema,
} from "./validation";
import { Style } from "shared/theme";
import { useCallback } from "react";

interface IProps {
  onSubmit: (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => void;
  product?: IProduct;
}

export const productFormStyles: Style = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    m: 2,
  },
  field: {
    backgroundColor: "white",
    mt: 1,
  },
  button: {
    mt: 1,
    px: 2,
    py: 1,
  },
};

export const ProductForm = ({ onSubmit, product }: IProps) => {
  const {
    formFields: { name, price, brand },
  } = formModel;

  const handleFormSubmit = useCallback(
    (data: FormikValues, actions: FormikHelpers<FormikValues>) => {
      onSubmit(data, actions);
    },
    [onSubmit]
  );

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={product ? initFromProduct(product) : initialValues}
      validationSchema={productValidationSchema.productForm}
    >
      {({
        values,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
      }) => (
        <Box sx={productFormStyles.container}>
          <InputField
            variant="filled"
            value={values.name}
            isError={Boolean(errors.name && touched.name)}
            errorMessage={errors.name}
            sx={productFormStyles.field}
            fullWidth={true}
            label={name.label}
            name={name.name}
            onChange={handleChange}
            onBlur={handleBlur}
            data-testid="product-name-field"
          />
          <InputField
            variant="filled"
            value={values.price}
            isError={Boolean(errors.price && touched.price)}
            errorMessage={errors.price}
            sx={productFormStyles.field}
            fullWidth={true}
            label={price.label}
            name={price.name}
            onChange={handleChange}
            onBlur={handleBlur}
            data-testid="product-price-field"
          />
          <InputField
            variant="filled"
            value={values.brand}
            isError={Boolean(errors.brand && touched.brand)}
            errorMessage={errors.brand}
            sx={productFormStyles.field}
            fullWidth={true}
            label={brand.label}
            name={brand.name}
            onChange={handleChange}
            onBlur={handleBlur}
            data-testid="product-brand-field"
          />
          <Button
            disabled={isSubmitting}
            onClick={() => handleSubmit()}
            variant="contained"
            sx={productFormStyles.button}
            data-testid="product-submit-button"
          >
            Submit
          </Button>
        </Box>
      )}
    </Formik>
  );
};
