import React from "react";
import Styles from "./Styles";
import { columnDataaa, mokeJsonData } from "../Data/MokeJson";
import { FlexDiv } from "../StyledComponents/EditBtn";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import { deleteRow } from "../../store/slices/dataSlice";

function StyledTable() {
  const [data, setData] = React.useState(mokeJsonData);
  const [datatoColumns, setDatatoColumns] = React.useState(
    columnDataaa.slice(1)
  );
  const [originalData] = React.useState(mokeJsonData);
  const [skipPageReset, setSkipPageReset] = React.useState(false);
  // const data = useSelector((state) => state.dataReducer.data);
  const dispatch = useDispatch();

  const columns = React.useMemo(
    () => [
      {
        Header: "",
        id: "expander",
        Cell2: ({ row }) => {
          return (
            <span {...row.getToggleRowExpandedProps()}>
              {row.isExpanded ? "-" : "+"}
            </span>
          );
        },
        Cell: () => {
          return <div></div>;
        },
      },
      {
        Header: columnDataaa[0].Header,
        accessor: columnDataaa[0].accessor,
        Cell: ({ value, row }) => {
          return (
            <FlexDiv>
              <HighlightOffIcon
                style={{ marginRight: "5px", color: "grey", width: "20px" }}
                onClick={() => dispatch(deleteRow(row.value))}
              />
              {value}
            </FlexDiv>
          );
        },
      },
      ...datatoColumns,
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

  // const deleteRow = (index) => {
  //   let r = window.confirm("Are You Sure You Want To Delete Row?");
  //   if (r == true) {
  //     data.splice(index, 1);
  //     setData([...data]);
  //   }
  // };
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
        originalData={originalData}
        setData={setData}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
        renderRowSubComponent={renderRowSubComponent}
      />
    </Styles>
  );
}

export default StyledTable;
