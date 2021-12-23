import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple, blue } from "@mui/material/colors";

export const PrimaryButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: blue[700],
  width: "160px",
  fontSize: "22px",
  lineHeight: "1",
  "&:hover": {
    backgroundColor: blue[900],
  },
}));

export const OutlineButton = styled(Button)({
  fontWeight: "900",
  fontSize: "22px",

  "&:hover": {
    color: '#75a8f8',
    backgroundColor: "white",
  },
});
