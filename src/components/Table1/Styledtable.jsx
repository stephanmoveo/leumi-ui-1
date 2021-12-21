import React from "react";
import Styles from "../StyledComponents/MainTableWarp";
import { columnDataaa, mokeJsonData } from "../Data/MokeJson";
import { FlexDiv } from "../StyledComponents/Elements";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import { deleteRow, getData } from "../../store/slices/dataSlice";

function StyledTable() {
  React.useEffect(() => {
    dispatch(getData(mokeJsonData));
  }, []);
  const [datatoColumns, setDatatoColumns] = React.useState(
    columnDataaa.slice(1)
  );
  const [skipPageReset, setSkipPageReset] = React.useState(false);
  const data = useSelector((state) => state.dataReducer.data);
  console.log(data);
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
                onClick={() => dispatch(deleteRow(row.index))}
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

  React.useEffect(() => {
    setSkipPageReset(false);
  }, [data]);

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
        skipPageReset={skipPageReset}
        renderRowSubComponent={renderRowSubComponent}
      />
    </Styles>
  );
}

export default StyledTable;
