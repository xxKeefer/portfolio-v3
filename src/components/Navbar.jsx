import React from "react";
import { ScrollHide, ContactModal } from "./index";
import { AppBar, Toolbar, Typography, Box, Hidden } from "@material-ui/core";
import { SvgLoader, SvgProxy } from "react-svgmt";
import { makeStyles } from "@material-ui/styles";
import { SocialIcons } from "./index";

const useStyles = makeStyles({
  logo: {
    marginLeft: 25,
  },
  btns: { marginLeft: "auto", marginRight: 20 },
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
          <SvgLoader
            width="65"
            height="65"
            path="https://res.cloudinary.com/xxkeefer/image/upload/v1608212059/personal-website/djk-square-b_gucluh.svg"
          >
            <SvgProxy selector="path" fill="#ff9300" />
          </SvgLoader>
          <Box className={classes.logo}>
            <Hidden smDown>
              <Typography className={classes.text} variant="h3">
                Daniel John
              </Typography>
            </Hidden>
            <Hidden xsDown>
              <Typography className={classes.text} variant="h3">
                Keefer
              </Typography>
            </Hidden>
          </Box>
          <Box className={classes.btns}>
            <ContactModal />
          </Box>
        </Toolbar>
      </AppBar>
    </ScrollHide>
  );
};

export default Navbar;
