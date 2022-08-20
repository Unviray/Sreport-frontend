import Color from 'color';
import { createUseStyles } from "react-jss";
import { Props } from './type'


const useStyles = createUseStyles(theme => ({
  container: {
    backgroundColor: (props: Props) => props.highlight && Color(theme.colors.primary).alpha(0.1).string(),
    borderBottom: {
      width: 0.5,
      color: Color(theme.colors.primary).alpha(0.2).string(),
      style: "solid",
    }
  },

  number: {
    margin: 0,
    fontSize: 16,
    padding: {
      top: 8,
      bottom: 8,
    }
  }
}));

export default useStyles;
