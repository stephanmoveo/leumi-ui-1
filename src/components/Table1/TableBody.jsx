import React, { useRef, createRef } from "react";
import ToolTip from "./ToolTip.jsx";

export default function TableBody({
  getTableBodyProps,
  page,
  prepareRow,
  isEditable,
  renderRowSubComponent,
  visibleColumns,
}) {
  const mountedStyle = { animation: "inAnimation 250ms ease-in" };
  const unmountedStyle = {
    animation: "outAnimation 270ms ease-out",
    animationFillMode: "forwards",
  };
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
              {row.cells
                // .slice().reverse()
                .map((cell, i) => {
                  return (
                    <ToolTip val={cell.value}>
                      <td
                        className="cell"
                        {...cell.getCellProps()}
                        key={i}
                      >
                        {cell.render(isEditable)}
                      </td>
                    </ToolTip>
                  );
                })}
            </tr>
            {row.isExpanded && renderRowSubComponent({ row }).values ? (
              <tr style={renderRowSubComponent({ row }).values ? mountedStyle : unmountedStyle}>
                <td colSpan={visibleColumns.length}>
                  <div>
                    {renderRowSubComponent({ row }).values.length > 0 &&
                      Object.keys(renderRowSubComponent({ row }).values[0]).map(
                        (keyString, i) => {
                          return (
                            <p key={i}>
                              {keyString}:{" "}
                              {
                                renderRowSubComponent({ row }).values[0][
                                  keyString
                                ]
                              }
                            </p>
                          );
                        }
                      )}
                  </div>
                </td>
              </tr>
            ) : null}
          </>
        );
      })}
    </tbody>
  );
}
