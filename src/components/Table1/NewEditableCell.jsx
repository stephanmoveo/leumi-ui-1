import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateMyData, setIsDisable } from "../../store/slices/dataSlice";
import NewDatePicker from "../StyledComponents/NewDatePicker";
import SelectInput from "../StyledComponents/SelectInput";
import TextInput from "../../components/Form-elements/TextInput";

const NewEditableCell = ({
  value: initialValue,
  row: { index, original },
  column: { id, editable, type, width, valueOptions, required, initValue },
}) => {

  const dispatch = useDispatch();
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    if (required) dispatch(setIsDisable(true));
  }, []);

  const handleChange = (e) => {
    if (required) {
    if (value.length >= 0) {
      dispatch(setIsDisable(false));
      }
    }
    setValue(e.target.value);
    dispatch(updateMyData({ index, id, value }));
  };

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
        // handleChange={handleChange}
        onBlur={onBlur}
        valueOptions={valueOptions}
      />
    );

  if (type === "date")
    return (
      <NewDatePicker
        setValue={setValue}
        value={value}
        // onChange={(e) => setValue(e.target.value)}
        // handleChange={handleChange}
        onBlur={onBlur}
        width={width}
      />
    );

  return (
    <TextInput
      // variant="outlined"
      style={{ width: width }}
      value={value}
      handleChange={(e) => setValue(e.target.value)}
      // handleChange={handleChange}
      onBlur={onBlur}
    />
  );
};

export default NewEditableCell;
