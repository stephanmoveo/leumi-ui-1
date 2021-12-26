import React, { useState, useEffect } from "react";
import { DatePicker, InputSelect } from "../StyledComponents/Elements";
import { useDispatch, useSelector } from "react-redux";
import {
  updateMyData,
  setIsDisable,
  confirmEdit,
} from "../../store/slices/dataSlice";

const NewEditableCell = ({
  value: initialValue,
  row: { index, original },
  column: { id, editable, type, width, valueOptions, required, initValue },
}) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };
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
      <InputSelect
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
        style={{ width: width }}
      >
        {valueOptions.map((item, i) => {
          return (
            <option value={item.label} key={i}>
              {item.label}
            </option>
          );
        })}
      </InputSelect>
    );
  if (type === "date")
    return (
      <DatePicker
        style={{ width: width, fontSize: "12px" }}
        type="date"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
      />
    );
  return (
    <input
      style={{ width: width }}
      defaultValue={initValue}
      // value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
    />
  );
};

export default NewEditableCell;
