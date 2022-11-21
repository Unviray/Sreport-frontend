import { TablerIcon } from "@tabler/icons";
import useStyles from "./style";

interface Props {
  icon: TablerIcon;
  list: React.ReactNode[];
}

const InfoItem = (props: Props) => {
  const { icon: Icon, list } = props;
  const classes = useStyles();

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
