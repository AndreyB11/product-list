import { Theme } from "@mui/system";
import { Modal, Box, SxProps, Fade } from "@mui/material";

interface IProps {
  children: React.ReactNode;
  visible?: boolean;
  onCancel: () => void;
  modalStyles: SxProps<Theme>;
}

export const GenericModal = ({
  children,
  visible,
  onCancel,
  modalStyles,
}: IProps) => (
  <div>
    <Modal open={!!visible} onClose={onCancel}>
      <Fade in={visible} timeout={100}>
        <Box sx={modalStyles}>{children}</Box>
      </Fade>
    </Modal>
  </div>
);
