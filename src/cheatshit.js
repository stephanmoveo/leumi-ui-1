const columnData = [
  {
    field: "actions",
    type: "actions",
    headerName: "",
    width: 100,
    editable: false,
    renderCell: (id) => {
      const isViewMode =
        id.api.getEditRowsModel() &&
        Object.keys(id.api.getEditRowsModel()).length === 0;
      const isSelectedRow = id.id === Object.keys(id.api.getEditRowsModel())[0];

      if (!isViewMode && isSelectedRow) {
        return [
          <GridActionsCellItem
            icon={<CancelIcon />}
            key={randomId()}
            label="Cancel"
            onClick={handleCancelClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<SaveIcon />}
            key={randomId()}
            label="Save"
            onClick={handleSaveClick(id)}
            color="primary"
          />,
        ];
      }
      return [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          key={randomId()}
          label="Delete"
          onClick={handleDeleteClick(id)}
          color="inherit"
        />,
        <GridActionsCellItem
          icon={<EditIcon />}
          key={randomId()}
          label="Edit"
          // className={classes.textPrimary}
          onClick={handleEditClick(id)}
          color="inherit"
        />,
      ];
    },
  },
  {
    headerName: "מקצוע",
    field: "column1",
    valueOptions: [
      { value: "1994,380", label: "אגרונום" },
      { value: "1994,381", label: "אופנה" },
      { value: "1994,382", label: "אח/אחות" },
      { value: "1994,383", label: "אמרגן" },
      { value: "1994,384", label: "אפסנאי" },
      { value: "1994,385", label: "ארכיטקט" },
      { value: "1994,386", label: "אדריכל" },
      { value: "1994,387", label: "אחר" },
      { value: "1994,388", label: "ביולוג" },
      { value: "1994,389", label: "במאי" },
      { value: "1994,390", label: "בנייה" },
      { value: "1994,391", label: "בנקאי" },
      { value: "1994,392", label: "גינון" },
    ],
    type: "singleSelect",
    editable: "true",
    width: 180,
  },
  {
    headerName: "אחר",
    field: "column2",
    valueOptions: undefined,
    type: "string",
    editable: "true",
    width: 180,
  },
  {
    headerName: "תאריך סטטוס",
    field: "column6",
    valueOptions: undefined,
    type: undefined,
    editable: "true",
    width: 180,
  },
];

const rowData = [
  {
    id: "1997,122446",
    column1: "1994,387",
    column2: "עובד ב  קרן גמלאות מ-י",
    column6: "03/07/2017",
  },
  { id: "1997,122447", column1: "1994,418", column6: "23/11/1986" },
  {
    id: "1997,114888485",
    column1: "1994,387",
    column2: "עובד במנהלת הגמלאות -החשב הכל",
    column6: "08/01/2021",
  },
  {
    id: "d15de48f-7473-561d-a181-e450cf79218e",
    rowMode: 1,
    column1: "1994,388",
    column2: undefined,
    column6: undefined,
  },
];

