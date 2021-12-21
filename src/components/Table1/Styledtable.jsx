import React, { useState, useEffect, useMemo, useCallback } from "react";
import Styles from "../StyledComponents/MainTableWarp";
import { columnDataaa, mokeJsonData } from "../Data/MokeJson";
import { FlexDiv } from "../StyledComponents/Elements";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import { deleteRow, getData } from "../../store/slices/dataSlice";

function StyledTable() {
  useEffect(() => {
    dispatch(getData(mokeJsonData));
  }, []);
  const [datatoColumns] = useState(columnDataaa.slice(1));
  const [skipPageReset, setSkipPageReset] = useState(false);
  const data = useSelector((state) => state.dataReducer.data);
  const dispatch = useDispatch();

  const columns = useMemo( 
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

  useEffect(() => {
    setSkipPageReset(false);
  }, [data]);

  const renderRowSubComponent = useCallback(
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
