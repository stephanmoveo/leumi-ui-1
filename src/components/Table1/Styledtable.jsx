import React from "react";
import Styles from "./Styles";
import "./table.css";
import { mokeJson, columnData } from "../Data/MokeJson";
import { FlexDiv } from "../StyledComponents/EditBtn";
import HighlightOffIcon from "@mui/icons-material/HighlightOff"; 
import Table from "./Table";

function StyledTable() {
  const [data, setData] = React.useState(mokeJson);
  const [datatoColumns, setDatatoColumns] = React.useState(columnData);
  const [originalData] = React.useState(mokeJson);
  const [skipPageReset, setSkipPageReset] = React.useState(false);

  const deleterRow = (id) => {
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
        Header: "First Name",
        accessor: "firstName",
        Cell: ({ value, row }) => {
          return (
            <FlexDiv>
              <HighlightOffIcon
                style={{ marginRight: "5px", color: "grey", width: "20px" }}
                onClick={() => {
                  deleterRow(row.index);
                }}
              />
              {value}
            </FlexDiv>
          );
        },
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Age",
        accessor: "age",
      },
      {
        Header: "Visits",
        accessor: "visits",
      },
      {
        Header: "Status",
        accessor: "status",
        isLink: true,
      },
      {
        Header: "Profile Progress",
        accessor: "progress",
        editable: false,
      },
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
