import React, { useEffect, useState } from "react";
import { PrimaryButton, OutlineButton } from "../StyledComponents/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { resetData, confirmEdit } from "../../store/slices/dataSlice";

export default function FooterBtn({ setisEditable, setIsinEditMode }) {
  const isDisable = useSelector((state) => state.dataReducer.isDisable);
  const dispatch = useDispatch();
  const confirm = () => {
    setisEditable("Cell2");
    setIsinEditMode(false)
  };
  return (
    <div>
      <PrimaryButton size="large" onClick={confirm} disabled={isDisable}>
        אישור
      </PrimaryButton>
      <OutlineButton onClick={() => dispatch(resetData())}>ביטול</OutlineButton>
    </div>
  );
}
