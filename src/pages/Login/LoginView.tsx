import React from "react";
import { Link as RouterLink } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
  makeStyles
} from "@material-ui/core";
import Page from "../../components/Page/Page";

const useStyles = makeStyles({
  container: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  }
});

function LoginView() {
  const classes = useStyles();

  return (
    <Page title="Welcome">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm" className={classes.container}>
          <Formik
            initialValues={{
              email: "",
              password: ""
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Must be a valid email")
                .max(255)
                .required("Email is required"),
              password: Yup.string()
                .max(255)
                .required("Password is required")
            })}
            onSubmit={() => {}}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography
                    align="center"
                    color="textPrimary"
                    gutterBottom
                    variant="h1"
                  >
                    Welcome
                  </Typography>
                  <Typography
                    align="center"
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Enter the Modus Dashboard
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                  autoComplete="off"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                  autoComplete="off"
                />
                <Box my={2}>
                  <Button
                    color="secondary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Login
                  </Button>
                </Box>
                <Typography color="textSecondary" variant="body2">
                  Don&apos;t Have an Account?{" "}
                  <Link
                    color="textPrimary"
                    component={RouterLink}
                    to="/register"
                    variant="body2"
                  >
                    Login
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
}

export default LoginView;
