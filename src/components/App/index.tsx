import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "components/UI/Modals/GenericModal/GenericModalProvider";
import { Provider } from "react-redux";
import { store } from "shared/store";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ModalProvider>
          <AppRouter />
        </ModalProvider>
      </BrowserRouter>
    </Provider>
  );
};
