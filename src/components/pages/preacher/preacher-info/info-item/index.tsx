import { TablerIcon } from "@tabler/icons";
import useStyles from "./style";

interface Props {
  icon: TablerIcon;
  showIf?: boolean;
  list: React.ReactNode[];
}

const InfoItem = (props: Props) => {
  const { icon: Icon, showIf, list } = props;
  const classes = useStyles();

  if (!showIf) {
    return null;
  }

  return (
    <div className={classes.container}>
      <div className={classes.iconContainer}>
        <Icon />
      </div>
      <div className={classes.listContainer}>
        {list.map((item) => (
          <div className={classes.itemContainer}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default InfoItem;
