import { useTheme } from "react-jss";

import MainBoard from "@/components/pages/home/main-board";
import ReturnedInfo from "@/components/pages/home/returned-info";
import ServiceYear from "@/components/pages/home/service-year";

import useStyles from "./style";

const HomePage = () => {
  const theme = useTheme<Jss.Theme>();
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.mainContainer}>
        <MainBoard />
        <div className={classes.returnedContainer}>
          <ReturnedInfo title="Isan'ny Mpitory" current={89} />
          <ReturnedInfo
            color={theme.colors.error}
            title="Tsy namerina tatitra"
            current={16}
            total={89}
          />
          <ReturnedInfo
            color={theme.colors.success}
            title="Namerina Tatitra"
            current={73}
            total={89}
          />
        </div>
        <ServiceYear />
      </div>
    </div>
  );
};

export default HomePage;
