import React from "react";
import { EditBtn, FlexDiv } from "../StyledComponents/EditBtn.jsx";
import EditIcon from "@mui/icons-material/Edit";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ToolTip from "./ToolTip";
import { useDispatch, useSelector } from "react-redux";
import { addRow } from "../../store/slices/dataSlice.js";

export default function TableEditBtn({
  setisEditable,
  columns,
  // setData,
  isEditable,
  // data,
  setIsinEditMode,
  isinEditMode,
}) {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.dataReducer.data);
  console.log(data);

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
