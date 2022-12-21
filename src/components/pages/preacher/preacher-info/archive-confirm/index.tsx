import Button from "@/components/button";
import Modal from "@/components/modal";
import useStyles from "./style";

interface Props {
  open?: boolean;
  confirm: () => void;
  onClose?: () => void;
}

const ArchiveConfirm = (props: Props) => {
  const { open, onClose, confirm } = props;
  const classes = useStyles();

  return (
    <Modal open={open} onClose={onClose}>
      <div className={classes.container}>
        <h1 className={classes.title}>Archive confirm</h1>
        <p>Do you really want to archive this preacher ?</p>
        <div className={classes.actionContainer}>
          <Button label="Cancel" variant="default" onClick={onClose} />
          <Button label="Archive" variant="danger" onClick={confirm} />
        </div>
      </div>
    </Modal>
  );
};

export default ArchiveConfirm;
