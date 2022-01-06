import DropDown from "./index";
const valueOptions = [
    "בחידה 5",
    "בחידה 1",
    "בחידה 2",
    "בחידה 3",
    "בחידה 4",
    "בחידה 6",
  ];
export default {
  title: "DropDown",
  component: DropDown,
};

const Template = (args) => <DropDown valueOptions={valueOptions} {...args} />;

export const Default = Template.bind({});
Default.args = {
  error: false,
  disabled: false,
  valueOptions:valueOptions,
  value:'',
  required:false
};
