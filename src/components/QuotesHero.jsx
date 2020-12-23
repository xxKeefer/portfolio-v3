import React from "react";
import { Typography, Hidden, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  headline: { fontFamily: "Poppins", fontSize: 60, color: "#86deb7" },
  body: { fontSize: 30, marginBlock: 50 },
  quote: { fontFamily: "Lobster", fontSize: 45, color: "#ff9300" },
  fullHeight: { height: "100%" },
});

const QuotesHero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.fullHeight}>
      <Hidden xsDown>
        <Typography className={classes.headline} variant="h4">
          Some words that inspire me...
        </Typography>
      </Hidden>
      <Typography className={classes.body} variant="body1">
        "Any true wizard, faced with a sign like 'Do not open this door. Really.
        We mean it. We're not kidding. Opening this door will mean the end of
        the universe,' would automatically open the door in order to see what
        all the fuss is about."
      </Typography>
      <Typography className={classes.quote} variant="h6">
        ― Terry Pratchett, The Last Continent
      </Typography>
    </Box>
  );
};

export default QuotesHero;
