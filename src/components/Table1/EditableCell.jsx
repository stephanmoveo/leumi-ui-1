import React, { useState, useEffect } from "react";
import { DatePicker, InputSelect } from "../StyledComponents/Elements";
import { useDispatch, useSelector } from "react-redux";
import { updateMyData } from "../../store/slices/dataSlice";
import NewDatePicker from "../StyledComponents/NewDatePicker";
import TextField from "@mui/material/TextField";
import SelectInput from "../StyledComponents/SelectInput";
const EditableCell = ({
  value: initialValue,
  row: { index, original },
  column: { id, editable, type, width, valueOptions, required },
}) => {
  const [value, setValue] = useState(initialValue);

  const dispatch = useDispatch();
  const onBlur = () => {
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
      disabled={editable === false}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
    />
  );
};

export default EditableCell;
