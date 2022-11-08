import { createTheme, SxProps } from "@mui/material";
import { Theme } from "@mui/system";

export type Style = Record<string, SxProps<Theme>>;

export const theme = createTheme({
  palette: {
    background: {
      default: "#f0f0f0",
    },
  },
});

export const globalStyles: Style = {
  whiteColor: {
    color: "white",
  },
};
