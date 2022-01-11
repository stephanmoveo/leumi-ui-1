import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  updateMyData,
  setIsDisable,
  setIsValidationDialog,
  setValidationText,
} from "../../store/slices/dataSlice";
import NewDatePicker from "../StyledComponents/NewDatePicker";
import SelectInput from "../StyledComponents/SelectInput";
import TableTextInput from "../../components/Form-elements/TableTextInput";

const NewEditableCell = ({
  value: initialValue,
  row: { index },
  column: { id, type, width, valueOptions, required },
}) => {
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  const validatePhoneNumber = (email) => {
    return email.match(/^[0][5][0|2|3|4|5|9]{1}[-]{0,1}[0-9]{7}$/);
  };
  const dispatch = useDispatch();
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    if (required) dispatch(setIsDisable(true));
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
      id="hheeyyyyy"
    />
  );
};

export default NewEditableCell;
