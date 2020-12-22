import React from "react";
import { ScrollHide } from "./index";
import { AppBar, Toolbar, Typography, Box, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  logo: {
    marginLeft: 25,
  },
  text: {
    marginRight: 12,
    display: "inline-block",
    textAlign: "center",
    color: "#86deb7",
    fontFamily: "Poppins",
    fontWeight: 700,
    textTransform: "uppercase",
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <ScrollHide>
      <AppBar position="sticky" color="default" elevation={0}>
        <Toolbar disableGutters={true}>
          <img
            alt=""
            src="https://res.cloudinary.com/xxkeefer/image/upload/c_scale,co_rgb:ff9300,e_colorize:100,f_auto,h_65,q_100,w_65/v1608212059/personal-website/djk-square-b_gucluh.jpg"
          />
          <Box className={classes.logo}>
            <Hidden smDown>
              <Typography className={classes.text} variant="h3">
                Daniel John
              </Typography>
            </Hidden>
            <Typography className={classes.text} variant="h3">
              Keefer
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </ScrollHide>
  );
};

export default Navbar;
