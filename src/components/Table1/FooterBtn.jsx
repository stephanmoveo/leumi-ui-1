import React from "react";
import { PrimaryButton, OutlineButton } from "../StyledComponents/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { resetData } from "../../store/slices/dataSlice";

export default function FooterBtn({
  setisEditable,
  setIsinEditMode,
  // originalData,
  // setData,
  // data,
}) {
  const dispatch = useDispatch();
  const confirm = () => {
    setisEditable("Cell2");
    setIsinEditMode(false);
  };
  // const resetData = () => setData(originalData);

  return (
    <div>
      <PrimaryButton size="large" onClick={confirm}>
        אישור
      </PrimaryButton>
      <OutlineButton onClick={()=>dispatch(resetData())}>ביטול</OutlineButton>
    </div>
  );
}
