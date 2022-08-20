import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "react-jss";

import Navigation from "./navigation";
import useStyles from "./style";
import theme from "./theme";

const App = () => {
  useStyles();

  return <Navigation />;
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
