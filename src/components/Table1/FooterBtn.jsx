import React from "react";
import { PrimaryButton, OutlineButton } from "../StyledComponents/Buttons";
import { useDispatch } from "react-redux";
import { resetData } from "../../store/slices/dataSlice";

export default function FooterBtn({ setisEditable, setIsinEditMode }) {
  const dispatch = useDispatch();
  const confirm = () => {
    setisEditable("Cell2");
    setIsinEditMode(false);
  };
  return (
    <div>
      <PrimaryButton size="large" onClick={confirm}>
        אישור
      </PrimaryButton>
      <OutlineButton onClick={() => dispatch(resetData())}>ביטול</OutlineButton>
    </div>
  );
}
