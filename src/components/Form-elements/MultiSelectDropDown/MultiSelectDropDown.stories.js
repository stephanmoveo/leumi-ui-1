import MultiSelectDropDown from "./index";

export default {
  title: "MultiSelectDropDown",
  component: MultiSelectDropDown,
};

const Template = (args) => <MultiSelectDropDown {...args} />;

export const Default = Template.bind({});
Default.args = {
  error: false,
  disabled: false,
};
