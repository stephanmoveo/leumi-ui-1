import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useDispatch, useSelector } from "react-redux";
import { setIsValidationDialog } from "../../store/slices/dataSlice";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ValidationDialog() {
  const dispatch = useDispatch();
  const isValidationDialog = useSelector(
    (state) => state.dataReducer.isValidationDialog
  );
  const validationText = useSelector(
    (state) => state.dataReducer.validationText
  );

  const handleClose = () => {
    dispatch(setIsValidationDialog());   
  };

  return (
    <div>
      <Dialog
        open={isValidationDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{validationText}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>אישור</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
