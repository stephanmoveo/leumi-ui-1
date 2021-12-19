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

const arrLength = page.length;
const elRefs = React.useRef([]);

React.useEffect(() => {
  elRefs.current = elRefs.current.slice(0, arrLength);
}, [])

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
                  <ToolTip val={cell.value}  elRefs={elRefs} index={i}>
                    <td className="cell" {...cell.getCellProps()} key={i} 
                    ref={el => elRefs.current[i] = el} 
                    >
                      {cell.render(isEditable)}
                    </td>
                  </ToolTip>
                );
              })}
            </tr>
            {row.isExpanded && renderRowSubComponent({ row }).values ? (
              <tr style={row.isExpanded ? mountedStyle : unmountedStyle}>
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
