import React from "react";
import ToolTip from "./ToolTip.jsx";

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
              {row.cells
                // .slice().reverse()
                .map((cell, i) => {
                  return (
                    <ToolTip val={cell.value}>
                      <td {...cell.getCellProps()} key={i}>
                        {cell.render(isEditable)}
                      </td>
                    </ToolTip>
                  );
                })}
            </tr>
            {row.isExpanded && renderRowSubComponent({ row }).values ? (
              <tr>
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
