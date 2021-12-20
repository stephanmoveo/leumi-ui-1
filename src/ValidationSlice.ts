import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  getCodeInvalidMsg,
  getEmailInvalidMsg,
  getPasswordInvalidMsg,
  getPasswordAgainInvalidMsg,
  getFullNameInvalidMsg,
  getCompanyInvalidMsg,
} from '../utils/auth';

export const validationSlice = createSlice({
  name: 'validation',
  initialState: {
    code: '',
    email: '',
    currentPassword: "",
    password: '',
    passwordAgain: '',
    fullName: '',
    company: '',
    imgUrl: '',
    invalidMsg: {
      code: '',
      email: '',
      password: '',
      passwordAgain: '',
      fullName: '',
      company: '',
      imgUrl: '',
    },
    errorMsg: '',
    infoMsg: '',
  },
  reducers: {
    resetForm: (state: any) => {
      state.code = '';
      state.email = '';
      state.password = '';
      state.passwordAgain = '';
      state.fullName = '';
      state.company = '';
      state.imgUrl = '';
      state.invalidMsg.code = '';
      state.invalidMsg.email = '';
      state.invalidMsg.currentPassword = '';
      state.invalidMsg.password = '';
      state.invalidMsg.passwordAgain = '';
      state.invalidMsg.fullName = '';
      state.invalidMsg.company = '';
      state.invalidMsg.imgUrl = '';
      state.errorMsg = '';
      state.infoMsg = '';
    },
    changeInputField: (
      state: any,
      action: PayloadAction<{ field: string; value: string }>
    ) => {
      state[action.payload.field] = action.payload.value;
      state.errorMsg = '';
    },
    validateCode: (state: any, action: PayloadAction<{ code: string }>) => {
      state.invalidMsg.code = getCodeInvalidMsg(action.payload.code);
    },
    validateEmail: (state: any, action: PayloadAction<{ email: string }>) => {
      state.invalidMsg.email = getEmailInvalidMsg(action.payload.email);
    },
    validateCurrentPassword: (
      state: any,
      action: PayloadAction<{ currentPassword: string }>
    ) => {
      state.invalidMsg.currentPassword = getPasswordInvalidMsg(
        action.payload.currentPassword
      );
    },
    validatePassword: (
      state: any,
      action: PayloadAction<{ password: string }>
    ) => {
      state.invalidMsg.password = getPasswordInvalidMsg(
        action.payload.password
      );
    },
    validatePasswordAgain: (
      state: any,
      action: PayloadAction<{ passwordAgain: string }>
    ) => {
      state.invalidMsg.passwordAgain = getPasswordAgainInvalidMsg(
        action.payload.passwordAgain,
        state.password
      );
    },
    validateFullName: (
      state: any,
      action: PayloadAction<{ fullName: string }>
    ) => {
      state.invalidMsg.fullName = getFullNameInvalidMsg(
        action.payload.fullName
      );
    },
    validateCompany: (
      state: any,
      action: PayloadAction<{ company: string }>
    ) => {
      state.invalidMsg.company = getCompanyInvalidMsg(action.payload.company);
    },
    setFormError: (state: any, action: PayloadAction<{ errorMsg: string }>) => {
      state.errorMsg = action.payload.errorMsg;
      state.invalidMsg.email = state.invalidMsg.password = '';
    },
    setInfoMsg: (state: any, action: PayloadAction<{ infoMsg: string }>) => {
      state.infoMsg = action.payload.infoMsg;
    },
  },
});

export const {
  resetForm,
  changeInputField,
  validateCode,
  validateEmail,
  validatePassword,
  validatePasswordAgain,
  validateFullName,
  validateCompany,
  setFormError,
  setInfoMsg,
  validateCurrentPassword,
} = validationSlice.actions;

export default validationSlice.reducer;
