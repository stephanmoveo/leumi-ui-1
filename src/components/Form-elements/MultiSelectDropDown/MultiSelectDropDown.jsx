import React from "react";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import {
  MenuItem,
  Checkbox,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import FormHelperText from "@material-ui/core/FormHelperText";
import CloseIcon from "@material-ui/icons/Close";
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

export default function MultiSelectDropDown({
  error,
  disabled,
  valueOptions,
  // handleChange,
}) {
  const [selected, setSelected] = React.useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelected(value);
  };

const deleteItem=()=>{
console.log('asdfghj');
}

  return (
    <div className="multi-select-drop-down">
      <FormControl variant="outlined">
        {<InputLabel id="mutiple-select-label">שם שדה למשל מדינה</InputLabel>}
        <Select
          disabled={disabled}
          labelId="mutiple-select-label"
          value={selected}
          multiple
          renderValue={(selected) => {
            return (
              <div className="multi-select">
                {selected.map((item, i) => {
                  return (
                    <div className="selected-option">
                      <CloseIcon
                      onClick={()=>deleteItem()}
                        style={{ color: "#9eaec7", fontSize: "16px",margin:'0 2px' }}
                      />{" "}
                      {item}
                    </div>
                  );
                })}
              </div>
            );
          }}
          onChange={handleChange}
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
          {/* <MenuItem value="בחירה">
            {required ? icon("בחירה") : "בחירה"}
          </MenuItem> */}
          {valueOptions &&
            valueOptions.map((option, i) => {
              return (
                <MenuItem value={option} key={i}>
                  <ListItemText primary={option} />
                  <ListItemIcon>
                    <Checkbox checked={selected.indexOf(option) > -1} />
                  </ListItemIcon>
                </MenuItem>
              );
            })}
        </Select>
        {error && <FormHelperText>מלל סיבת השגיאה</FormHelperText>}
      </FormControl>
    </div>
  );
}
