import React, { useState, useEffect } from "react";
import { Link } from "../StyledComponents/Elements.jsx";

const NonEditableCell = ({ value: initialValue, column: { isLink, type } }) => {
  const ChangeFormateDate = (oldDate) => {
    return oldDate.toString().split("-").reverse().join("-");
  };

  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  if (type === "date") {
    const newDate = ChangeFormateDate(value);
    if (!isLink) return newDate;
    return <Link href="#">{newDate}</Link>;
  }
  if (!isLink) return value;
  return <Link href="#">{value}</Link>;
};

export default NonEditableCell;
