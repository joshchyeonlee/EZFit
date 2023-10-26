import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes/theme";
import AccountConnectDevice from "./components/AccountConnectDevice";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      {/* <AccountConnectDevice/> */}
    </ThemeProvider>
  </React.StrictMode>
);
