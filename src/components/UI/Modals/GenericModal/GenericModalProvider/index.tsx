import { DeleteModal } from "components/UI/Modals/DeleteModal";
import { createModalProvider } from "./createModalProvider";

const modals = {
  deleteModal: DeleteModal,
};

export const { ModalProvider, useModal } = createModalProvider(modals);
