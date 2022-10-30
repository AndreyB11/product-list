import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { InputField } from "components/UI/FormFields/InputField";
import { Formik } from "formik";
import { productFormStyles } from "./productFormStyles";
import {
  formModel,
  initialValues,
  productValidationSchema,
} from "./validation";

interface IProps {
  onSubmit: (data: any) => void;
}

export const ProductForm = ({ onSubmit }: IProps) => {
  const {
    formFields: { name, price, brand },
  } = formModel;

  return (
    <Formik
      onSubmit={(data) => {
        console.log(data);
      }}
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
            value={values.name}
            isError={Boolean(errors.name && touched.name)}
            error={errors.name}
            defaultProps={{
              sx: productFormStyles.field,
              fullWidth: true,
              label: name.label,
              name: name.name,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
          <InputField
            value={values.price}
            isError={Boolean(errors.price && touched.price)}
            error={errors.price}
            defaultProps={{
              sx: productFormStyles.field,
              fullWidth: true,
              label: price.label,
              name: price.name,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
          <InputField
            value={values.brand}
            isError={Boolean(errors.brand && touched.brand)}
            error={errors.brand}
            defaultProps={{
              sx: productFormStyles.field,
              fullWidth: true,
              label: brand.label,
              name: brand.name,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
          <Button
            disabled={isSubmitting}
            onClick={() => handleSubmit()}
            variant="contained"
            sx={productFormStyles.button}
          >
            SUBMIT
          </Button>
        </Box>
      )}
    </Formik>
  );
};
