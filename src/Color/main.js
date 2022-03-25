import "./color.css";
import Values from "values.js";
import ColDiv from "./col-div";
import { useState } from "react";
import { Form, Section } from "./styledComponents";
const Color = () => {
  let [colors, newColors] = useState(new Values(`#f15025`).all(5));
  console.log(colors);

  let color = (e) => {
    e.preventDefault();
    let col = e.target.elements.color.value;
    let val = new Values(`${col}`).all(5);
    newColors(val);
  };
  let index = 0;
  return (
    <>
      <Form id="colorform" onSubmit={color}>
        <label htmlFor="color">Pick a color: </label>
        <input type="color" name="color" id="color" />
        <button>Generate</button>
      </Form>
      <Section id="color-sec">
        {colors.map(({ rgb, weight, type, hex }) => {
          return (
            <ColDiv
              rgb={rgb}
              type={type}
              weight={weight}
              key={++index}
              hexColor={hex}
            />
          );
        })}
      </Section>
    </>
  );
};
export default Color;
