import Navbar from "./navbar";
import Sidebar from "./sidebar";
import useStyles from "./style";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.bodyContainer}>
        <Sidebar />
        <div className={classes.content}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
