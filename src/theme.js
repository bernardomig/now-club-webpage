import { createMuiTheme } from "@material-ui/core";

const basicTheme = createMuiTheme({
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
