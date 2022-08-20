import { useTheme } from "react-jss";
import useStyles from "./style";
import { Props } from "./type";

const TagPill = (props: Props) => {
  const { id, name, onClick } = props;
  const theme = useTheme<Jss.Theme>();
  const classes = useStyles({ ...props, theme });

  return (
    <button
      type="button"
      className={classes.container}
      onClick={() => onClick?.(id)}
    >
      <div className={classes.dot} />
      {name}
    </button>
  );
};

export default TagPill;
