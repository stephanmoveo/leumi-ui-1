import React from "react";
import { EditBtn, FlexDiv } from "../StyledComponents/EditBtn.jsx";
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

  return (
    <FlexDiv>
      <ToolTip val={"עריכה"}>
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
      <ToolTip val={"הוספת מנהל"}>
        <EditBtn
          onClick={() => dispatch(addRow(columns))}
        >
          <PersonAddIcon />
          {"הוספת מנהל"}
        </EditBtn>
      </ToolTip>
    </FlexDiv>
  );
}
