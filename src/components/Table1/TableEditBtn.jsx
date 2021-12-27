import React from "react";
import { EditBtn, FlexDiv } from "../StyledComponents/Elements.jsx";
import EditIcon from "@mui/icons-material/Edit";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ToolTip from "./ToolTip";
import { useDispatch,useSelector } from "react-redux";
import { addRow, setIsDisable } from "../../store/slices/dataSlice.js";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
export default function TableEditBtn({
  setisEditable,
  columns,
  isEditable,
  setIsinEditMode,
  gotoPage,
  setIsPagination,
  isPagination
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
  // const addinNewRow = () => {
  //   const obj = {};
  //   columns.slice(1).forEach((item) => {
  //     obj[item.accessor] = "";
  //   });
  //   if (
  //     obj &&
  //     Object.keys(obj).length === 0 &&
  //     Object.getPrototypeOf(obj) === Object.prototype
  //   )
  //     return;
  //   else {
  //     dispatch(addRow(obj));
  //     console.log(obj);
  //   }
  // };
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
          {/* <EditBtn onClick={addinNewRow}> */}
            <PersonAddIcon />
            {"הוספת מנהל"}
          </EditBtn>
        </ToolTip>
        <FormControlLabel control={<Switch defaultChecked onClick={()=>setIsPagination(!isPagination)}/>} label="TOGGLE PAGINATION" />
      </FlexDiv>
      <h1 style={{ textAlign: "right", margin: 0 }}>הגדרת מנהל</h1>
    </div>
  );
}
