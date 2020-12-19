import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar disableGutters={true}>
        <Typography variant="h3">xxKeefer</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
