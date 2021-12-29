import * as React from "react";
import AdapterMoment from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { MyDatePicker, DatePickerWarp } from "./Elements";
import moment from "moment";

export default function NewDatePicker({onBlur, setValue, value}) {
  const ChangeFormateDate = (oldDate) => {
    return oldDate.toString().split("/").join(".");
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment} >
      <DatePicker
        value={value}
        onChange={(newValue) => {
          setValue(ChangeFormateDate(moment(newValue).format("L")));
        }}
        renderInput={({inputRef, inputProps, InputProps }) => (
          <DatePickerWarp onBlur={onBlur}>
            <MyDatePicker ref={inputRef} {...inputProps}/>
            {InputProps?.endAdornment}
          </DatePickerWarp>
        )}
      />
    </LocalizationProvider>
  );
}
