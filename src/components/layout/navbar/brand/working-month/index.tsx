import useWorkingMonth from "@/hooks/working-month";
import useStyles from "./style";

const WorkingMonth = () => {
  const classes = useStyles();
  const { workingMonthPrettie } = useWorkingMonth();

  return (
    <div className={classes.container}>
      <h1 className={classes.text}>{workingMonthPrettie}</h1>
    </div>
  );
};

export default WorkingMonth;
