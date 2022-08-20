import { useTheme } from "react-jss";
import { useNavigate } from "react-router-dom";

import Surface from "@/components/surface";
import TagPill from "@/components/tag-pill";
import useStyles from "./style";
import { Props } from "./type";

const PreacherCard = (props: Props) => {
  const { id, group, name, tags } = props;
  const theme = useTheme<Jss.Theme>();
  const classes = useStyles({ ...props, theme });
  const navigate = useNavigate();

  return (
    <Surface
      className={classes.container}
      onClick={() => {
        navigate(`/mpitory/${id}`);
      }}
    >
      <div className={classes.idsContainer}>
        <div className={classes.id}>{id}</div>
        <div>{group}</div>
      </div>
      <div>
        <p className={classes.name}>{name}</p>
        <div className={classes.tagsContainer}>
          {tags.map((tag) => (
            <TagPill key={tag.id} {...tag} />
          ))}
        </div>
      </div>
    </Surface>
  );
};

export default PreacherCard;
