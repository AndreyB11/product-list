import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "components/UI/Modals/GenericModal/GenericModalProvider";
import { Provider } from "react-redux";
import { store } from "shared/store";
import { ThemeProvider } from "@mui/material";
import { theme } from "shared/theme";

export const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ModalProvider>
          <AppRouter />
        </ModalProvider>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
