import React from "react";
import { PrimaryButton, OutlineButton } from "../StyledComponents/Buttons";

export default function FooterBtn({
  setisEditable,
  resetData,
  setIsinEditMode,
}) {
  const confirm = () => {
    setisEditable("Cell2");
    setIsinEditMode(false);
  };

  return (
    <div>
      <PrimaryButton size="large" onClick={confirm}>
        אישור
      </PrimaryButton>
      <OutlineButton onClick={resetData}>ביטול</OutlineButton>
    </div>
  );
}
