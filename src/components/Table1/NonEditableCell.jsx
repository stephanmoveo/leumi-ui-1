import React, { useState, useEffect } from "react";
import { Link } from "../StyledComponents/Elements.jsx";

const NonEditableCell = ({ value: initialValue, column: { isLink, type } }) => {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  if (type === "date") {
    if (!isLink) return value;
    return <Link href="#">{value}</Link>;
  }
  if (!isLink) return value;
  return <Link href="#">{value}</Link>;
};

export default NonEditableCell;
