import AutoCompleteDropDown from "./index";
const countries = [
  {
    name: "משה",
    age: "45",
  },
  {
    name: "הרצל",
    age: "33",
  },
  {
    name: "אבי",
    age: "22",
  },
  {
    name: "הילה",
    age: "11",
  },
  {
    name: "אלירן",
    age: "99",
  },
  {
    name: "אורן",
    age: "73",
  },
];
export default {
  title: "AutoCompleteDropDown",
  component: AutoCompleteDropDown,
};

const Template = (args) => (
  <AutoCompleteDropDown values={countries} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  values: countries,
  noOptionsText: "לא נמצאו תוצאות",
};
