import React, { useState } from "react";
import "./Style.scss";
import Styledtable from "./components/Table1/Styledtable";
import { columnDataaa, mokeJsonData } from "./components/Data/MokeJson";
import TextInput from "./components/Form-elements/TextInput";
import DescriptionField from "./components/Form-elements/DescriptionField ";

function App() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const logDataReceived = (newData) => {
    console.log(newData);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
    setError(false);
  };
  const onBlur = () => {
    if (value.length < 5) return setError(true);
    return setError(false);
  };
  return (
    <div className="App">
      <div className="main">
        {/* <Styledtable
          tableData={mokeJsonData}
          columnData={columnDataaa}
          newDataCallback={logDataReceived}
          mainTitle='הגדרת מנהל'
          pagination={false}
          editMode={true}
        /> */}
        <TextInput
          label="הקלדה"
          value={value}
          handleChange={handleChange}
          // required={true}
          // disabled={true}
          // inputProps={
          //   { readOnly: true, }
          // }
          error={error}
          helperText="שדה לא נכוןןן"
          onBlur={onBlur}
          id='hheeyyyyy'
        />
        {/* <DescriptionField
          helperText="שדה לא נכוןןן"
          onBlur={onBlur}
          label="הקלדה"
          value={value}
          handleChange={handleChange}
          error={error}
          required={true}
          disabled={true}
          inputProps={{ readOnly: true }}
          id='hheeyyyyy'
        /> */}
      </div>
    </div>
  );
}

export default App;
