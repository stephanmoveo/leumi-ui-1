import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";

export const PrimaryButton = styled(Button)({
  color: "white",
  background: "linear-gradient(to top, #126cf9, #479dff)",
  fontSize: "22px",
  lineHeight: "1",
  "&:hover": {
    background: "linear-gradient(to top, #287aff, #2b8aff)",
  },
});

export const OutlineButton = styled(Button)({
  fontWeight: "900",
  fontSize: "22px",

  "&:hover": {
    color: "#75a8f8",
    backgroundColor: "white",
  },
});

export const PrimaryLargeBtn = styled('button')`
  font-family: barlow;
  font-weight: bold;
  font-size: 22px;
  background: linear-gradient(to top, #126cf9, #479dff);
  padding: 3px 10px 5px 10px;
  height: 40px;
  border-radius: 3px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  min-width: 120px;
  &:hover {
    background-image: linear-gradient(to top, #287aff, #2b8aff);
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #2570f4;
  }

  &.${buttonUnstyledClasses.disabled} {
    background-image: linear-gradient(to top, #a8b1ba, #cfd8dc);
    cursor: not-allowed;
  }
`;

export const BorderLessBtn = styled('button')`
  font-family: barlow;
  font-weight: bold;
  font-size: 22px;
  background-color: white;
  padding: 3px 10px 5px 10px;
  height: 40px;
  color: #126cf9;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  min-width: 120px;
  border-radius: 3px;

  &:hover {
    color: #5895f8;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #2570f4;
  }

  &.${buttonUnstyledClasses.disabled} {
    background-image: linear-gradient(to top, #a8b1ba, #cfd8dc);
    cursor: not-allowed;
  }
`;
