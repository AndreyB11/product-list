import { Grid, IconButton, Typography } from "@mui/material";
import { GenericModal } from "../GenericModal";
import CloseIcon from "@mui/icons-material/Close";
import { globalStyles } from "shared/theme";
import { upsertModalStyles } from "./upsertModalStyles";
import { ProductForm } from "components/UI/Forms/ProductForm";
import { IProduct } from "shared/models";

interface IProps {
  visible: boolean;
  onCancel: () => void;
  title: string;
  product?: IProduct;
}

export const UpsertModal = ({ visible, onCancel, title, product }: IProps) => {
  return (
    <GenericModal
      visible={visible}
      onCancel={onCancel}
      modalStyles={upsertModalStyles.modal}
    >
      <Grid container sx={upsertModalStyles.innerContainer}>
        <Grid item sx={upsertModalStyles.heading} xs={12}>
          <Typography
            variant={"h4"}
            component={"h5"}
            color={"white"}
            fontWeight={500}
          >
            {title}
          </Typography>
          <IconButton onClick={onCancel} sx={upsertModalStyles.icon}>
            <CloseIcon sx={globalStyles.whiteColor} />
          </IconButton>
        </Grid>
        <Grid item xs={12} mt={1}>
          <ProductForm onSubmit={() => {}} product={product} />
        </Grid>
      </Grid>
    </GenericModal>
  );
};
