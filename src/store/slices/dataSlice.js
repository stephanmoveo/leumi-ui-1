import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  originalData: [],
  columnsData: [],
  isDialog: false,
  deleteRowId: "",
  isDisable: false,
  triggerConfirm: false,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setIsDialog: (state, action) => {
      if (action !== 0) {
        state.deleteRowId = action.payload;
        state.isDialog = !state.isDialog;
      } else {
        state.isDialog = !state.isDialog;
      }
    },
    getData: (state, action) => {
      state.data = action.payload;
      state.originalData = action.payload;
    },
    addRow: (state, action) => {
      const obj = {};
      action.payload.slice(1).forEach((item) => {
        if(item.initValue){
          console.log('okk');
         return obj[item.accessor] = item.initValue;
        }
        return obj[item.accessor] = "";
      });
      if (
        obj &&
        Object.keys(obj).length === 0 &&
        Object.getPrototypeOf(obj) === Object.prototype
      )
        return;
      else {
        state.data.splice(0, 0, obj);
        state.originalData = state.data;
      }
    },
    deleteRow: (state, action) => {
      state.originalData = state.data;
      const result = state.data.filter((item) => item.id !== state.deleteRowId);
      state.data = result;
      dataSlice.caseReducers.setIsDialog(state, 0);
      state.deleteRowId = "";
    },
    resetData: (state, action) => {
      state.data = state.originalData;
    },
    updateMyData: (state, action) => {
      state.originalData = state.data;
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
    getColumns: (state, action) => {
      state.columnsData = action.payload;
    },
    setIsDisable: (state, action) => {
      state.isDisable = !state.isDisable;
    },
    confirmEdit: (state, action) => {
      state.triggerConfirm = action.payload;
    },
  },
});

export const {
  addRow,
  deleteRow,
  resetData,
  updateMyData,
  getData,
  getColumns,
  setIsDialog,
  setIsDisable,
  confirmEdit,
} = dataSlice.actions;

export const getAllData = (state) => state.data;

export default dataSlice.reducer;
