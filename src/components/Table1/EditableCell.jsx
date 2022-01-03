import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateMyData, setIsDisable } from "../../store/slices/dataSlice";
import NewDatePicker from "../StyledComponents/NewDatePicker";
import SelectInput from "../StyledComponents/SelectInput";
import TextInput from "../../components/Form-elements/TextInput";

const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id, editable, type, width, valueOptions, required },
}) => {
  const [value, setValue] = useState(initialValue);
  const dispatch = useDispatch();
  useEffect(() => {
    if (required) {
      if (value.length < 0) dispatch(setIsDisable(true));
    }
  }, []);
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
    <TextInput
      style={{ width: width }}
      disabled={editable === false}
      value={value}
      handleChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
    />
  );
};

export default EditableCell;
