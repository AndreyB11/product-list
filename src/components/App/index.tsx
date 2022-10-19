import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "shared/context/ModalContext";

export const App = () => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <AppRouter />
      </ModalProvider>
    </BrowserRouter>
  );
};
