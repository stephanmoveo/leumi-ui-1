import AutoCompleteDropDown from "./index";

export default {
  title: "AutoCompleteDropDown",
  component: AutoCompleteDropDown,
};

const Template = (args) => <AutoCompleteDropDown  {...args} />;

export const Default = Template.bind({});
Default.args = {
  values: [],
  noOptionsText: "לא נמצאו תוצאות",
};


