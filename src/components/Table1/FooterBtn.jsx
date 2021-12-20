import React from "react";
import { PrimaryButton, OutlineButton } from "../StyledComponents/Buttons";

export default function FooterBtn({
  setisEditable,
  setIsinEditMode,
  originalData,
  setData,
  data
}) {
  const confirm = () => {
    setData([...data])
    setisEditable("Cell2");
    setIsinEditMode(false);
  };
  const resetData = () => setData(originalData);

  return (
    <div>
      <PrimaryButton size="large" onClick={confirm}>
        אישור
      </PrimaryButton>
      <OutlineButton onClick={resetData}>ביטול</OutlineButton>
    </div>
  );
}
