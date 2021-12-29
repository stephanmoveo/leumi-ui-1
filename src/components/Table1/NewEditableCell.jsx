import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateMyData, setIsDisable } from "../../store/slices/dataSlice";
import NewDatePicker from "../StyledComponents/NewDatePicker";
import TextField from "@mui/material/TextField";
import SelectInput from "../StyledComponents/SelectInput";

const NewEditableCell = ({
  value: initialValue,
  row: { index, original },
  column: { id, editable, type, width, valueOptions, required, initValue },
}) => {
  const [value, setValue] = useState(initialValue);

  const dispatch = useDispatch();
  const onBlur = () => {
    if (required) {
      if (value !== "") {
        dispatch(setIsDisable());
      }
    }
    return dispatch(updateMyData({ index, id, value }));
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  if (type === "singleSelect")
    return (
      <SelectInput
        value={value}
        handleChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
        valueOptions={valueOptions}
      />
    );

  if (type === "date")
    return (
      <NewDatePicker
        setValue={setValue}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
        width={width}
      />
    );

  return (
    <TextField
      variant="outlined"
      style={{ width: width }}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
    />
  );
};

export default NewEditableCell;
