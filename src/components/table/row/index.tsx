import { useTheme } from "react-jss";
import useStyles from "./style";
import { Props } from "./type";

const Row = (props: Props) => {
  const { title, data } = props;
  const theme = useTheme<Jss.Theme>();
  const classes = useStyles({ ...props, theme });

  return (
    <tr className={classes.container}>
      <th scope="row">{title}</th>
      <td>
        <pre className={classes.number}>{data.number}</pre>
      </td>
      <td>
        <pre className={classes.number}>{data.publication}</pre>
      </td>
      <td>
        <pre className={classes.number}>{data.video}</pre>
      </td>
      <td>
        <pre className={classes.number}>{data.hour}</pre>
      </td>
      <td>
        <pre className={classes.number}>{data.visit}</pre>
      </td>
      <td>
        <pre className={classes.number}>{data.study}</pre>
      </td>
    </tr>
  );
};

export default Row;
