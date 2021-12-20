import React from "react";
import ToolTip from "./ToolTip.jsx";
import { FlexDiv, AddInfoP } from "../StyledComponents/EditBtn";
export default function TableBody({
  getTableBodyProps,
  page,
  prepareRow,
  isEditable,
  renderRowSubComponent,
  visibleColumns,
}) {
  const active = {
    backgroundColor: "#e7ebf2",
  };

  return (
    <tbody {...getTableBodyProps()}>
      {page.map((row, i) => {
        prepareRow(row);
        return (
          <>
            <tr {...row.getRowProps()} key={i} style={row.isExpanded && active}>
              {row.cells.map((cell, i) => {
                return (
                  <ToolTip val={cell.value} maxWidth={cell.column.width}>
                    <td
                      {...cell.getCellProps()}
                      key={i}
                      style={{ maxWidth: cell.column.width }}
                    >
                      {cell.render(isEditable)}
                    </td>
                  </ToolTip>
                );
              })}
            </tr>
            {row.isExpanded && renderRowSubComponent({ row }).values ? (
              <tr>
                <td colSpan={visibleColumns.length}>
                  <FlexDiv>
                    {renderRowSubComponent({ row }).values.length > 0 &&
                      Object.keys(renderRowSubComponent({ row }).values[0]).map(
                        (keyString, i) => {
                          return (
                            <AddInfoP key={i}>
                              {keyString}:{" "}
                              {
                                renderRowSubComponent({ row }).values[0][
                                  keyString
                                ]
                              }
                            </AddInfoP>
                          );
                        }
                      )}
                  </FlexDiv>
                </td>
              </tr>
            ) : null}
          </>
        );
      })}
    </tbody>
  );
}
