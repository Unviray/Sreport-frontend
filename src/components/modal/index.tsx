import { Dialog } from "@headlessui/react";
import useStyles from "./style";

interface Props {
  open?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

const Modal = (props: Props) => {
  const { open, onClose = () => {}, children } = props;
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={onClose} className={classes.mainDialog}>
      <div className={classes.backdrop} aria-hidden="true" />
      <div className={classes.fullContainer}>
        <Dialog.Panel className={classes.panel}>
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Modal;
