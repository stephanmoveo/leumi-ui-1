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
        val === "הוספה" ||
        val === "הסתר" ||
        val === "הצג" ||
        val === "מחיקה" ||
        val === "פגינציה"
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
      marginRight: "-1px !important",
    },
  }));
  return <BootstrapTooltip>{children}</BootstrapTooltip>;
}

export default ToolTip;
