import React from "react";
import clsx from "clsx";
import { Grid, Paper, Box } from "@material-ui/core";
import { SvgLoader, SvgProxy } from "react-svgmt";
import { makeStyles } from "@material-ui/styles";
import { QuotesHero } from "./index";

const useStyles = makeStyles({
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 10,
  },
  fullHeight: {
    height: "100%",
  },
});

const HeroSection = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row-reverse"
      spacing={2}
      xs={12}
      justify="space-around"
    >
      <Grid item xs={12} sm={7} md={6} lg={5} xl={4}>
        <Paper className={classes.center}>
          <SvgLoader path="https://res.cloudinary.com/xxkeefer/image/upload/v1608212059/personal-website/line-portrait-white_vdl7gx.svg">
            <SvgProxy selector="path" fill="#ff9300" />
          </SvgLoader>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={5} md={6} lg={7} xl={8}>
        <Paper className={clsx(classes.center, classes.fullHeight)}>
          <Box>
            <QuotesHero />
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HeroSection;
