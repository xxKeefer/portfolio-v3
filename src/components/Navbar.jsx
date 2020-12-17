import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar disableGutters={true}>
        <Typography variant="h3">
          Why is it squishing up like that??????
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
