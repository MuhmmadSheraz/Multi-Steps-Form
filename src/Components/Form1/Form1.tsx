import {
  Box,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@material-ui/core";
import React from "react";
import { FormControl } from "@material-ui/core";
import "./form1.css";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);
const Form1 = () => {
  const classes = useStyles();

  return (
    <div className="formBox">
      <Box p={3}>
        <Typography className="center" variant="h4">
          Tell Me About Yourself
        </Typography>
      </Box>
      <Box textAlign="center">
        <form className={classes.root}>
          <div>
            <TextField required id="firstName" label="FirstName" />
            <TextField required id="lastName" label="LastName" />
          </div>
        </form>
        <TextField
          id="email"
          required
          label="Email"
          style={{ textAlign: "center", margin: "0 auto" }}
          fullWidth
          // InputLabelProps={{
          //   shrink: true,
          // }}
        />
      </Box>
    </div>
  );
};

export default Form1;
