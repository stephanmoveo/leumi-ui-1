import React, { useState, useEffect, useMemo, useCallback } from "react";
import Styles from "../StyledComponents/MainTableWarp";
import { columnDataaa, mokeJsonData } from "../Data/MokeJson";
import { FlexDiv } from "../StyledComponents/Elements";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import { deleteRow, getData, getColumns } from "../../store/slices/dataSlice";
import FormControlLabel from "@mui/material/FormControlLabel";
import ToolTip from "./ToolTip";

function StyledTable() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData(mokeJsonData));
    dispatch(getColumns(columnDataaa));
  }, [dispatch]);
  const [datatoColumns] = useState(columnDataaa.slice(1));
  const [skipPageReset, setSkipPageReset] = useState(false);
  const data = useSelector((state) => state.dataReducer.data);
  const dataColumns = useSelector((state) => state.dataReducer.columnsData);

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const columns = useMemo(
    () => [
      {
        Header: "",
        id: "expander",
        Cell2: ({ row }) => {
          return row.original.addInfo ? (
            <ToolTip val={row.isExpanded ? "הסתר" : "הצג"}>
              <FormControlLabel
                control={
                  <span
                    onClick={handleChange}
                    {...row.getToggleRowExpandedProps()}
                  >
                    {" "}
                    {row.isExpanded ? "-" : "+"}
                  </span>
                }
                label=""
              />
            </ToolTip>
          ) : null;
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
            <FlexDiv >
              <ToolTip val="מחיקה" >
                <HighlightOffIcon
                  style={{ marginRight: "5px", color: "grey", width: "20px" }}
                  onClick={() => dispatch(deleteRow(row.index))}
                />
              </ToolTip>
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
    setSkipPageReset(true);
  }, [data]);

  const renderRowSubComponent = useCallback(
    ({ row }) => ({
      values: row.original.addInfo && row.original.addInfo,
    }),
    []
  );
  return (
    <Styles>
      <Table
        columns={columns}
        skipPageReset={skipPageReset}
        renderRowSubComponent={renderRowSubComponent}
        checked={checked}
      />
    </Styles>
  );
}

export default StyledTable;
