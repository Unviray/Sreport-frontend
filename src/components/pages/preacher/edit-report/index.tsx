import Modal from "@/components/modal";
import PreacherCard from "@/components/preacher-card";
import { useEffect } from "react";
import Form from "./form";
import MonthList from "./month-list";

interface Props {
  open?: boolean;
  onClose?: () => void;
}

const EditReport = (props: Props) => {
  const { open, onClose } = props;

  return (
    <Modal open={open} onClose={onClose}>
      <div>
        <PreacherCard
          id={13}
          group={3}
          returned
          name="Jonatana Rabemananjara"
          tags={[
            {
              id: 1,
              name: "Mpisavalalana Maharitra",
              color: "#FF858D",
            },
            {
              id: 2,
              name: "Mpikarakara fiangonana",
              color: "#EEC643",
            },
          ]}
        />
        <MonthList />
        <Form onClose={onClose} />
      </div>
    </Modal>
  );
};

export default EditReport;
