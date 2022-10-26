import React, { useState, useContext } from "react";

interface IProps {
  children: React.ReactNode;
}

type ModalProps<T extends React.JSXElementConstructor<any>> = Omit<
  React.ComponentProps<T>,
  "onCancel"
> &
  Partial<Pick<React.ComponentProps<T>, "onCancel">>;

export const createModalProvider = <
  T extends { [x: string]: React.JSXElementConstructor<any> }
>(
  modals: T
) => {
  const ModalContext = React.createContext({
    openModal: <M extends keyof T>(
      modal: M,
      props: ModalProps<typeof modals[M]>
    ) => {},
    closeModal: () => {},
  });

  const useModal = () => useContext(ModalContext);

  const ModalProvider = (props: IProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalName, setModalName] = useState<keyof T>();
    const [modalProps, setModalProps] = useState<any>({});
    const Modal = modalName ? modals[modalName] : null;

    const handleClose = () => {
      setIsOpen(false);
      setModalName(undefined);
    };

    const handleOpen = <M extends keyof T>(
      modal: M,
      props: ModalProps<typeof modals[M]>
    ) => {
      setModalName(modal);
      setModalProps(props);
      setIsOpen(true);
    };

    const value = {
      openModal: handleOpen,
      closeModal: handleClose,
    };

    return (
      <ModalContext.Provider value={value}>
        {props.children}
        {Modal && (
          <Modal visible={isOpen} onCancel={handleClose} {...modalProps} />
        )}
      </ModalContext.Provider>
    );
  };

  return {
    ModalProvider,
    useModal,
  };
};
