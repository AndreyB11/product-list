import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { InputField } from "components/UI/FormFields/InputField";
import { Formik, FormikValues } from "formik";
import {
  formModel,
  initialValues,
  productValidationSchema,
} from "./validation";
import { Style } from "shared/theme";
import { Brand } from "shared/models/brand";

interface IProductFormData {
  name: string;
  brand: Brand;
  price: string;
}

interface IProps {
  onSubmit: (data: IProductFormData) => void;
}

export const productFormStyles: Style = {
  container: {
    width: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    m: 5,
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

export const ProductForm = ({ onSubmit }: IProps) => {
  const {
    formFields: { name, price, brand },
  } = formModel;

  const handleSubmit = (data: FormikValues) => {
    onSubmit({
      name: data.name,
      brand: data.brand,
      price: data.price,
    });
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
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
          />
          <Button
            disabled={isSubmitting}
            onClick={() => handleSubmit()}
            variant="contained"
            sx={productFormStyles.button}
          >
            Submit
          </Button>
        </Box>
      )}
    </Formik>
  );
};
