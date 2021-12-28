import React from "react";
import { EditBtn, FlexDiv } from "../StyledComponents/Elements.jsx";
import EditIcon from "@mui/icons-material/Edit";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ToolTip from "./ToolTip";
import { useDispatch, useSelector } from "react-redux";
import { addRow, setIsDisable } from "../../store/slices/dataSlice.js";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
export default function TableEditBtn({
  setisEditable,
  columns,
  isEditable,
  setIsinEditMode,
  gotoPage,
  setIsPagination,
  isPagination,
  mainTitle,
}) {
  const data = useSelector((state) => state.dataReducer.data);

  const dispatch = useDispatch();
  const pageZer0 = () => gotoPage(0);
  const addNewRow = () => {
    dispatch(setIsDisable());
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
            {"הוספה"}
          </EditBtn>
        </ToolTip>
        <EditBtn>
          <Switch
            defaultChecked
            onClick={() => setIsPagination(!isPagination)}
          />
        </EditBtn>
      </FlexDiv>
      <h1 style={{ textAlign: "right", margin: 0 }}>{mainTitle} </h1>
    </div>
  );
}
