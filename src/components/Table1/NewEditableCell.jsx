import React, { useState, useEffect } from "react";
import { InputSelect } from "../StyledComponents/Elements";
import { useDispatch } from "react-redux";
import { updateMyData, setIsDisable } from "../../store/slices/dataSlice";
import NewDatePicker from "../StyledComponents/NewDatePicker";

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
      <InputSelect
        className="myinput"
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
      <NewDatePicker
        setValue={setValue}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
      />
    );

  return (
    <input
      className="myinput"
      style={{ width: width }}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
    />
  );
};

export default NewEditableCell;
