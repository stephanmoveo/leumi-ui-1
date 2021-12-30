import React from "react";
import { withStyles, TextField } from "@material-ui/core";
const StyledTextField = withStyles({
  root: {
    "& input": {
      direction: "rtl",
    },
    "& label": {
      transformOrigin: "top right",
      right: 28,
      left: "auto",
    },
    "& legend": {
      textAlign: "right",
    },
    "& label.Mui-focused": {
      color: "#4ba5ec",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#4ba5ec",
      },
    },
    "& .MuiFormLabel-asterisk.MuiInputLabel-asterisk": {
      color: "red",
      position: "relative",
      top: "5px",
      fontSize: "18px",
    },
    "& .MuiInputBase-root.Mui-disabled": {
      backgroundColor: "#f8fafb",
    },
    "& .MuiFormHelperText-contained": {
      margin: 0,
      position: "absolute",
      right: "10px",
      bottom: "-20px",
    },
  },
})(TextField);

function TextInput({
  label = "",
  id = "",
  handleChange,
  value = "",
  required,
  disabled,
  inputProps,
  error,
  helperText = "",
  onBlur,
}) {
  return (
    <StyledTextField
      variant="outlined"
      label={label}
      onChange={handleChange}
      value={value}
      required={required}
      disabled={disabled}
      inputProps={inputProps}
      error={error}
      helperText={error && helperText}
      onBlur={onBlur}
    />
  );
}

export default TextInput;
