import { Button, Grid, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { GenericModal } from "../GenericModal";
import { Style } from "shared/theme";
import { globalStyles } from "shared/theme";
import { IProduct } from "shared/models";
import { useProduct } from "hooks/useProduct";
import { useCallback } from "react";

interface IProps {
  visible?: boolean;
  onCancel: () => void;
  product: IProduct;
}

const deleteModalStyles: Style = {
  modal: {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "white",
    width: "300px",
    height: "200px",
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

export const DeleteModal = ({ visible, onCancel, product }: IProps) => {
  const { deleteProduct } = useProduct();

  const handleDelete = useCallback(() => {
    deleteProduct(product);
    onCancel();
  }, [deleteProduct, onCancel, product]);

  return (
    <GenericModal
      visible={visible}
      onCancel={onCancel}
      modalStyles={deleteModalStyles.modal}
    >
      <Grid container sx={deleteModalStyles.innerContainer}>
        <Grid item sx={deleteModalStyles.heading} xs={12}>
          <Typography
            variant="h4"
            component="h5"
            color="white"
            fontWeight={500}
          >
            Alert
          </Typography>
          <IconButton onClick={onCancel} sx={deleteModalStyles.icon}>
            <CloseIcon sx={globalStyles.whiteColor} />
          </IconButton>
        </Grid>
        <Grid item xs={12} mt={1}>
          <Typography>Are you sure you want to delete?</Typography>
        </Grid>
        <Grid item xs={12} mt={3}>
          <Button
            variant="contained"
            color="error"
            onClick={handleDelete}
            sx={{ mr: 3 }}
            data-testid="confirm-delete-button"
          >
            Delete
          </Button>
          <Button variant="contained" onClick={onCancel}>
            Cancel
          </Button>
        </Grid>
      </Grid>
    </GenericModal>
  );
};
