import React from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

function ToolTip({ children, val, elRefs, index }) {
  const [isShown, setIsShown] = React.useState();

  React.useEffect(() => {
    console.log(
      "this is scrollWidht" +
        " " +
        elRefs.current[index].scrollWidth +
        " " +
        "this is ClientWidht"
        + ' ' +
        elRefs.current[index].clientWidth
    );
    // setIsShown(
    //   elRefs.current[index].clientWidth < elRefs.current[index].scrollWidth
    // );
  }, [elRefs]);

  const valLength = val != undefined && val.toString().length;
  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} placement="top" arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: "#3e4b60",
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#3e4b60",
      maxWidth: "none",
      marginBottom: "3px !important",
    },
  }));
  return (
    <BootstrapTooltip title={isShown ? val : ""}>{children}</BootstrapTooltip>
  );
}

export default ToolTip;
