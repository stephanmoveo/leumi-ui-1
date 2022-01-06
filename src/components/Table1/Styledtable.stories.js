import Styledtable from "./index";
import { columnDataaa, mokeJsonData } from "../Data/MokeJson";
import { Provider } from "react-redux";
import { store } from "../../store/index";

export default {
  title: "Styledtable",
  component: Styledtable,
};

const Template = (args) => <Provider store={store}><Styledtable {...args} /></Provider>;

export const Default = Template.bind({});
Default.args = {
  tableData: mokeJsonData,
  columnData: columnDataaa,
  mainTitle: "",
  pagination: false,
  editMode: true,
};
