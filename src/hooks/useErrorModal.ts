import { useModal } from "components/UI/Modals/GenericModal/GenericModalProvider";
import { useCallback, useEffect } from "react";

export const useErrorModal = (
  errorCondition: boolean,
  beforeClose: (...args: any) => any,
  errorMessage?: string
) => {
  const { openModal, closeModal } = useModal();

  const onCancel = useCallback(() => {
    beforeClose();
    closeModal();
  }, [beforeClose, closeModal]);

  const openErrorModal = useCallback(() => {
    openModal("errorModal", {
      message: errorMessage!,
      onCancel,
    });
  }, [errorMessage, openModal, onCancel]);

  useEffect(() => {
    if (errorCondition) {
      openErrorModal();
    }
  }, [errorCondition]);
};
