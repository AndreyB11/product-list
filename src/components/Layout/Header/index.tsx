import { Box, IconButton, Typography } from "@mui/material";
import { headerStyles } from "./headerStyles";
import AddIcon from "@mui/icons-material/Add";

export const Header = () => {
  return (
    <Box sx={headerStyles.header}>
      <Typography variant="h3" component="h1" color="white">
        Product Library
      </Typography>
      <IconButton>
        <AddIcon sx={{ color: "white" }} />
      </IconButton>
    </Box>
  );
};
