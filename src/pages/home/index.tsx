import { useEffect, useState } from "react";
import { useTheme } from "react-jss";

import MainBoard from "@/components/pages/home/main-board";
import ReturnedInfo from "@/components/pages/home/returned-info";
import ServiceYear from "@/components/pages/home/service-year";
import { getReturnedInfo } from "@/services/home";
import useWorkingMonth from "@/hooks/working-month";
import useStyles from "./style";

const HomePage = () => {
  const theme = useTheme<Jss.Theme>();
  const classes = useStyles();
  const { workingMonth } = useWorkingMonth();
  const [returnedInfo, setReturnedInfo] = useState<{
    total: number;
    returned: number;
    notReturned: number;
  }>();

  useEffect(() => {
    getReturnedInfo().then(setReturnedInfo);
  }, [workingMonth]);

  return (
    <div className={classes.container}>
      <div className={classes.mainContainer}>
        <MainBoard />
        {returnedInfo && (
          <div className={classes.returnedContainer}>
            <ReturnedInfo
              title="Isan'ny Mpitory"
              current={returnedInfo.total}
            />
            <ReturnedInfo
              color={theme.colors.error}
              title="Tsy namerina tatitra"
              current={returnedInfo.notReturned}
              total={returnedInfo.total}
            />
            <ReturnedInfo
              color={theme.colors.success}
              title="Namerina Tatitra"
              current={returnedInfo.returned}
              total={returnedInfo.total}
            />
          </div>
        )}
        <ServiceYear />
      </div>
    </div>
  );
};

export default HomePage;
