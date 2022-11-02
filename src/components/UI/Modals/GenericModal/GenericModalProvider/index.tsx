import { DeleteModal } from "components/UI/Modals/DeleteModal";
import { UpsertModal } from "components/UI/Modals/UpsertModal";
import { ErrorModal } from "components/UI/Modals/ErrorModal";
import { createModalProvider } from "./createModalProvider";

const modals = {
  deleteModal: DeleteModal,
  upsertModal: UpsertModal,
  errorModal: ErrorModal,
};

export const { ModalProvider, useModal } = createModalProvider(modals);
