import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    textFieldBkg: string;
    secondaryBkg: string;
    tertiaryBkg: string;
  }
  interface PaletteOptions {
    textFieldBkg: string;
    secondaryBkg: string;
    tertiaryBkg: string;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#8F2D56",
    },
    secondary: {
      main: "#C3C5CD",
    },
    error: {
      main: "#FF233C",
    },
    textFieldBkg: "#E9ECF3",
    secondaryBkg: "#EEEEEE",
    tertiaryBkg: "#D6D2D2",
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 14,
  },
});

export default theme;
