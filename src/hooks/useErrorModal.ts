import { useModal } from "components/UI/Modals/GenericModal/GenericModalProvider";
import { useEffect } from "react";

export const useErrorModal = (
  errorCondition: boolean,
  beforeClose: (...args: any) => any,
  errorMessage?: string
) => {
  const { openModal, closeModal } = useModal();

  useEffect(() => {
    if (errorCondition) {
      openModal("errorModal", {
        visible: true,
        message: errorMessage!,
        onCancel: () => {
          beforeClose();
          closeModal();
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorCondition]);
};
