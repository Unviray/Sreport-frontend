import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "react-jss";

import useWorkingMonth from "./hooks/working-month";
import Navigation from "./navigation";
import useStyles from "./style";
import theme from "./theme";

import moment from "moment";
import 'moment/dist/locale/fr';
moment.locale("fr");

const App = () => {
  useStyles();
  const { setWorkingMonth } = useWorkingMonth();

  useEffect(() => {
    // Get initial working-month
    setWorkingMonth();
  }, []);

  return <Navigation />;
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
