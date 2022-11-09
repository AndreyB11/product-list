import { DeleteModal } from "components/UI/Modals/DeleteModal";
import { UpsertModal } from "components/UI/Modals/UpsertModal";
import { createModalProvider } from "./createModalProvider";

const modals = {
  deleteModal: DeleteModal,
  upsertModal: UpsertModal,
};

export const { ModalProvider, useModal } = createModalProvider(modals);
