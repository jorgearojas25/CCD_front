import { createTheme } from "@mui/material";

export const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#84714F",
    },
    secondary: {
      main: "#5A3A31",
    },
    background: {
      default: "#CECFC7",
      paper: "#EFF8E2",
    },
    divider: "#31231E",
  },
};

export const myTheme = createTheme(themeOptions);
