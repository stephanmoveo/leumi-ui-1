/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== "undefined"
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
}

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
  input: { textAlign: "right" },
});

export default function AutoCompleteDropDown({ values , noOptionsText, disabled}) {
  const classes = useStyles();

  return (
    <div className="auto-complete-dropdown">
      <Autocomplete
        id="country-select-demo"
        style={{ width: 300 }}
        options={values}
        classes={{
          option: classes.option,
          input: classes.input,
        }}
        disabled={disabled}
        autoHighlight
        getOptionLabel={(option) => option.name}
        renderOption={(option) => (
          <React.Fragment>
            {option.name} {option.age}
          </React.Fragment>
        )}
        noOptionsText={noOptionsText}
        renderInput={(params) => (
          <TextField
            {...params}
            label="שדה אוטוקומפליט"
            variant="outlined"
            // placeholder="Select a unit type"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
    </div>
  );
}
