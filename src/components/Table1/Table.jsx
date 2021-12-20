import React from "react";
import { useTable, usePagination, useExpanded } from "react-table";
import EditableCell from "./EditableCell";
import NonEditableCell from "./NonEditableCell";
import TablePagination from "./TablePagination";
import FooterBtn from "./FooterBtn";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import TableEditBtn from "./TableEditBtn";
import { TableWarp } from "../StyledComponents/EditBtn";

const defaultColumn = {
  Cell: EditableCell,
  Cell2: NonEditableCell,
};
function Table({
  setData,
  columns,
  data,
  updateMyData,
  skipPageReset,
  renderRowSubComponent,
  originalData,
}) {
  const [isEditable, setisEditable] = React.useState("Cell2");
  const [isinEditMode, setIsinEditMode] = React.useState(false);
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
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      autoResetPage: !skipPageReset,
      updateMyData,
    },
    useExpanded,
    usePagination
  );
  return (
    <>
      <TableEditBtn
        setisEditable={setisEditable}
        isEditable={isEditable}
        columns={columns}
        setData={setData}
        data={data}
        setIsinEditMode={setIsinEditMode}
        isinEditMode={isinEditMode}
      />
      <TableWarp>
        <table {...getTableProps()}>
          <TableHead headerGroups={headerGroups} />
          <TableBody
            getTableBodyProps={getTableBodyProps}
            page={page}
            prepareRow={prepareRow}
            isEditable={isEditable}
            renderRowSubComponent={renderRowSubComponent}
            visibleColumns={visibleColumns}
          />
        </table>
      </TableWarp>
      {isinEditMode && (
        <FooterBtn
          data={data}
          setData={setData}
          setisEditable={setisEditable}
          setIsinEditMode={setIsinEditMode}
          originalData={originalData}
        />
      )}
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
    </>
  );
}

export default Table;
