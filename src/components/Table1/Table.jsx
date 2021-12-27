import React, { useState } from "react";
import { useTable, usePagination, useSortBy, useExpanded } from "react-table";
import EditableCell from "./EditableCell";
import NonEditableCell from "./NonEditableCell";
import NewEditableCell from "./NewEditableCell";
import TablePagination from "./TablePagination";
import FooterBtn from "./FooterBtn";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import TableEditBtn from "./TableEditBtn";
import { TableWarp, FlexDivJusRight } from "../StyledComponents/Elements";
import { useSelector } from "react-redux";
import TableBodyNoPagination from "./TableBodyNoPagination";
import { getAllData } from "../../store/slices/dataSlice";
const defaultColumn = {
  Cell: EditableCell,
  Cell2: NonEditableCell,
  Cell3: NewEditableCell,
};
function Table({ columns, skipPageReset, renderRowSubComponent, checked , mainTitle}) {
  const [isEditable, setisEditable] = useState("Cell2");
  const [isinEditMode, setIsinEditMode] = useState(false);
  // const allData = useSelector(getAllData);
  const data = useSelector((state) => state.dataReducer.data);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    visibleColumns,
    rows,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      autoResetPage: !skipPageReset,
      // disableSortBy: true,
    },
    useSortBy,
    useExpanded,
    usePagination
  );
  const [isPagination, setIsPagination] = useState(false);
  return (
    <>
      <TableEditBtn
      mainTitle={mainTitle}
        gotoPage={gotoPage}
        setisEditable={setisEditable}
        isEditable={isEditable}
        columns={columns}
        setIsinEditMode={setIsinEditMode}
        setIsPagination={setIsPagination}
        isPagination={isPagination}
      />
      <TableWarp>
        <table {...getTableProps()}>
          <TableHead headerGroups={headerGroups} />
          {isPagination ? (
            <TableBody
              checked={checked}
              getTableBodyProps={getTableBodyProps}
              page={page}
              prepareRow={prepareRow}
              isEditable={isEditable}
              renderRowSubComponent={renderRowSubComponent}
              visibleColumns={visibleColumns}
            />
          ) : (
            <TableBodyNoPagination
              checked={checked}
              getTableBodyProps={getTableBodyProps}
              rows={rows}
              prepareRow={prepareRow}
              isEditable={isEditable}
              renderRowSubComponent={renderRowSubComponent}
              visibleColumns={visibleColumns}
            />
          )}
        </table>
      </TableWarp>
      <FlexDivJusRight>
        {isinEditMode ? (
          <FooterBtn
            setIsinEditMode={setIsinEditMode}
            setisEditable={setisEditable}
          />
        ) : (
          <div></div>
        )}
        {isPagination && (
          <TablePagination
            canPreviousPage={canPreviousPage}
            canNextPage={canNextPage}
            pageOptions={pageOptions}
            pageCount={pageCount}
            gotoPage={gotoPage}
            nextPage={nextPage}
            previousPage={previousPage}
            setPageSize={setPageSize}
            pageIndex={pageIndex}
            pageSize={pageSize}
          />
        )}
      </FlexDivJusRight>
    </>
  );
}

export default Table;
