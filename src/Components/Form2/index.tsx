import * as React from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import { Box, Button, Radio, TextField, Typography } from "@material-ui/core";
import "./form2.css";

interface MyFormValues {
  firstName: string;
}

const Form1 = () => {
  const initialValues: MyFormValues = { firstName: "" };
  return (
    <div className="formBox">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form style={{ margin: "0 auto" }}>
          <div>
            <div className="eachField">
              <Field
                required
                id="email"
                name="email"
                label="Email ID"
                fullWidth
                as={TextField}
              />
            </div>
            <div className="eachField">
              <Field
                required
                fullWidth
                id="userName"
                name="userName"
                label="User Name"
                as={TextField}
              />
            </div>

            <div className="eachField">
              <Field
                type="password"
                required
                fullWidth
                id="password"
                name="password"
                label="Password"
                as={TextField}
              />
            </div>
            <div className="eachField">
              <Field
                required
                fullWidth
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                as={TextField}
              />
            </div>
          </div>

          <div className="bottomButtons">
            <Button variant="contained" color="secondary">
              Next
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default Form1;
