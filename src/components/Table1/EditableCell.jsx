import React from "react";
import { DatePicker, InputSelect } from "../StyledComponents/Elements";
import { useDispatch } from "react-redux";
import { updateMyData } from "../../store/slices/dataSlice";

const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id, editable, type, width, valueOptions },
}) => {
  const [value, setValue] = React.useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const dispatch = useDispatch();

  const onBlur = () => {
    if (value === "") return alert("requiredddd");
    return dispatch(updateMyData({ index, id, value }));
  };

  React.useEffect(() => {
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
        style={{ width: width }}
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
