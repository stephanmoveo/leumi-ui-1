import React from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

function ToolTip({ children, val, maxWidth }) {
  const valLength = val !== undefined && val.toString().length;

  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip
      title={
        valLength >= 14 ||
        val === "עריכה" ||
        val === "הוספת מנהל" ||
        val === "הסתר" ||
        val === "הצג" ||
        val === "מחיקה"
          ? val
          : ""
      }
      {...props}
      placement="top"
      arrow
      classes={{ popper: className }}
    />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: "#3e4b60",
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#3e4b60",
      maxWidth: maxWidth,
      marginBottom: "3px !important",
    },
  }));
  return <BootstrapTooltip>{children}</BootstrapTooltip>;
}

export default ToolTip;
