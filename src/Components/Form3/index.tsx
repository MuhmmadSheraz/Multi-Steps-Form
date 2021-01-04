import * as React from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
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

interface MyFormValues {
  firstName: string;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  })
);
const Form1 = () => {
  const [age, setAge] = React.useState("");
  const [dateState, setDateState] = React.useState("");
  let todyaDate: any = new Date().toISOString().slice(0, 10);
  // todyaDate = todyaDate.getFullDate();
  console.log("today daate", todyaDate);
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };
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
            <InputLabel id="demo-simple-select-label">
              Payment Option
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              fullWidth
              onChange={handleChange}
            >
              <MenuItem value={"Credit Card"}>Credit Card</MenuItem>
              <MenuItem value={"Paypal"}>Paypal</MenuItem>
            </Select>
            <div className="eachField">
              <Field
                required
                fullWidth
                id="cardHolder"
                name="cardHolder"
                label="Card Holder Name"
                as={TextField}
              />
            </div>

            <div style={{ display: "flex", }}>
              <Field
                className="customeField"
                required
                fullWidth
                id="cardNumber"
                name="cardNumber"
                label="Card Number"
                as={TextField}
                />
              <Field
                className="customeField"
                required
                id="cvc"
                name="cvc"
                label="CVC"
                as={TextField}
              />
            </div>
            <div className="eachField">
              <Field
                fullWidth
                id="date"
                label="Date of expiry ?"
                value={dateState !== "" ? dateState : todyaDate}
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                as={TextField}
                onChange={(e: any) => setDateState(e.target.value)}
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
