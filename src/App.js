import React, { useState } from "react";
import "./Style.scss";
import Styledtable from "./components/Table1";
import { columnDataaa, mokeJsonData,valedTablebata, validColumnsData } from "./components/Data/MokeJson";
import TextInput from "./components/Form-elements/TextInput";
import DescriptionField from "./components/Form-elements/DescriptionField ";
import DropDown from "./components/Form-elements/DropDown";
import AutoCompleteDropDown from "./components/Form-elements/AutoCompleteDropDown";
import MultiSelectDropDown from './components/Form-elements/MultiSelectDropDown'
import ValidationDialog from './components/Dialogs/ValidationDialog'
function App() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const logDataReceived = (newData) => {
    console.log(newData);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
    // setError(false);
  };
  const onBlur = () => {
    if (value.length < 5) return setError(true);
    return setError(false);
  };
  return (
    <div className="App">
      <div className="main">

        {/* <MultiSelectDropDown valueOptions={valueOptions}/>
        <AutoCompleteDropDown 
        disabled={true}
        noOptionsText='לא נמצאו תוצאות'
        values={countries} />
        <DropDown
          valueOptions={valueOptions}
          handleChange={handleChange}
          value={value}
          disabled={false}
          error={false}
          required={false}
        /> */}
        <Styledtable
          tableData={valedTablebata}
          columnData={validColumnsData}
          // newDataCallback={logDataReceived}
          mainTitle='הגדרת מנהל'
          pagination={false}
          editMode={true}
        />
        {/* <Styledtable
          tableData={mokeJsonData}
          columnData={columnDataaa}
          // newDataCallback={logDataReceived}
          mainTitle='הגדרת מנהל'
          pagination={false}
          editMode={true}
        /> */}
        <ValidationDialog/>
        {/* <TextInput
          label="הקלדה"
          value={value}
          handleChange={handleChange}
          required={true}
          // disabled={true}
          // inputProps={
          //   { readOnly: true, }
          // }
          error={error}
          helperText="שדה לא נכוןןן"
          onBlur={onBlur}
          id="hheeyyyyy"
        /> */}
        {/* <DescriptionField
          helperText="שדה לא נכוןןן"
          onBlur={onBlur}
          label="הקלדה"
          value={value}
          handleChange={handleChange}
          error={error}
          required={false}
          disabled={false}
          inputProps={{ readOnly: true }}
          id="hheeyyyyy"
        /> */}
      </div>
    </div>
  );
}
const countries = [
  {
    name: "משה",
    age: "45",
  },
  {
    name: "הרצל",
    age: "33",
  },
  {
    name: "אבי",
    age: "22",
  },
  {
    name: "הילה",
    age: "11",
  },
  {
    name: "אלירן",
    age: "99",
  },
  {
    name: "אורן",
    age: "73",
  },
];
export default App;

const valueOptions = ["בחידה 5","בחידה 1", "בחידה 2", "בחידה 3", "בחידה 4", "בחידה 6"];

