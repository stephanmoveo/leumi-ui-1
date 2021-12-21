import React from "react";
import { EditBtn, FlexDiv } from "../StyledComponents/Elements.jsx";
import EditIcon from "@mui/icons-material/Edit";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ToolTip from "./ToolTip";
import { useDispatch } from "react-redux";
import { addRow } from "../../store/slices/dataSlice.js";

export default function TableEditBtn({
  setisEditable,
  columns,
  isEditable,
  setIsinEditMode,
  isinEditMode,
}) {
  const dispatch = useDispatch();

  const addNewRow = () => {
    // setisEditable(isEditable === "Cell" ? "Cell2" : "Cell");
    dispatch(addRow(columns));
    setIsinEditMode(!isinEditMode);
  };
  const editRow = () => {
    setisEditable(isEditable === "Cell" ? "Cell2" : "Cell");
    setIsinEditMode(!isinEditMode);
  };
  return (
    <FlexDiv>
      <ToolTip val={"עריכה"}>
        <EditBtn onClick={editRow}>
          <EditIcon />
          {"עריכה"}
        </EditBtn>
      </ToolTip>
      <ToolTip val={"הוספת מנהל"}>
        <EditBtn onClick={addNewRow}>
          <PersonAddIcon />
          {"הוספת מנהל"}
        </EditBtn>
      </ToolTip>
    </FlexDiv>
  );
}
