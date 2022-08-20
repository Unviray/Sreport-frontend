import Surface from "@/components/surface";
import useStyles from "./style";

interface Props {
  title: string;
  current: number;
  total?: number;
  color?: string;
}

const ReturnedInfo = (props: Props) => {
  const { title, current, total, color } = props;
  const classes = useStyles();

  const percent = total ? (current / total) * 100 : 0;

  return (
    <Surface title={title} color={color}>
      <p className={classes.current}>
        {total && (<span className={classes.percent}>
          {percent.toFixed(0)}%
        </span>)}
        {current}
        </p>
    </Surface>
  );
};

export default ReturnedInfo;
