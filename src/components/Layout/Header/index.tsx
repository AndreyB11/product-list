import { Box, IconButton, Typography } from "@mui/material";
import { headerStyles } from "./headerStyles";
import AddIcon from "@mui/icons-material/Add";
import { globalStyles } from "shared/theme";

export const Header = () => {
  return (
    <Box sx={headerStyles.header}>
      <Typography variant="h3" component="h1" color="white">
        Product List
      </Typography>
      <IconButton size="large">
        <AddIcon sx={globalStyles.whiteColor} />
      </IconButton>
    </Box>
  );
};
