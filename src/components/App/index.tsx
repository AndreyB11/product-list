import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "components/UI/Modals/GenericModal/GenericModalProvider";

export const App = () => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <AppRouter />
      </ModalProvider>
    </BrowserRouter>
  );
};
