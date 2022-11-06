import { Box, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Style } from "shared/theme";

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

export const Header = () => (
  <Box sx={headerStyles.header}>
    <Typography variant="h3" component="h1" color="white">
      Product List
    </Typography>
    <IconButton size="large">
      <AddIcon />
    </IconButton>
  </Box>
);
