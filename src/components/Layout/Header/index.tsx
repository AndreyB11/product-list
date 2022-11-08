import { Box, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { globalStyles } from "shared/theme";
import { Style } from "shared/theme";
import { useModal } from "components/UI/Modals/GenericModal/GenericModalProvider";
import { useCallback } from "react";

const headerStyles: Style = {
  header: {
    display: "flex",
    justifyContent: "center",
    gap: 3,
    py: 2,
    mb: 2,
    bgcolor: "#191a19",
  },
};

export const Header = () => {
  const { openModal } = useModal();

  const handleOpenClick = useCallback(() => {
    openModal("upsertModal", { visible: true, title: "Create Product" });
  }, [openModal]);

  return (
    <Box sx={headerStyles.header}>
      <Typography variant="h3" component="h1" color="white">
        Product List
      </Typography>
      <IconButton size="large" onClick={handleOpenClick}>
        <AddIcon sx={globalStyles.whiteColor} />
      </IconButton>
    </Box>
  );
};
