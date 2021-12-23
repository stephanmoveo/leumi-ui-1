import React, { useState, useEffect } from "react";
import { DatePicker, InputSelect } from "../StyledComponents/Elements";
import { useDispatch, useSelector } from "react-redux";
import { updateMyData } from "../../store/slices/dataSlice";

const EditableCell = ({
  value: initialValue,
  row: { index, original },
  column: { id, editable, type, width, valueOptions, required },
}) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const dispatch = useDispatch();
  const onBlur = () => {
    // if (required) return alert("requiredddd");
    return dispatch(updateMyData({ index, id, value }));
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  if (type === "singleSelect")
    return (
      <InputSelect
        value={value}
        onChange={onChange}
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
        style={{ width: width, fontSize:'12px' }}
        type="date"
        disabled={editable === false}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    );
  return (
    <input
      style={{ width: width }}
      disabled={editable === false}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default EditableCell;
