import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

//Create a Form with Formik
function App() {
  const initialValues = {
    fullname: "",
    email: "",
    password: "",
  };

  //Form Submission With Formik
  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
  };

  //ValidationSchema with Yup
  const validationSchema = Yup.object({
    fullname: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
    password: Yup.string().required("Password is required"),
  });

  return (
    // add material-ui components
    <Container maxWidth="sm">
      <br/>
      <center>
        <Typography variant="h4" gutterBottom>
          Register New Account
        </Typography>
        <br/>
        {/* Form Validation with Formik */}
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <Grid container spacing={2} justifyContent="center" alignItems="center" direction="column">
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    type="text"
                    name="fullname"
                    label="Full Name"
                    variant="outlined"
                    placeholder="Enter your full name"
                    fullWidth
                    error={errors.fullname && touched.fullname}
                    helperText={<ErrorMessage name="fullname" />}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    type="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    placeholder="Enter your email"
                    fullWidth
                    error={errors.email && touched.email}
                    helperText={<ErrorMessage name="email" />}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    type="password"
                    name="password"
                    label="Password"
                    variant="outlined"
                    placeholder="Enter your password"
                    fullWidth
                    error={errors.password && touched.password}
                    helperText={<ErrorMessage name="password" />}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button type="submit" disabled={isSubmitting} variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </center>
    </Container>
  );
}

export default App;
