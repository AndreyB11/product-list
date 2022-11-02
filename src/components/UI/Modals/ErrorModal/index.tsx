import { Button, Grid, IconButton, Typography } from "@mui/material";
import { GenericModal } from "../GenericModal";
import CloseIcon from "@mui/icons-material/Close";
import { globalStyles } from "shared/theme";
import { errorModalStyles } from "./errorModalStyles";

interface IProps {
  visible: boolean;
  onCancel: () => void;
  message: string;
}

export const ErrorModal = ({ visible, onCancel, message }: IProps) => {
  return (
    <GenericModal
      visible={visible}
      onCancel={onCancel}
      modalStyles={errorModalStyles.modal}
    >
      <Grid container sx={errorModalStyles.innerContainer}>
        <Grid item sx={errorModalStyles.heading} xs={12}>
          <Typography
            variant={"h4"}
            component={"h5"}
            color={"white"}
            fontWeight={500}
          >
            Error
          </Typography>
          <IconButton onClick={onCancel} sx={errorModalStyles.icon}>
            <CloseIcon sx={globalStyles.whiteColor} />
          </IconButton>
        </Grid>
        <Grid item xs={12} mt={1}>
          <Typography>{message}</Typography>
        </Grid>
        <Grid item xs={12} mt={3}>
          <Button variant="contained" onClick={onCancel} color="error">
            Cancel
          </Button>
        </Grid>
      </Grid>
    </GenericModal>
  );
};