[
  {
    firstName: "play-3543c",
    lastName: "toys-bba22",
    age: 9,
    visits: 21,
    progress: 18,
    status: "relationship",
  },
  {
    firstName: "drop-nnwqg",
    lastName: "area-12b2u",
    age: 22,
    visits: 26,
    progress: 70,
    status: "complicated",
  },
  {
    firstName: "fuel-fx5qb",
    lastName: "look-rwqei",
    age: 2,
    visits: 30,
    progress: 34,
    status: "single",
  },
  {
    firstName: "change-e9mcd",
    lastName: "technology-qt2jz",
    age: 4,
    visits: 15,
    progress: 20,
    status: "relationship",
  },
  {
    firstName: "intention-81thr",
    lastName: "jar-3g9fv",
    age: 24,
    visits: 15,
    progress: 29,
    status: "relationship",
  },
  {
    firstName: "studio-e62o8",
    lastName: "marriage-rgotj",
    age: 7,
    visits: 37,
    progress: 45,
    status: "relationship",
  },
  {
    firstName: "analysis-s1jnu",
    lastName: "drum-qrs9l",
    age: 28,
    visits: 8,
    progress: 32,
    status: "single",
  },
  {
    firstName: "chapter-vkirz",
    lastName: "physics-cfsrf",
    age: 28,
    visits: 2,
    progress: 40,
    status: "single",
  },
  {
    firstName: "war-eh027",
    lastName: "stranger-m4g6y",
    age: 15,
    visits: 90,
    progress: 29,
    status: "complicated",
  },
  {
    firstName: "unit-6ohie",
    lastName: "inspector-1vavd",
    age: 26,
    visits: 58,
    progress: 34,
    status: "single",
  },
  {
    firstName: "expansion-mnokz",
    lastName: "obligation-y3itu",
    age: 21,
    visits: 53,
    progress: 75,
    status: "complicated",
  },
  {
    firstName: "significance-b0uaf",
    lastName: "judgment-l7jbg",
    age: 14,
    visits: 79,
    progress: 60,
    status: "single",
  },
  {
    firstName: "technology-ss1cr",
    lastName: "bears-lc7pd",
    age: 22,
    visits: 40,
    progress: 12,
    status: "relationship",
  },
  {
    firstName: "bell-nhylc",
    lastName: "sleet-w9jxu",
    age: 13,
    visits: 83,
    progress: 62,
    status: "complicated",
  },
  {
    firstName: "wire-v3pnr",
    lastName: "toothbrush-thlrg",
    age: 6,
    visits: 14,
    progress: 18,
    status: "complicated",
  },
  {
    firstName: "money-vmajw",
    lastName: "stretch-fguas",
    age: 1,
    visits: 2,
    progress: 72,
    status: "single",
  },
  {
    firstName: "height-nags6",
    lastName: "assistant-x8l4k",
    age: 18,
    visits: 19,
    progress: 91,
    status: "single",
  },
  {
    firstName: "market-jd0p5",
    lastName: "snail-sz3ym",
    age: 5,
    visits: 72,
    progress: 67,
    status: "single",
  },
  {
    firstName: "maid-wmdwk",
    lastName: "lunch-a52qh",
    age: 0,
    visits: 33,
    progress: 35,
    status: "complicated",
  },
  {
    firstName: "rhythm-4qhea",
    lastName: "cast-cb4fe",
    age: 3,
    visits: 50,
    progress: 60,
    status: "single",
  },
];

{
  Cell: ({ value, row }) => {
    return (
      <input
        disabled={row.original.isEditble === false}
        className="edit-input"
        defaultValue={value}
      />
    );
  };
}

// {
//   Header: "Delete",
//   id:'delete',
//   accessor: str => "delete",
// }

// {
//   Header: "Expand",
//   columns: [
//     {
//       expander: true,
//       Header: () => <strong>More</strong>,
//       width: 65,
//       Expander: ({ isExpanded, ...rest }) =>
//         <div>
//           {isExpanded
//             ? <span>&#x2299;</span>
//             : <span>&#x2295;</span>}
//         </div>,
//       style: {
//         cursor: "pointer",
//         fontSize: 25,
//         padding: "0",
//         textAlign: "center",
//         userSelect: "none"
//       },
//       Footer: () => <span>&hearts;</span>
//     }
//   ]
// }

// {renderRowSubComponent({ row }).values &&
//                       renderRowSubComponent({ row }).values.map((item) => {
//                         return (
//                           <div>
//                             <p>Adress: {item.adress}</p>
//                             <p>Country: {item.country}</p>
//                             <p>Date: {item.date}</p>
//                           </div>
//                         );
//                       })}

// border: none;
//   background-color: transparent;
//   color: #1976d2;
//   font-weight: 900;

function getColumns() {
  if (headers) {
    return headers.map((key) => {
      return {
        Header: key.toString(),
        accessor: key.toString(),
      };
    });
  }
}

/// <reference types="react-scripts" />

<td>
  <input
    placeholder={keyString}
    name={keyString}
    value={value}
    onBlur={onBlur}
    type="text"
    onChange={onChange}
  />
</td>;
<tr>
      {editableRowArr.length > 0 && <td>+</td>}
      {editableRowArr.length > 0 &&
        Object.keys(editableRowArr[0]).map((keyString, i) => {
          return keyString === undefined ? (
            ""
          ) :  (
            <td key={i}>
              <input
                placeholder={keyString}
                name={keyString}
                type="text"
              />
            </td>
          );
        })}
    </tr>

const isEmpty = !Object.values(original).some((x) => x !== null && x !== "");

function checkArray(data) {
  for (var i = 0; i < data.length; i++) {
    if (data[i] === "") return false;
  }
  return true;
}

// {
//   Header: "",
//   id: "2",
//   Cell2: ({ row }) => {
//     return <div onClick={() => console.log(row.original)}>show</div>;
//   },
// }

// Primary Button
// border-radius: 3px
// background-image:
// linear-gradient (to top, #126cf9 #479dff)