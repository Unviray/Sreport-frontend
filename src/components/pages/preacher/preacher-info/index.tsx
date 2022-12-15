import { useEffect, useState } from "react";
import { IconCalendar, IconMap2, IconPencil, IconPhone } from "@tabler/icons";
import moment from "moment";

import Surface from "@/components/surface";
import { getPreacher } from "@/services/preacher";
import InfoItem from "./info-item";
import useStyles from "./style";
import { useNavigate } from "react-router-dom";

interface Props {
  id: number;
}

const PreacherInfo = (props: Props) => {
  const { id } = props;
  const navigate = useNavigate();
  const classes = useStyles();
  const [data, setData] = useState<{
    id: number;
    group: number;
    returned: boolean;
    displayName: string;
    fullName: string;
    lastName: string;
    firstName: string;
    phones: string[];
    address: string;
    birth: string;
    baptism: string;
    tags: {
      id: number;
      name: string;
      color: string;
    }[];
  }>();

  useEffect(() => {
    getPreacher(id).then(setData);
  }, [id]);

  if (!data) {
    return null;
  }

  return (
    <Surface
      title="Mombamomba azy"
      actionIcon={IconPencil}
      actionOnClick={() => navigate(`/mpitory/${id}/hanavao`)}
    >
      <InfoItem
        icon={IconPhone}
        list={data.phones.map((phone) => {
          return (
            <a href={`tel:${phone}`} className={classes.phone}>
              {phone}
            </a>
          );
        })}
      />
      <InfoItem icon={IconMap2} list={[<span>{data.address}</span>]} />
      <InfoItem
        icon={IconCalendar}
        list={[
          <span>Teraka: {moment.utc(data.birth).format("DD MMMM YYYY")}</span>,
        ]}
      />
      <InfoItem
        icon={IconCalendar}
        list={[
          <span>
            Batisa: {moment.utc(data.baptism).format("DD MMMM YYYY")}
          </span>,
        ]}
      />
    </Surface>
  );
};

export default PreacherInfo;
