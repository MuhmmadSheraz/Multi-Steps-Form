import * as React from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  ErrorMessage,
} from "formik";
import { Box, Button, Radio, TextField, Typography } from "@material-ui/core";
import "./form2.css";
import * as Yup from "yup";

interface MyFormValues {
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
}
interface Props {
  handleNext: () => void;
  handleBack: () => void;
}
const lowercaseRegex = /(?=.*[a-z])/;

const uppercaseRegex = /(?=.*[A-Z])/;

const numericRegex = /(?=.*[0-9])/;

const validation = Yup.object({
  email: Yup.string().email().required("Email Required"),
  userName: Yup.string().max(6, "Too Long").required("UserName Required"),
  password: Yup.string()
    .matches(lowercaseRegex, "one lowercase required!")
    .matches(uppercaseRegex, "one uppercase required!")

    .matches(numericRegex, "one number required!")

    .min(8, "Minimum 8 characters required!")

    .required("Required!")

    .min(8, "Password is Too Short")
    .max(12, "Password is Too Long")
    .required("Password is require"),
  confirmPassword: Yup.string().when("password", {
    is: (val: any) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf([Yup.ref("password")], "Password doesn't match"),
  }),
});
const Form2 = (props: Props) => {
  const initialValues: MyFormValues = {
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  };
  return (
    <div className="formBox">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
          props.handleNext();
        }}
        validationSchema={validation}
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
              <span style={{ color: "red" }}>
                <ErrorMessage name="email" />
              </span>
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
              <span style={{ color: "red" }}>
                <ErrorMessage name="userName" />
              </span>
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
              <span style={{ color: "red" }}>
                <ErrorMessage name="password" />
              </span>
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
              <span className="error" style={{ color: "red" }}>
                <ErrorMessage name="confirmPassword" />
              </span>
            </div>
          </div>

          <div className="bottomButtons">
            <Button
              variant="contained"
              color="secondary"
              onClick={props.handleBack}
              style={{ marginRight: "5px" }}
            >
              Previous
            </Button>
            <Button variant="contained" color="secondary" type="submit">
              Next
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default Form2;
