import React from "react";

export default function TableHead({headerGroups}) {
  return (
    <thead>
      {headerGroups.map((headerGroup, i) => (
        <tr {...headerGroup.getHeaderGroupProps()} key={i}>
          {headerGroup.headers.map((column) => (
            <th className="th-column" {...column.getHeaderProps()}>
              {column.render("Header")}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
}
