import React from "react";
import { Box, Container, Typography, makeStyles } from "@material-ui/core";
import Page from "../../components/Page/Page";

const useStyles = makeStyles({
  container: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  }
});

function NotFound() {
  const classes = useStyles();

  return (
    <Page title="Not Found">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm" className={classes.container}>
          <Box mb={3}>
            <Typography
              align="center"
              color="textPrimary"
              gutterBottom
              variant="h1"
            >
              404 Error
            </Typography>
            <Typography
              align="center"
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              Webage Not Found
            </Typography>
          </Box>
        </Container>
      </Box>
    </Page>
  );
}

export default NotFound;
