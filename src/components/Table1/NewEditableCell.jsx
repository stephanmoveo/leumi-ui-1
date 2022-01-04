import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateMyData, setIsDisable } from "../../store/slices/dataSlice";
import NewDatePicker from "../StyledComponents/NewDatePicker";
import SelectInput from "../StyledComponents/SelectInput";
import TextInput from "../../components/Form-elements/TextInput";
import TableTextInput from "../../components/Form-elements/TableTextInput";

const NewEditableCell = ({
  value: initialValue,
  row: { index },
  column: { id, type, width, valueOptions, required },
}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    console.log(required);
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    if (required) dispatch(setIsDisable(true));
  }, []);

  const onBlur = () => {
    if (required) {
      if (value !== "") {
        dispatch(setIsDisable(false));
      }
    }
    return dispatch(updateMyData({ index, id, value }));
  };

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
    <TableTextInput
      label={required ? "*" : ""}
      style={{ width: width }}
      value={value}
      handleChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
      id='hheeyyyyy'
    />
  );
};

export default NewEditableCell;
