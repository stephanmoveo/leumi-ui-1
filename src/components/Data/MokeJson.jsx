const rendomId = () => {
  const id = Math.floor(1000 + Math.random() * 9000);
  return id;
};

export const columnDataaa = [
  {
    Header: "שם המנהל",
    accessor: "שם",
    type: "string",
    initValue:"מנהל חדש",
    disableSortBy: true
  },
  {
    Header: "תעודה זהות",
    accessor: "תז",
    type: "string",
    width: 115,
    initValue:" 895729385798",
  },
  {
    Header: "סניף",
    accessor: "סניף",
    editable: false,
    type: "string",
    width: 80,
  },
  {
    Header: "תת סניף",
    accessor: "תת",
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
    width: 80,
  },
  {
    Header: "דרג ניהול",
    accessor: "דרג",
    required: true,
    type: "string",
    width: 80,
  },
  {
    Header: "תאריך סיום תוקף הגדרה",
    accessor: "תאריך",
    isLink: true,
    type: "date",
    width: 100,
  },
];

export const mokeJsonData = [
  {
    id: rendomId(),
    שם: "יוסי שיטרית",
    תז: "8957239 8567865875778 5875875886576 8756",
    סניף: 123,
    תת: "אגרונום",
    דרג: "מנהל",
    תאריך: "03.11.2021",
    addInfo: [
      {
        כתובת: "שדרות בן - גוריון 7, תל - אביב, ישראל",
        מדינת_כתובת: "ישראל",
        תאריך_הקמה: "20.11.19",
        תאריך_סגירה: "20.11.19",
        תאריך_סגמנטציה: "20.11.19",
      },
    ],
  },
  {
    id: rendomId(),
    שם: "אבי אבי",
    תז: "89572399090",
    סניף: 123,
    תת: "אופנה",
    דרג: "מנהל",
    תאריך: "03.11.2021",
  },
  {
    id: rendomId(),
    שם: "ערן ערן",
    תז: "89572558567",
    סניף: 123,
    תת: "אח/אחות",
    דרג: "מנהל",
    תאריך: "03.11.2021",
  },
  {
    id: rendomId(),
    שם: "יוסי יוסי",
    תז: "89572398337",
    סניף: 123,
    תת: "אמרגן",
    דרג: "מנהל",
    תאריך: "03.10.2020",
  },
  {
    id: rendomId(),
    שם: "אבי כהן",
    תז: "89572398567",
    סניף: 123,
    תת: "אפסנאי",
    דרג: "מנהל",
    תאריך: "01.05.2021",
    addInfo: [
      {
        כתובת: "שדרות בן - גוריון 7, תל - אביב, ישראל",
        מדינת_כתובת: "ישראל",
        תאריך_הקמה: "20.11.19",
        תאריך_סגירה: "20.11.19",
        תאריך_סגמנטציה: "20.11.19",
      },
    ],
  },
  {
    id: rendomId(),
    שם: "אסי בודגלו",
    תז: "8957239 8567865875778 5875875886576 8756",
    סניף: 123,
    תת: "ארכיטקט",
    דרג: "מנהל",
    תאריך: "03.11.2021",
    addInfo: [
      {
        כתובת: "שדרות בן - גוריון 7, תל - אביב, ישראל",
        מדינת_כתובת: "ישראל",
        תאריך_הקמה: "20.11.19",
        תאריך_סגירה: "20.11.19",
        תאריך_סגמנטציה: "20.11.19",
      },
    ],
  },
  {
    id: rendomId(),
    שם: "ארז טל",
    תז: "89572399090",
    סניף: 123,
    תת: "אדריכל",
    דרג: "מנהל",
    תאריך: "03.11.2021",
  },
  {
    id: rendomId(),
    שם: "אמיר אתרי",
    תז: "8957239 8567865875778 5875875886576 8756",
    סניף: 123,
    תת: "אחר",
    דרג: "מנהל",
    תאריך: "03.11.2021",
    addInfo: [
      {
        כתובת: "שדרות בן - גוריון 7, תל - אביב, ישראל",
        מדינת_כתובת: "ישראל",
        תאריך_הקמה: "20.11.19",
        תאריך_סגירה: "20.11.19",
        תאריך_סגמנטציה: "20.11.19",
      },
    ],
  },
  {
    id: rendomId(),
    שם: "הרצל שניצל",
    תז: "89572399090",
    סניף: 123,
    תת: "ביולוג",
    דרג: "מנהל",
    תאריך: "03.11.2021",
  },
  {
    id: rendomId(),
    שם: "אח של הרצל",
    תז: "89572558567",
    סניף: 123,
    תת: "במאי",
    דרג: "מנהל",
    תאריך: "03.11.2021",
  },
  {
    id: rendomId(),
    שם: "נעם היפה",
    תז: "89572398337",
    סניף: 123,
    תת: "בנייה",
    דרג: "מנהל",
    תאריך: "03.10.2020",
  },
  {
    id: rendomId(),
    שם: "טל גדליהו",
    תז: "89572398567",
    סניף: 123,
    תת: "בנקאי",
    דרג: "מנהל",
    תאריך: "01.05.2021",
    addInfo: [
      {
        כתובת: "שדרות בן - גוריון 7, תל - אביב, ישראל",
        מדינת_כתובת: "ישראל",
        תאריך_הקמה: "20.11.19",
        תאריך_סגירה: "20.11.19",
        תאריך_סגמנטציה: "20.11.19",
      },
    ],
  },
  {
    id: rendomId(),
    שם: "טלי מזל",
    תז: "8957239 8567865875778 5875875886576 8756",
    סניף: 123,
    תת: "גינון",
    דרג: "מנהל",
    תאריך: "03.11.2021",
    addInfo: [
      {
        כתובת: "שדרות בן - גוריון 7, תל - אביב, ישראל",
        מדינת_כתובת: "ישראל",
        תאריך_הקמה: "20.11.19",
        תאריך_סגירה: "20.11.19",
        תאריך_סגמנטציה: "20.11.19",
      },
    ],
  },
  {
    id: rendomId(),
    שם: "איתי לוי",
    תז: "89572399090",
    סניף: 123,
    תת: "עסקים",
    דרג: "מנהל",
    תאריך: "03.11.2021",
  },
  {
    id: rendomId(),
    שם: "יוסי עדן",
    תז: "8957239 8567865875778 5875875886576 8756",
    סניף: 123,
    תת: "אגרונום",
    דרג: "מנהל",
    תאריך: "03.11.2021",
    addInfo: [
      {
        כתובת: "שדרות בן - גוריון 7, תל - אביב, ישראל",
        מדינת_כתובת: "ישראל",
        תאריך_הקמה: "20.11.19",
        תאריך_סגירה: "20.11.19",
        תאריך_סגמנטציה: "20.11.19",
      },
    ],
  },
  {
    id: rendomId(),
    שם: "שלמה ארצי",
    תז: "89572399090",
    סניף: 123,
    תת: "אופנה",
    דרג: "מנהל",
    תאריך: "03.11.2021",
  },
  {
    id: rendomId(),
    שם: "יותם זאבי",
    תז: "89572558567",
    סניף: 123,
    תת: "אח/אחות",
    דרג: "מנהל",
    תאריך: "03.11.2021",
  },
  {
    id: rendomId(),
    שם: "דוד אמסלם",
    תז: "89572398337",
    סניף: 123,
    תת: "אמרגן",
    דרג: "מנהל",
    תאריך: "03.10.2020",
  },
  {
    id: rendomId(),
    שם: "ירדן ארזי",
    תז: "89572398567",
    סניף: 123,
    תת: "אפסנאי",
    דרג: "מנהל",
    תאריך: "01.05.2021",
    addInfo: [
      {
        כתובת: "שדרות בן - גוריון 7, תל - אביב, ישראל",
        מדינת_כתובת: "ישראל",
        תאריך_הקמה: "20.11.19",
        תאריך_סגירה: "20.11.19",
        תאריך_סגמנטציה: "20.11.19",
      },
    ],
  },
  {
    id: rendomId(),
    שם: "לילי שוורץ",
    תז: "8957239 8567865875778 5875875886576 8756",
    סניף: 123,
    תת: "ארכיטקט",
    דרג: "מנהל",
    תאריך: "03.11.2021",
    addInfo: [
      {
        כתובת: "שדרות בן - גוריון 7, תל - אביב, ישראל",
        מדינת_כתובת: "ישראל",
        תאריך_הקמה: "20.11.19",
        תאריך_סגירה: "20.11.19",
        תאריך_סגמנטציה: "20.11.19",
      },
    ],
  },
  {
    id: rendomId(),
    שם: "לילאןןן אבוטבו",
    תז: "89572399090",
    סניף: 123,
    תת: "אדריכל",
    דרג: "מנהל",
    תאריך: "03.11.2021",
  },
];
