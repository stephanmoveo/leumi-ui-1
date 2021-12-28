import React, { useEffect, useState } from "react";
import { OutlineButton, PrimaryLargeBtn, BorderLessBtn } from "../StyledComponents/Buttons";
import { useDispatch, useSelector } from "react-redux";
import {
  resetData,
  confirmEdit,
  setIsDisable,
} from "../../store/slices/dataSlice";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";

export default function FooterBtn({ setisEditable, setIsinEditMode }) {
  const isDisable = useSelector((state) => state.dataReducer.isDisable);

  const dispatch = useDispatch();
  const confirm = () => {
    dispatch(confirmEdit(true));
    setisEditable("Cell2");
    setIsinEditMode(false);
  };
  const resetNewData = () => {
    dispatch(setIsDisable());
    dispatch(resetData());
    // setIsinEditMode(false);
  };

  function PrimaryButton(props) {
    return <ButtonUnstyled {...props} component={PrimaryLargeBtn} />;
  }
  function PrimaryButtonOulined(props) {
    return <ButtonUnstyled {...props} component={BorderLessBtn} />;
  }

  return (
    <div>
      <PrimaryButton onClick={confirm} disabled={isDisable}>
        אישור
      </PrimaryButton>
      <PrimaryButtonOulined onClick={resetNewData} >
      ביטול
      </PrimaryButtonOulined>
    </div>
  );
}
