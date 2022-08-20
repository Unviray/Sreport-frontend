import Brand from "./brand";
import Menu from "./menu";
import SearchBar from "./search-bar";
import useStyles from "./style";

const Navbar = () => {
  const classes = useStyles();

  return (
    <nav className={classes.container}>
      <Brand />
      <SearchBar />
      <Menu />
    </nav>
  );
};

export default Navbar;
