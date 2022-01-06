import MultiSelectDropDown from "./index";
const valueOptions = [
  "בחידה 5",
  "בחידה 1",
  "בחידה 2",
  "בחידה 3",
  "בחידה 4",
  "בחידה 6",
];

export default {
  title: "MultiSelectDropDown",
  component: MultiSelectDropDown,
};

const Template = (args) => (
  <MultiSelectDropDown valueOptions={valueOptions} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  valueOptions: valueOptions,
  error: false,
  disabled: false,
};
