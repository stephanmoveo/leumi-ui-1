import { createSlice } from "@reduxjs/toolkit";
import { mokeJsonData } from "../../components/Data/MokeJson";
const initialState = {
  data: mokeJsonData,
  originalData: mokeJsonData,
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
    resetData: (state, action) => {
      state.data = state.originalData;
    },
    updateMyData: (state, action) => {
      const result = state.data.map((row, i) => {
        if (i === action.payload.index) {
          return {
            ...state.data[action.payload.index],
            [action.payload.id]: action.payload.value,
          };
        }
        return row;
      });
      state.data = result;
    },
  },
});

export const { addRow, deleteRow, resetData, updateMyData } = dataSlice.actions;

export default dataSlice.reducer;
