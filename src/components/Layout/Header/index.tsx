import { Box, IconButton, Typography } from "@mui/material";
import { headerStyles } from "./headerStyles";
import AddIcon from "@mui/icons-material/Add";
import { globalStyles } from "shared/theme";
import { useModal } from "components/UI/Modals/GenericModal/GenericModalProvider";

export const Header = () => {
  const { openModal } = useModal();

  return (
    <Box sx={headerStyles.header}>
      <Typography variant="h3" component="h1" color="white">
        Product List
      </Typography>
      <IconButton
        size="large"
        onClick={() => {
          openModal("upsertModal", { visible: true, title: "Create Product" });
        }}
      >
        <AddIcon sx={globalStyles.whiteColor} />
      </IconButton>
    </Box>
  );
};
