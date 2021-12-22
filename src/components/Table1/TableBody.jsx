import React, { useEffect, useState } from "react";
import ToolTip from "./ToolTip.jsx";
import { FlexDiv, AddInfoP } from "../StyledComponents/Elements";
import { useDispatch, useSelector } from "react-redux";

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
  const isCell = useSelector((state) => state.dataReducer.isCell);

  return (
    <tbody {...getTableBodyProps()}>
      {page.map((row, i) => {
        prepareRow(row);
        return (
          <>
            <tr {...row.getRowProps()} key={i} style={row.isExpanded && active}>
              {row.cells.map((cell, i) => {
                return cell.value === "" ? (
                  <td
                    {...cell.getCellProps()}
                    key={i}
                    style={{ maxWidth: cell.column.width }}
                  >
                    {cell.render(isCell)}
                  </td>
                ) : (
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
