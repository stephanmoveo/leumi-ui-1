import React from "react";
import { EditBtn, FlexDiv } from "../StyledComponents/Elements.jsx";
import EditIcon from "@mui/icons-material/Edit";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ToolTip from "./ToolTip";
import { useDispatch } from "react-redux";
import { addRow, setIsDisable } from "../../store/slices/dataSlice.js";

export default function TableEditBtn({
  setisEditable,
  columns,
  isEditable,
  setIsinEditMode,
  gotoPage,
}) {
  const dispatch = useDispatch();
  const pageZer0 = () => gotoPage(0);
  const addNewRow = () => {
    dispatch(setIsDisable())
    pageZer0();
    dispatch(addRow(columns));
    setIsinEditMode(true);
  };

  const editRow = () => {
    setisEditable(isEditable === "Cell" ? "Cell2" : "Cell");
    setIsinEditMode(true);
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
        <ToolTip val={"הוספה"}>
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
