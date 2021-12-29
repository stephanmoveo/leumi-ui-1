import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

export default function SelectInput({
  handleChange,
  onBlur,
  value,
  valueOptions,
  width
}) {
  return (
    <Box sx={{ width:width }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
        >
          {valueOptions.map((item, i) => {
            return (
              <MenuItem value={item.label} key={i}>
                {item.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
