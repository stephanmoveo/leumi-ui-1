import { createSlice } from "@reduxjs/toolkit";
import { mokeJsonData } from "../../components/Data/MokeJson";
const initialState = {
  data: mokeJsonData,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addRow: (state, action) => {
      const obj = {};
      action.payload.slice(1).forEach((item, i) => {
        obj[item.accessor] = "";
      });
      if (
        obj &&
        Object.keys(obj).length === 0 &&
        Object.getPrototypeOf(obj) === Object.prototype
      )
        return;
      else {
        state.data.splice(0, 0, obj);
      }
    },
    deleteRow: (state, action) => {
      let r = window.confirm("Are You Sure You Want To Delete Row?");
      if (r == true) {
        state.data.splice(action.payload, 1);
      }
    },
  },
});

export const { addRow, deleteRow } = dataSlice.actions;

export default dataSlice.reducer;
