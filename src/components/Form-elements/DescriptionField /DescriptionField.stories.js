import DescriptionField from "./index";

export default {
  title: "DescriptionField ",
  component: DescriptionField,
};

const Template = (args) => <DescriptionField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "שם שדה לפני הקלדה",
  value: "",
  disabled: false,
  handleChange: { action: "change" },
  required: false,
  error: false,
  helperText: "",
  id: "",
  inputProps: { readOnly: true },
  placeholder: "",
};
export const error = Template.bind({});

error.args = {
  label: "שם שדה לפני הקלדה",
  value: "",
  disabled: false,
  handleChange: { action: "change" },
  required: false,
  error: true,
  helperText: "שדה לא נכון",
  id: "",
  inputProps: { readOnly: true },
  placeholder: "",
};

export const Required = Template.bind({});

Required.args = {
  label: "שם שדה לפני הקלדה",
  value: "",
  disabled: false,
  handleChange: { action: "change" },
  required: true,
  error: false,
  helperText: "שדה לא נכון",
  id: "",
  inputProps: { readOnly: true },
  placeholder: "",
};

export const Disabled = Template.bind({});

Disabled.args = {
  label: "שם שדה לפני הקלדה",
  value: "",
  disabled: true,
  handleChange: { action: "change" },
  required: false,
  error: false,
  helperText: "שדה לא נכון",
  id: "",
  inputProps: { readOnly: true },
  placeholder: "",
};
