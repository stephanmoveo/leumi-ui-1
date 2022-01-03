import React, { useState } from "react";
import { withStyles, TextField, InputAdornment } from "@material-ui/core";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const StyledTextField = withStyles({
  root: {
    "& input": {
      direction: "rtl",
      padding: "5px 8px",
      maxHeight: "30px",
    },
    "& label": {
      transformOrigin: "top right",
      right: 28,
      left: "auto",
      textAlign: "right",
      position: "relative",
      top: 3,
      backgroundColor: "transparent",
    },
    "& legend": {
      textAlign: "right",
    },
    "& label.Mui-focused": {
      color: "#4ba5ec",
      top: 5,
      right: 20,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none !important",
    },
    "& .MuiOutlinedInput-root": {
      border: `1px solid #b0bec5`,

      "&.Mui-focused": {
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
    "& .Mui-error.MuiOutlinedInput-root": {
      border: `1px solid red`,
    },
    "& .MuiOutlinedInput-adornedStart": {
      padding: 0,
    },
  },
})(TextField);

function TextInput({
  label = "",
  id,
  handleChange,
  value = "",
  required,
  disabled,
  inputProps,
  error,
  helperText = "",
  onBlur,
  placeholder = "",
}) {
  return (
    <StyledTextField
      id={id}
      variant="outlined"
      label={label}
      onChange={handleChange}
      value={value}
      required={required}
      disabled={disabled}
      InputProps={{
        startAdornment: error && (
          <ErrorOutlineIcon style={{ color: "red", position: "absolute" }} />
        ),
      }}
      inputProps={inputProps}
      error={error}
      helperText={error && helperText}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  );
}

export default TextInput;
