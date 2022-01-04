import React from "react";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import FormHelperText from "@material-ui/core/FormHelperText";
const BootstrapInput = withStyles({
  root: {
    "label + &": {
      marginTop: 15,
      width: "max-content",
    },
  },
  error: {
    "& .MuiSelect-icon": {
      color: "red",
    },
  },

  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "white",
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
    },
  },
})(InputBase);

export default function DropDown({
  error,
  disabled,
  valueOptions,
  value,
  handleChange,
  required,
}) {
  const iconStyle = {
    color: "red",
    fontSize: "20px",
    position: "relative",
    top: "6px",
    left: "5px",
    marginLeft: "3px",
  };
  const icon = (text) => {
    return (
      <div>
        {text}
        <span className="required-icon" style={iconStyle}>
          *
        </span>
      </div>
    );
  };
  return (
    <div className="dropDown">
      <FormControl variant="outlined" error={error} required={required}>
        {
          <InputLabel id="demo-customized-select-label">
            שם שדה למשל מדינה
          </InputLabel>
        }
        <Select
          disabled={disabled}
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={value === "" ? "בחירה" : value}
          onChange={handleChange}
          input={<BootstrapInput />}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
            },
            transformOrigin: {
              vertical: "top",
            },
            getContentAnchorEl: null,
          }}
        >
          <MenuItem value="בחירה">
            {required ? icon("בחירה") : "בחירה"}
          </MenuItem>
          {/* <MenuItem value="בחירה">{required ? "משהו *" : "משהו"}</MenuItem> */}
          {valueOptions.map((item, i) => {
            return (
              <MenuItem value={item} key={i}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
        {error && <FormHelperText>מלל סיבת השגיאה</FormHelperText>}
      </FormControl>
    </div>
  );
}

// .MuiInputLabel-shrink {
//     transform: translate(0, 1.5px) scale(0.75);
//     transform-origin: top right;
//     text-align: right;
// }

// .MuiInputLabel-formControl {
//     top: 0;
//     right: 0;
//     position: absolute;
//     transform: translate(0, 24px) scale(1);
// }
