import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    background: { default: "#343330", paper: "#292826" },
    text: { primary: "#d4d4d4" },
    primary: {
      main: "#86deb7",
    },
    secondary: {
      main: "#ff9300",
    },
    action: { disabled: "#3f3f3f" },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: ["Ubuntu Condensed", "sans-serif"].join(", "),
    fontSize: 16,
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: "#292826",
      },
    },
  },
  props: {},
});

export default theme;
