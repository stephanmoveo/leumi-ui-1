import React from "react";
import ToolTip from "./ToolTip.jsx";
import { FlexDiv, AddInfoP, AddInfoDiv } from "../StyledComponents/Elements";
import Fade from "@mui/material/Fade";

export default function TableBodyNoPagination({
  checked,
  getTableBodyProps,
  rows,
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
      {rows.map((row, i) => {
        prepareRow(row);
        return (
          <>
            <tr {...row.getRowProps()} key={i} style={row.isExpanded && active}>
              {row.cells.map((cell, index) => {
                return cell.value === "" ? (
                  <td
                    {...cell.getCellProps()}
                    key={index}
                    style={{ maxWidth: cell.column.width }}
                  >
                    {cell.render('Cell3')}
                  </td>
                ) : (
                  <ToolTip
                    key={index}
                    val={cell.value}
                    maxWidth={cell.column.width}     
                  >
                    <td
                      {...cell.getCellProps()}
                      key={index}
                      style={{ maxWidth: cell.column.width }}
                    >
                      {cell.render(isEditable)}
                    </td>
                  </ToolTip>
                );
              })}
            </tr>
            {row.isExpanded && renderRowSubComponent({ row }).values ? (
              <Fade in={!checked}>
                <tr style={{ backgroundColor: "#f1f4f9" }}>
                  <td colSpan={visibleColumns.length}>
                    <FlexDiv style={{ padding: "0 30px 0 0" }}>
                      {renderRowSubComponent({ row }).values.length > 0 &&
                        Object.keys(
                          renderRowSubComponent({ row }).values[0]
                        ).map((keyString, i) => {
                          return (
                            <AddInfoDiv key={i}>
                              <AddInfoP style={{ fontWeight: "900" }}>
                                {keyString.split("_").join(" ")}
                              </AddInfoP>
                              <AddInfoP>
                                {
                                  renderRowSubComponent({ row }).values[0][
                                    keyString
                                  ]
                                }
                              </AddInfoP>
                            </AddInfoDiv>
                          );
                        })}
                    </FlexDiv>
                  </td>
                </tr>
              </Fade>
            ) : null}
          </>
        );
      })}
    </tbody>
  );
}
