import React from "react";
import Styles from "./Styles";
import { mokeJson, columnData } from "../Data/MokeJson";
import { FlexDiv } from "../StyledComponents/EditBtn";
import HighlightOffIcon from "@mui/icons-material/HighlightOff"; 
import Table from "./Table";

function StyledTable() {
  const [data, setData] = React.useState(mokeJson);
  const [datatoColumns, setDatatoColumns] = React.useState(columnData.slice(1));
  const [originalData] = React.useState(mokeJson);
  const [skipPageReset, setSkipPageReset] = React.useState(false);



  const deleteRow = (id) => {
    data.splice(id, 1);
    setData([...data]);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: () => null,
        id: "expander",
        Cell2: ({ row }) => (
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? "-" : "+"}
          </span>
        ),
        Cell: () => {
          return <div></div>;
        },
      },
      {
        Header: columnData[0].Header,
        accessor: columnData[0].accessor,
        Cell: ({ value, row }) => {
          return (
            <FlexDiv>
              <HighlightOffIcon
                style={{ marginRight: "5px", color: "grey", width: "20px" }}
                onClick={() => {
                  deleteRow(row.index);
                }}
              />
              {value}
            </FlexDiv>
          );
        },
      },
      ...datatoColumns
    ],
    []
  );
  const updateMyData = (rowIndex, columnId, value) => {
    setSkipPageReset(true);
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  React.useEffect(() => {
    setSkipPageReset(false);
  }, [data]);

  const resetData = () => setData(originalData);

  const renderRowSubComponent = React.useCallback(
    ({ row }) => ({
      values: row.original.addInfo && row.original.addInfo,
    }),
    []
  );
  return (
    <Styles>
      <h1>הגדרת מנהל</h1>
      <Table
        columns={columns}
        data={data}
        setData={setData}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
        renderRowSubComponent={renderRowSubComponent}
        resetData={resetData}
      />
    </Styles>
  );
}

export default StyledTable;
