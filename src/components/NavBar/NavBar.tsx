import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  appbar: {
    background: "linear-gradient(90deg, #fe6b8b 30%, #ff8e53 90%)"
  },
  toolbar: {
    height: 64
  }
});

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Typography> Modus </Typography>
      </Toolbar>
    </AppBar>
  );
};

NavBar.propTypes = {
  className: PropTypes.string
};

export default NavBar;
