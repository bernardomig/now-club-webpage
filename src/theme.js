import { createMuiTheme } from "@material-ui/core";

const basicTheme = createMuiTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontWeightBold: 700,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    fontWeightLight: 300,
    h1: {
      fontSize: "64px",
      fontWeight: 700,
      lineHeight: "130%",
      letterSpacing: -1.5
    },
    h2: {
      fontSize: "52px",
      fontWeight: 700,
      lineHeight: "130%",
      letterSpacing: -1.5
    },
    h3: {
      fontSize: "40px",
      fontWeight: 600,
      lineHeight: "130%",
      letterSpacing: -1.25
    },
    h4: {
      fontSize: "32px",
      fontWeight: 600,
      lineHeight: "130%",
      letterSpacing: -1.0
    },
    h5: {
      fontSize: "28px",
      fontWeight: 500,
      lineHeight: "130%",
      letterSpacing: -0.5
    },
    h6: {
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: "130%",
      letterSpacing: -0.25
    },
    subtitle1: {
      fontSize: "20px"
    },
    subtitle2: {
      fontSize: "16px"
    },
    body1: {
      fontSize: "16px",
      lineHeight: 1.5,
      letterSpacing: 0.25
    },
    body2: {
      fontSize: "14px",
      lineHeight: 1.5,
      letterSpacing: 0.25
    },
    button: {
      fontSize: "14px",
      fontWeight: 500,
      letterSpacing: 1.25
    }
  },

  palette: {
    primary: { main: "#3F51B5" }
  },

  mixins: { toolbar: { minHeight: "64px" } }
});

const theme = createMuiTheme({
  ...basicTheme,
  overrides: {},
  props: {
    MuiAppBar: {
      color: "transparent"
    }
  }
});

export default theme;
