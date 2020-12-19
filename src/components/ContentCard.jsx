import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@material-ui/core";
import { Box, Grid, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  card: { height: "100%", width: "96%" },
  title: { textAlign: "center", color: "#ff9300" },
  icon: { textAlign: "center", color: "#86deb7" },
  desc: { textAlign: "justify" },
});

const ContentCard = ({ title, description, faLib, faIcon }) => {
  const icon = [faLib, faIcon];
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
      <Card className={classes.card}>
        <CardContent>
          <Grid container spacing={3} alignContent="center">
            <Grid item xs={12}>
              <Typography className={classes.title} variant="h4">
                {title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box className={classes.icon}>
                <FontAwesomeIcon icon={icon} size="10x" />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.desc} variant="body1">
                {description}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ContentCard;
