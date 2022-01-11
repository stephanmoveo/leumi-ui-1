import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  dataResult: [],
  originalData: [],
  columnsData: [],
  isDialog: false,
  deleteRowId: "",
  isDisable: false,
  triggerConfirm: false,
  isNewRow: false,
  isValidationDialog: false,
  validationText:''
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setValidationText:(state, action)=>{
      state.validationText= action.payload
    },
    setIsValidationDialog: (state, action) => {
      state.isValidationDialog = !state.isValidationDialog;
    },
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
      // state.originalData = state.data;
      const obj = {};
      action.payload.slice(1).forEach((item) => {
        if (item.initValue) {
          return (obj[item.accessor] = item.initValue);
        }
        return (obj[item.accessor] = "");
      });
      if (
        obj &&
        Object.keys(obj).length === 0 &&
        Object.getPrototypeOf(obj) === Object.prototype
      )
        return;
      else {
        const newArr = state.data.splice(0, 0, obj);
        if (newArr.length <= 0) return;
        state.data = newArr;
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
      state.isDisable = action.payload;
    },
    confirmEdit: (state, action) => {
      state.triggerConfirm = action.payload;
      state.isNewRow = false;
    },
    setIsNewRow: (state, action) => {
      state.isNewRow = true;
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
  setIsNewRow,
  setIsValidationDialog,
  setValidationText
} = dataSlice.actions;

export const getAllData = (state) => state.data;

export default dataSlice.reducer;
