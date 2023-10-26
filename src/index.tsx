import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UncondensedDashboard from "./components/UncondensedDashboard";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      {/* <UncondensedDashboard open/> */}
    </ThemeProvider>
  </React.StrictMode>
);
