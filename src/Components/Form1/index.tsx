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
import * as Yup from "yup";

import { Button, Radio, TextField } from "@material-ui/core";
import "./form1.css";

interface MyFormValues {
  firstName: string;
  lastName: string;
  contactNumber: string;
  gender: string;
}



const validation = Yup.object({
  firstName: Yup.string()
    .min(5, "Too Short")
    .max(8, "Must Be 8 Character Or Less")
    .required("Required"),
  lastName: Yup.string()
    .min(5, "Too Short")
    .max(8, "Must Be 8 Character Or Less")
    .required("Required"),
  contactNumber: Yup.string()
    .max(11, "Must be 11 digits")
    .min(11, "Please Enter Valid No.")
    .required("Required"),
  gender: Yup.string().required("Required"),
});
interface Props {
  handleNext: () => void;
}
const Form1 = (props: Props) => {
  const initialValues: MyFormValues = {
    firstName: "",
    lastName: "",
    contactNumber: "",
    gender: "",
  };

  return (
    <div className="formBox">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log("submitted", values);
          console.log("Actions 1", actions);
          props.handleNext();
        }}
        validationSchema={validation}
      >
        <Form style={{ margin: "0 auto" }}>
          <div>
            <div className="eachField">
              <Field
                required
                id="firstName"
                name="firstName"
                label="First Name"
                fullWidth
                as={TextField}
              />
              <span style={{ color: "red" }}>
                <ErrorMessage name="firstName" />
              </span>
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
            <span style={{ color: "red" }}>
              <ErrorMessage name="lastName" />
            </span>
            <div className="eachField">
              <Field
                required
                fullWidth
                id="contactNumber"
                name="contactNumber"
                label="Contact Number"
                as={TextField}
              />
              <span style={{ color: "red" }}>
                <ErrorMessage name="contactNumber" />
              </span>
            </div>
            <p>Gender</p>
            <label>
              <Field
                id="gender"
                type="radio"
                name="gender"
                value="Male"
                label="Male"
                as={Radio}
              />
              Male
            </label>
            <label>
              <Field
                id="gender"
                type="radio"
                name="gender"
                value="Female "
                label="Female "
                as={Radio}
              />
              Female
            </label>
            <span style={{ color: "red" }}>
              <ErrorMessage name="gender" />
            </span>
          </div>

          <div className="bottomButtons">
            <Button variant="contained" color="secondary" type="submit">
              Next
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default Form1;
