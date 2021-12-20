import React, { useRef, useState, useEffect } from "react";
import { Link } from "../StyledComponents/EditBtn.jsx";

const NonEditableCell = ({ value: initialValue, column: { isLink, type } }) => {
  const ChangeFormateDate = (oldDate) => {
    return oldDate.toString().split("-").reverse().join("-");
  };

  const [value, setValue] = React.useState(initialValue);
  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  if (type === "date") {
    ChangeFormateDate(value);
  }
  if (!isLink) return value;
  return <Link href="#">{value}</Link>;
};

export default NonEditableCell;
