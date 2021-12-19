import React, { useRef, useState, useEffect } from "react";
import { Link } from "../StyledComponents/EditBtn.jsx";

const NonEditableCell = ({ value: initialValue, column: { isLink } }) => {
  const [value, setValue] = React.useState(initialValue);
  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  if (!isLink) return value;
  return <Link href="#">{value}</Link>;
};

export default NonEditableCell;
