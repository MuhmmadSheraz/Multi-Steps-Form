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
import "./form1.css";

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
                id="FirstName"
                name="FirstName"
                label="First Name"
                fullWidth
                as={TextField}
              />
            </div>
            <div className="eachField">
              <Field
                required
                fullWidth
                id="lastName"
                name="lastName"
                label="Last Name"
                as={TextField}
              />
            </div>

            <div className="eachField">
              <Field
                required
                fullWidth
                id="contactNumber"
                name="contactNumber"
                label="Contact Number"
                as={TextField}
              />
            </div>

            <p>Gender</p>
            <label>
              <Field
                type="radio"
                name="picked"
                value="Male"
                label="Male"
                as={Radio}
              />
              Male
            </label>
            <label>
              <Field
                type="radio"
                name="picked"
                value="Female "
                label="Female "
                as={Radio}
              />
              Female
            </label>
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
