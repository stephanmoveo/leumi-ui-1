import React from "react";
import { EditBtn, FlexDiv } from "../StyledComponents/Elements.jsx";
import EditIcon from "@mui/icons-material/Edit";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ToolTip from "./ToolTip";
import { useDispatch, useSelector } from "react-redux";
import { addRow, confirmEdit } from "../../store/slices/dataSlice.js";

export default function TableEditBtn({
  setisEditable,
  columns,
  isEditable,
  setIsinEditMode,
  isinEditMode,
}) {
  const dispatch = useDispatch();
  const isCell = useSelector((state) => state.dataReducer.isCell);

  const addNewRow = () => {
    dispatch(addRow(columns));
    setIsinEditMode(true);
  };

  const editRow = () => {
    setisEditable(isEditable==="Cell"?'Cell2':'Cell');
    setIsinEditMode(true);
    if (isCell === "Cell") return;
    return dispatch(confirmEdit());
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
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
      <h1 style={{ textAlign: "right", margin: 0 }}>הגדרת מנהל</h1>
    </div>
  );
}
