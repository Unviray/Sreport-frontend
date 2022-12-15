import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useWorkingMonth from "@/hooks/working-month";
import { getPreacher } from "@/services/preacher";
import Surface from "@/components/surface";
import TagPill from "@/components/tag-pill";
import { Data, Props } from "./type";
import useStyles from "./style";

const PreacherCard = (props: Props) => {
  const { id, registerUpdate } = props;
  const navigate = useNavigate();
  const classes = useStyles();
  const [data, setData] = useState<Data>();
  const { workingMonth } = useWorkingMonth();

  useEffect(() => {
    registerUpdate?.(update);
  }, []);

  useEffect(() => {
    update();
  }, [workingMonth]);

  const update = () => {
    getPreacher(id).then(setData);
  };

  if (data === undefined) {
    return null;
  }

  return (
    <Surface
      className={classes.container}
      onClick={() => {
        navigate(`/mpitory/${id}`);
      }}
    >
      <div
        className={`${classes.idsContainer} ${
          data.returned
            ? classes.idsContainerReturned
            : classes.idsContainerNotReturned
        }`}
      >
        <div className={classes.id}>{data.id}</div>
        <div>{data.group}</div>
      </div>
      <div>
        <p className={classes.name}>{data.displayName}</p>
        <div className={classes.tagsContainer}>
          {data.tags.map((tag) => (
            <TagPill key={tag.id} preacherId={id} {...tag} />
          ))}
        </div>
      </div>
    </Surface>
  );
};

export default PreacherCard;
