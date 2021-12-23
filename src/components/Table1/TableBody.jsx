import React from "react";
import ToolTip from "./ToolTip.jsx";
import { FlexDiv, AddInfoP, AddInfoDiv } from "../StyledComponents/Elements";
import { useSelector } from "react-redux";
import Fade from "@mui/material/Fade";

export default function TableBody({
  checked,
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
              {row.cells.map((cell, index) => {
                return cell.value === "" ? (
                  <td
                    {...cell.getCellProps()}
                    key={index}
                    style={{ maxWidth: cell.column.width }}
                  >
                    {cell.render(isCell)}
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
                <tr>
                  <td colSpan={visibleColumns.length}>
                    <FlexDiv style={{padding:'0 30px 0 0'}}>
                      {renderRowSubComponent({ row }).values.length > 0 &&
                        Object.keys(
                          renderRowSubComponent({ row }).values[0]
                        ).map((keyString, i) => {
                          return (
                            <AddInfoDiv>
                              <AddInfoP style={{ fontWeight: "900" }}>
                                {keyString.split("_").join(" ")}
                              </AddInfoP>
                              <AddInfoP key={i}>
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
