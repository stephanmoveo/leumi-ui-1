import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { deleteRow, setIsDialog } from "../../store/slices/dataSlice";

export default function AlertDialog() {
  const open = useSelector((state) => state.dataReducer.isDialog);
  const dispatch = useDispatch();

  const agree = () => {
    dispatch(deleteRow());
  };

  const disagree = () => {
    dispatch(setIsDialog());
  };

  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Are you sure you want to delete row?"}
      </DialogTitle>

      <DialogActions>
        <Button onClick={disagree}>Disagree</Button>
        <Button onClick={agree}>Agree</Button>
      </DialogActions>
    </Dialog>
  );
}
