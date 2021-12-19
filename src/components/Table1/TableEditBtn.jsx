import React from "react";
import { EditBtn, FlexDiv } from "../StyledComponents/EditBtn.jsx";
import EditIcon from "@mui/icons-material/Edit";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Tooltip from "@mui/material/Tooltip";
import { makeStyles } from "@mui/styles";

export default function TableEditBtn({
  setisEditable,
  columns,
  setData,
  isEditable,
  data,
  setIsinEditMode,
  isinEditMode,
}) {
  const addRow = (columns) => {
    const obj = {};
    columns.forEach((item, i) => {
      obj[item.accessor] = "";
    });
    if (
      obj &&
      Object.keys(obj).length === 0 &&
      Object.getPrototypeOf(obj) === Object.prototype
    )
      return;
    else {
      data.splice(0, 0, obj);
      setData([...data]);
    }
  };
  const useTooltipStyles = makeStyles(() => ({
    tooltip: {
      marginBottom: "3px !important",
    },
  }));

  const classes = useTooltipStyles();
  return (
    <FlexDiv>
      <Tooltip title={"עריכה"} placement="top" arrow classes={classes}>
        <EditBtn
          onClick={() => {
            setisEditable(isEditable === "Cell" ? "Cell2" : "Cell");
            setIsinEditMode(!isinEditMode);
          }}
        >
          <EditIcon />
          {"עריכה"}
        </EditBtn>
      </Tooltip>
      <Tooltip title={"הוספת מנהל"} placement="top" arrow classes={classes}>
        <EditBtn onClick={() => addRow(columns)}>
          <PersonAddIcon />
          {"הוספת מנהל"}
        </EditBtn>
      </Tooltip>
    </FlexDiv>
  );
}
