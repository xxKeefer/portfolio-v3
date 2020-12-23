import React from "react";
import { Typography, Hidden } from "@material-ui/core";

const QuotesHero = () => {
  return (
    <>
      <Hidden xsDown>
        <Typography variant="h4">Some words that inspire me...</Typography>
      </Hidden>
      {/* body */}
      <Typography variant="body1">
        "Any true wizard, faced with a sign like 'Do not open this door. Really.
        We mean it. We're not kidding. Opening this door will mean the end of
        the universe,' would automatically open the door in order to see what
        all the fuss is about."
      </Typography>
      {/* quote */}
      <Typography variant="h6">
        ― Terry Pratchett, The Last Continent
      </Typography>
    </>
  );
};

export default QuotesHero;
