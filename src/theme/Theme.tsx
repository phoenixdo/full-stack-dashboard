import { createMuiTheme, colors } from "@material-ui/core";
import typography from "./Typography";

const theme = createMuiTheme({
  palette: {
    background: {
      default: colors.common.white,
      paper: colors.common.white
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600]
    }
  },
  typography
});

export default theme;
