import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@material-ui/core";
import { Box, Grid, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  card: { height: "100%" },
  title: {
    textAlign: "center",
    color: "#ff9300",
    fontFamily: "Poppins",
    fontWeight: 700,
  },
  icon: { textAlign: "center", color: "#86deb7", marginBlock: "20px" },
  desc: { textAlign: "justify" },
});

const ContentCard = ({ title, description, faLib, faIcon }) => {
  const icon = [faLib, faIcon];
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} variant="h4">
            {title}
          </Typography>

          <Box className={classes.icon}>
            <FontAwesomeIcon icon={icon} size="10x" />
          </Box>

          <Typography className={classes.desc} variant="body1">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ContentCard;
