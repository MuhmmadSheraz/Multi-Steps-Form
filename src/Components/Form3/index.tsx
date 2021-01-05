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
import {
  Box,
  Button,
  createStyles,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Radio,
  Select,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import "./form3.css";
import { Agent } from "http";
import * as Yup from "yup";

interface MyFormValues {
  paymentOption: any;
  date: string;
  cardHolder: string;
  cardNumber: string;
  cvc: String;
}

interface Props {
  handleBack: () => void;
  handleNext: () => void;
}
const Form1 = (props: Props) => {
  // const [age, setAge] = React.useState<any>("Age");
  // const [dateState, setDateState] = React.useState("");
  let todyaDate: any = new Date().toISOString().slice(0, 10);
  // todyaDate = todyaDate.getFullDate();
  console.log("today daate", todyaDate);
  // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  //   console.log(event.target.value);
  //   let val: any = event.target.value;
  //   setAge(val);
  // };
  const initialValues: MyFormValues = {
    paymentOption: "",
    cardHolder: "",
    cardNumber: "",
    date: "",
    cvc: "",
  };
  const Validation = Yup.object({
    paymentOption: Yup.string(),
    cardNumber: Yup.string()
      .required("Required")
      .max(16, "Incorrect Length Of Card Number"),
    cardHolder: Yup.string().required().max(12, "Holder Name Is Too Long"),
    cvc: Yup.string().required().max(3, "Incorrect Length"),
  });
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
        validationSchema={Validation}
      >
        <Form style={{ margin: "0 auto" }}>
          <div>
            <InputLabel id="paymentOption">Payment Option</InputLabel>
            <Field
              fullWidth
              id="paymentOption"
              name="paymentOption"
              label="Card Type "
              as={Select}
            >
              <option value="Credit Card">Credit Card</option>
              <option value="Paypal">Paypal</option>
            </Field>
            <ErrorMessage name="paymentOption" />

            <div className="eachField">
              <Field
                fullWidth
                id="cardHolder"
                name="cardHolder"
                label="Card Holder Name"
                as={TextField}
              />
              <span style={{ color: "red" }}>
                <ErrorMessage name="cardHolder" />
              </span>
            </div>

            <div style={{ display: "flex" }}>
              <Field
                className="customeField"
                fullWidth
                id="cardNumber"
                name="cardNumber"
                label="Card Number"
                as={TextField}
              />
              <Field
                className="customeField"
                //
                id="cvc"
                name="cvc"
                label="CVC"
                as={TextField}
              />
            </div>
            <span style={{ color: "red" }}>
              <ErrorMessage name="cardNumber" />
            </span>
            <span style={{ color: "red", float: "right" }}>
              <ErrorMessage name="cvc" />
            </span>
            <div className="eachField">
              <Field
                as={TextField}
                id="date"
                label="Expiry Date"
                type="date"
                defaultValue={todyaDate}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                // as={TextField}
                // onChange={(e: any) => setDateState(e.target.value)}
              />
            </div>
          </div>
          <div className="bottomButtons">
            <Button
              variant="contained"
              color="secondary"
              onClick={props.handleBack}
              style={{ margin: "15px 5px" }}
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
export default Form1;
