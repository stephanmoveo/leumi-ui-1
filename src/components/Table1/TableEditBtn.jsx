import React from "react";
import { EditBtn, FlexDiv } from "../StyledComponents/EditBtn.jsx";
import EditIcon from "@mui/icons-material/Edit";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ToolTip from "./ToolTip";

export default function TableEditBtn({
  setisEditable,
  columns,
  setData,
  isEditable,
  data,
  setIsinEditMode,
  isinEditMode
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

  return (
    <FlexDiv>
      <ToolTip
        val={"עריכה"}
        // placement="top"
        // arrow
        // classes={classes}
      >
        <EditBtn
          onClick={() => {
            setisEditable(isEditable === "Cell" ? "Cell2" : "Cell");
            setIsinEditMode(!isinEditMode);
          }}
        >
          <EditIcon />
          {"עריכה"}
        </EditBtn>
      </ToolTip>
      <ToolTip
        val={"הוספת מנהל"}
        // placement="top"
        // arrow
        // classes={classes}
      >
        <EditBtn onClick={() => addRow(columns)}>
          <PersonAddIcon />
          {"הוספת מנהל"}
        </EditBtn>
      </ToolTip>
    </FlexDiv>
  );
}
