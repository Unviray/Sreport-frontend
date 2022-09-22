import PreacherCard from "@/components/preacher-card";
import Modal from "@/components/modal";
import MonthList from "./month-list";
import Form from "./form";

interface Props {
  id: number;
  open?: boolean;
  onClose?: () => void;
}

const EditReport = (props: Props) => {
  const { id, open, onClose } = props;

  return (
    <Modal open={open} onClose={onClose}>
      <div>
        <PreacherCard id={id} />
        <MonthList />
        <Form onClose={onClose} />
      </div>
    </Modal>
  );
};

export default EditReport;
