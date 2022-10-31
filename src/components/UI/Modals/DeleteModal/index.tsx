import { Button, Grid, IconButton, Typography } from "@mui/material";
import { GenericModal } from "../GenericModal";
import CloseIcon from "@mui/icons-material/Close";
import { deleteModalStyles } from "./deleteModalStyles";
import { globalStyles } from "shared/theme";
import { IProduct } from "shared/models";
import { useDispatch } from "react-redux";
import { requestDeleteProduct } from "shared/store/reducers/productReducer";

interface IProps {
  visible: boolean;
  onCancel: () => void;
  product: IProduct;
}

export const DeleteModal = ({ visible, onCancel, product }: IProps) => {
  const dispatch = useDispatch();

  return (
    <GenericModal
      visible={visible}
      onCancel={onCancel}
      modalStyles={deleteModalStyles.modal}
    >
      <Grid container sx={deleteModalStyles.innerContainer}>
        <Grid item sx={deleteModalStyles.heading} xs={12}>
          <Typography
            variant={"h4"}
            component={"h5"}
            color={"white"}
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
            onClick={() => {
              dispatch(requestDeleteProduct(product));
              onCancel();
            }}
            sx={{ mr: 3 }}
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
