import React from "react";
import { DatePicker } from "../StyledComponents/EditBtn";
const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id, editable, type },
  updateMyData,
}) => {
  const [value, setValue] = React.useState(initialValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    updateMyData(index, id, value);
  };

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  if (type === "date")
    return (
      <DatePicker
        type="date"
        disabled={editable === false}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    );
  return (
    <input
      disabled={editable === false}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default EditableCell;
