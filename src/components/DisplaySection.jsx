import React from "react";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { DisplayHeader, HeroHeader } from "./index";

const useStyles = makeStyles({
  headline: {
    marginLeft: 10,
  },
  spacer: { marginBottom: 100 },
});

const DisplaySection = ({ title, subtitle, children, hero = false }) => {
  const classes = useStyles();
  return (
    <Box className={classes.spacer}>
      <Box className={classes.headline}>
        {hero ? (
          <HeroHeader title={title} subtitle={subtitle} />
        ) : (
          <DisplayHeader title={title} subtitle={subtitle} />
        )}
      </Box>
      <Grid
        container
        spacing={2}
        alignContent="space-around"
        alignItems="stretch"
      >
        {children}
      </Grid>
    </Box>
  );
};

export default DisplaySection;
