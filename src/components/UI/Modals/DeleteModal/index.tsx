import { Button, Grid, IconButton, Typography } from "@mui/material";
import { GenericModal } from "../GenericModal";
import CloseIcon from "@mui/icons-material/Close";
import { deleteModalStyles } from "./deleteModalStyles";
import { globalStyles } from "shared/theme";

interface IProps {
  visible: boolean;
  onCancel: () => void;
}

const DeleteModal = ({ visible, onCancel }: IProps) => {
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
            onClick={onCancel}
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

export default DeleteModal;
