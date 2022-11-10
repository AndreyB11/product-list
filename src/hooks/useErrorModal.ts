import { useModal } from "components/UI/Modals/GenericModal/GenericModalProvider";
import { useCallback, useEffect } from "react";

export const useErrorModal = (
  errorCondition: boolean,
  beforeClose: (...args: any) => any,
  errorMessage?: string
) => {
  const { openModal, closeModal } = useModal();

  const openErrorModal = useCallback(() => {
    openModal("errorModal", {
      message: errorMessage!,
      onCancel: () => {
        beforeClose();
        closeModal();
      },
    });
  }, [errorMessage, beforeClose, openModal, closeModal]);

  useEffect(() => {
    if (errorCondition) {
      openErrorModal();
    }
  }, [errorCondition, openErrorModal]);
};
