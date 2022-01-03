import TextInput from "./index";

export default {
  title: "TextInput",
  component: TextInput,
};

const Template = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "שם שדה לפני הקלדה",
  value: "",
  disabled: false,
  handleChange: { action: "change" },
  required: false,
  onBlur: { action: "click" },
  error:false,
  helperText: "",
  id: "",
  inputProps: { readOnly: true },
  placeholder: "",
};
