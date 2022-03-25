import { useState } from "react";
import { Div } from "./styledComponents";
const ColDiv = ({ rgb, weight, type, hexColor }) => {
  let [showP, setShowP] = useState(true);
  let copy = (e) => {
    navigator.clipboard.writeText("#" + hexColor);
    setShowP(false);
    setTimeout(() => {
      setShowP(true);
    }, 1000);
    // alert(`copied to clipboard\n\n#${hexColor}`);
  };
  let classForColor = type === "shade" ? "white" : "black";
  return (
    <Div
      className="color-div"
      onClick={copy}
      style={{ backgroundColor: `rgb(${rgb.join(",")})` }}
    >
      <p className={classForColor}>{weight}%</p>
      <p className={classForColor}>{`RGB(${rgb.join(",")})`}</p>
      <p className={classForColor}>#{hexColor.toUpperCase()}</p>
      <p className={(showP && `copy`) || classForColor}>Copied to clipboard</p>
    </Div>
  );
};
export default ColDiv;
