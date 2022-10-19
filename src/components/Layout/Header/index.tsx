import { Box, Typography } from "@mui/material";
import { headerStyles } from "./headerStyles";

export const Header = () => {
  return (
    <Box sx={headerStyles.header}>
      <Typography variant={"h3"} component={"h1"} color="white">
        Product Library
      </Typography>
    </Box>
  );
};
