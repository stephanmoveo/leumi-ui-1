import React, { useEffect, useState } from "react";
import { PrimaryButton, OutlineButton } from "../StyledComponents/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { resetData, confirmEdit } from "../../store/slices/dataSlice";
import NotInterestedIcon from "@mui/icons-material/NotInterested";

export default function FooterBtn({ setisEditable, setIsinEditMode }) {
  const dispatch = useDispatch();
  const [isHover, setisHover] = useState(true);
  const confirm = () => {
    dispatch(confirmEdit());
    setisEditable("Cell2");
    setIsinEditMode(false);
  };
  return (
    <div>
      {/* {isHover && <NotInterestedIcon  />} */}
      <PrimaryButton size="large" onClick={confirm} disabled={false} onMouseEnter={()=>setisHover(!isHover)}>
        אישור
      </PrimaryButton>
      <OutlineButton onClick={() => dispatch(resetData())}>ביטול</OutlineButton>
    </div>
  );
}
