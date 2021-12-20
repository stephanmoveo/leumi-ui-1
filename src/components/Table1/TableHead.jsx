import React from "react";

export default function TableHead({ headerGroups }) {
  return (
    <thead>
      {headerGroups.map((headerGroup, i) => (
        <tr {...headerGroup.getHeaderGroupProps()} key={i}>
          {headerGroup.headers.map((column) => (
            <th
              className="th-column"
              {...column.getHeaderProps()}
              style={{ width:column.id==='expander'?'10px': column.width }}
            >
              {column.render("Header")}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
}
