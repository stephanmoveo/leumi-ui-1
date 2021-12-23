import React from "react";
import { PrimaryButton } from "../StyledComponents/Buttons";
import { PageNumberInput, SelectPages } from "../StyledComponents/Elements";
export default function TablePagination({
  canPreviousPage,
  canNextPage,
  pageOptions,
  pageCount,
  gotoPage,
  nextPage,
  previousPage,
  setPageSize,
  pageIndex,
  pageSize,
}) {
  return (
    <div className="pagination" style={{ textAlign: "right",padding:'5px 0' }}>
      <PrimaryButton
        style={{ width: "20px" }}
        onClick={() => gotoPage(0)}
        disabled={!canPreviousPage}
      >
        {"<<"}
      </PrimaryButton>{" "}
      <PrimaryButton
        style={{ width: "20px" }}
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
      >
        {"<"}
      </PrimaryButton>{" "}
      <PrimaryButton
        style={{ width: "20px" }}
        onClick={() => nextPage()}
        disabled={!canNextPage}
      >
        {">"}
      </PrimaryButton>{" "}
      <PrimaryButton
        style={{ width: "20px" }}
        onClick={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}
      >
        {">>"}
      </PrimaryButton>{" "}
      <span>
        Page{" "}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{" "}
      </span>
      <span>
        | Go to page:{" "}
        <PageNumberInput
          type="number"
          defaultValue={pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          }}
          style={{ width: "100px" }}
        />
      </span>{" "}
      <SelectPages
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
      >
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </SelectPages>
    </div>
  );
}
