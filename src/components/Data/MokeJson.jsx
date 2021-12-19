const rendomId = () => {
  const id = Math.floor(1000 + Math.random() * 9000);
  return id;
};

export const columnDataaa = [
  {
    Header: "שם המנהל",
    accessor: "שם",
    type:'string'
  },
  {
    Header: "תעודה זהות",
    accessor: "תז",
    type:'string'
  },
  {
    Header: "סניף",
    accessor: "סניף",
    isSortable: true,
    type:'string'
  },
  {
    Header: "תת סניף",
    accessor: "תת",
    type:'string'
  },
  {
    Header: "דרג ניהול",
    accessor: "דרג",
    editable: false,
    type:'string'

  },
  {
    Header: "תאריך סיום תוקף הגדרה",
    accessor: "תאריך",
    isLink: true,
    type:'date'
  },
];

export const mokeJsonData = [
  {
    id: rendomId(),
    שם: "יוסי שיטרית",
    תז: "895723985678768756",
    סניף: 123,
    תת: "עסקים",
    דרג: "מנהל",
    תאריך: "21.05.2021",
    addInfo: [
      {
        adress: "tel aviv",
        country: "israel",
        date: "12/9/2021",
      },
    ],
  },
  {
    id: rendomId(),
    שם: "אבי אבי",
    תז: "89572399090",
    סניף: 123,
    תת: "עסקים",
    דרג: "מנהל",
    תאריך: "09.02.2021",
  },
  {
    id: rendomId(),
    שם: "ערן ערן",
    תז: "89572558567",
    סניף: 123,
    תת: "עסקים",
    דרג: "מנהל",
    תאריך: "21.09.2019",
  },
  {
    id: rendomId(),
    שם: "יוסי יוסי",
    תז: "89572398337",
    סניף: 123,
    תת: "עסקים",
    דרג: "מנהל",
    תאריך: "03.11.2020",
  },
  {
    id: rendomId(),
    שם: "יוסי שיטרית",
    תז: "89572398567",
    סניף: 123,
    תת: "עסקים",
    דרג: "מנהל",
    תאריך: "21.05.2021",
    addInfo: [
      {
        adress: "tel aviv",
        country: "israel",
        date: "12/9/2021",
      },
    ],
  },
  {
    id: rendomId(),
    שם: "אבי אבי",
    תז: "89572399090",
    סניף: 123,
    תת: "עסקים",
    דרג: "מנהל",
    תאריך: "09.02.2021",
  },
  {
    id: rendomId(),
    שם: "ערן ערן",
    תז: "89572558567",
    סניף: 123,
    תת: "עסקים",
    דרג: "מנהל",
    תאריך: "21.09.2019",
  },
  {
    id: rendomId(),
    שם: "יוסי יוסי",
    תז: "89572398337",
    סניף: 123,
    תת: "עסקים",
    דרג: "מנהל",
    תאריך: "03.11.2020",
  },
  {
    id: rendomId(),
    שם: "יוסי שיטרית",
    תז: "89572398567",
    סניף: 123,
    תת: "עסקים",
    דרג: "מנהל",
    תאריך: "21.05.2021",
    addInfo: [
      {
        adress: "tel aviv",
        country: "israel",
        date: "12/9/2021",
      },
    ],
  },
  {
    id: rendomId(),
    שם: "אבי אבי",
    תז: "89572399090",
    סניף: 123,
    תת: "עסקים",
    דרג: "מנהל",
    תאריך: "09.02.2021",
  },
  {
    id: rendomId(),
    שם: "ערן ערן",
    תז: "89572558567",
    סניף: 123,
    תת: "עסקים",
    דרג: "מנהל",
    תאריך: "21.09.2019",
  },
  {
    id: rendomId(),
    שם: "יוסי יוסי",
    תז: "89572398337",
    סניף: 123,
    תת: "עסקים",
    דרג: "מנהל",
    תאריך: "03.11.2020",
  },
  {
    id: rendomId(),
    שם: "יוסי שיטרית",
    תז: "89572398567",
    סניף: 123,
    תת: "עסקים",
    דרג: "מנהל",
    תאריך: "21.05.2021",
    addInfo: [
      {
        adress: "tel aviv",
        country: "israel",
        date: "12/9/2021",
      },
    ],
  },
  {
    id: rendomId(),
    שם: "אבי אבי",
    תז: "89572399090",
    סניף: 123,
    תת: "עסקים",
    דרג: "מנהל",
    תאריך: "09.02.2021",
  },
  {
    id: rendomId(),
    שם: "ערן ערן",
    תז: "89572558567",
    סניף: 123,
    תת: "עסקים",
    דרג: "מנהל",
    תאריך: "21.09.2019",
  },
  {
    id: rendomId(),
    שם: "יוסי יוסי",
    תז: "89572398337",
    סניף: 123,
    תת: "עסקים",
    דרג: "מנהל",
    תאריך: "03.11.2020",
  },
];

// export const columnData = [
//   {
//     Header: "First Name",
//     accessor: "firstName",
//   },
//   {
//     Header: "Last Name",
//     accessor: "lastName",
//   },
//   {
//     Header: "Age",
//     accessor: "age",
//   },
//   {
//     Header: "Visits",
//     accessor: "visits",
//   },
//   {
//     Header: "Status",
//     accessor: "status",
//     isLink: true,
//   },
//   {
//     Header: "Profile Progress",
//     accessor: "progress",
//     editable: false,
//   },
// ];
