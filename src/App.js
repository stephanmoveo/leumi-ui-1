import Styledtable from "./components/Table1/Styledtable";
import AlertDialog from "./components/Table1/AlertDialog";
import { columnDataaa, mokeJsonData } from "./components/Data/MokeJson";

function App() {
  const logDataReceived = (newData) => {
    console.log(newData);
  };
  return (
    <div className="App">
      <div style={{ width: "100%" }}>
        <Styledtable
          tableData={mokeJsonData}
          columnData={columnDataaa}
          newDataCallback={logDataReceived}
          mainTitle='הגדרת מנהל'
        />
        <AlertDialog />
      </div>
    </div>
  );
}

export default App;
