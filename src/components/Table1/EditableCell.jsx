import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateMyData, setIsDisable } from "../../store/slices/dataSlice";
import NewDatePicker from "../StyledComponents/NewDatePicker";
import SelectInput from "../StyledComponents/SelectInput";
import TextInput from "../../components/Form-elements/TextInput";
import { setIsValidationDialog, setValidationText } from "../../store/slices/dataSlice";
const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id, editable, type, width, valueOptions, required },
}) => {
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  const validatePhoneNumber = (email) => {
    return email.match(/^[0][5][0|2|3|4|5|9]{1}[-]{0,1}[0-9]{7}$/);
  };
  const [value, setValue] = useState(initialValue);
  const dispatch = useDispatch();
  useEffect(() => {
    if (required) {
      if (value.length < 0) dispatch(setIsDisable(true));
    }
  }, []);
  const onBlur = () => {
    if (id === "טלפון") {
      if (!validatePhoneNumber(value)) {
        dispatch(setValidationText('לא מספר טלפון ואלידי'))
        dispatch(setIsValidationDialog())
        dispatch(setIsDisable(true))
      }
      else{
        dispatch(setIsDisable(false))
      }
    }
    if (id === "מד") {
      if (value.length < 15) {
        dispatch(setValidationText('מספר דרכון חייב להיות בן 15 תווים'))
        dispatch(setIsValidationDialog())
        dispatch(setIsDisable(true))
      }
      else{
        dispatch(setIsDisable(false))
      }
    }
    if (id === "מייל") {
      if (!validateEmail(value)) {
        dispatch(setValidationText('האימייל לא ואלידי'))
        dispatch(setIsValidationDialog())
        dispatch(setIsDisable(true))
      }
      else{
        dispatch(setIsDisable(false))
      }
    }
    if (id === "תז") {
      if (value.length < 9 || isNaN(value)) {
        dispatch(setValidationText('אורך של תעודת זהות חייב להיות 9 ספרות ובלי אותיות'))
        dispatch(setIsValidationDialog())
        dispatch(setIsDisable(true))
      }
      else{
        dispatch(setIsDisable(false))
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
