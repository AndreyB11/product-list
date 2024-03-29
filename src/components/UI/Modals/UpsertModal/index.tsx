import { Grid, IconButton, Typography } from "@mui/material";
import { GenericModal } from "../GenericModal";
import CloseIcon from "@mui/icons-material/Close";
import { globalStyles } from "shared/theme";
import { ProductForm } from "components/UI/Forms/ProductForm";
import { IProduct } from "shared/models";
import { FormikHelpers, FormikValues } from "formik";
import { useProduct } from "hooks/useProduct";
import { Style } from "shared/theme";
import { useCallback } from "react";

interface IProps {
  visible?: boolean;
  onCancel: () => void;
  title: string;
  product?: IProduct;
}

export const upsertModalStyles: Style = {
  modal: {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "white",
    width: "350px",
    height: "450px",
    boxShadow: 24,
    outline: "none",
  },
  innerContainer: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    backgroundColor: "#191a19",
    py: 2,
    mb: 2,
  },
  icon: {
    position: "absolute",
    right: 4,
    top: 5,
  },
};

export const productImages: Record<string, string> = {
  adidas:
    "https://1000logos.net/wp-content/uploads/2019/06/Adidas-Logo-1991.jpg",
  nike: "https://static.nike.com/a/images/f_jpg,q_auto:eco/61b4738b-e1e1-4786-8f6c-26aa0008e80b/swoosh-logo-black.png",
  puma: "https://1000logos.net/wp-content/uploads/2017/05/PUMA-logo.jpg",
};

export const UpsertModal = ({ visible, onCancel, title, product }: IProps) => {
  const { editProduct, addProduct } = useProduct();

  const onSubmit = useCallback(
    (values: FormikValues, actions: FormikHelpers<FormikValues>) => {
      actions.setTouched({});
      actions.setSubmitting(true);
      const image = productImages[(values.brand as string).toLowerCase()];

      if (product) {
        editProduct({
          id: product.id,
          brand: values.brand,
          image,
          name: values.name,
          price: values.price,
        });
      } else {
        addProduct({
          brand: values.brand,
          image,
          name: values.name,
          price: values.price,
        });
      }

      actions.setSubmitting(false);
      onCancel();
    },
    [addProduct, editProduct, onCancel, product]
  );

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
