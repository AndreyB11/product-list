import { Grid, IconButton, Typography } from "@mui/material";
import { GenericModal } from "../GenericModal";
import CloseIcon from "@mui/icons-material/Close";
import { globalStyles } from "shared/theme";
import { upsertModalStyles } from "./upsertModalStyles";
import { ProductForm } from "components/UI/Forms/ProductForm";
import { IProduct } from "shared/models";
import { FormikHelpers, FormikValues } from "formik";
import { useProduct } from "hooks/useProduct";

interface IProps {
  visible: boolean;
  onCancel: () => void;
  title: string;
  product?: IProduct;
}

export const UpsertModal = ({ visible, onCancel, title, product }: IProps) => {
  const { editProduct, addProduct } = useProduct();

  const onSubmit = (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    actions.setTouched({});
    actions.setSubmitting(true);

    if (product) {
      editProduct({
        id: product.id,
        brand: values.brand,
        image: product.image,
        name: values.name,
        price: values.price,
      });
    } else {
      addProduct({
        brand: values.brand,
        image: "",
        name: values.name,
        price: values.price,
      });
    }

    actions.setSubmitting(false);
    onCancel();
  };

  return (
    <GenericModal
      visible={visible}
      onCancel={onCancel}
      modalStyles={upsertModalStyles.modal}
    >
      <Grid container sx={upsertModalStyles.innerContainer}>
        <Grid item sx={upsertModalStyles.heading} xs={12}>
          <Typography
            variant="h4"
            component="h5"
            color="white"
            fontWeight={500}
          >
            {title}
          </Typography>
          <IconButton onClick={onCancel} sx={upsertModalStyles.icon}>
            <CloseIcon sx={globalStyles.whiteColor} />
          </IconButton>
        </Grid>
        <Grid item xs={12} mt={1}>
          <ProductForm onSubmit={onSubmit} product={product} />
        </Grid>
      </Grid>
    </GenericModal>
  );
};
