import React from "react";
import propTypes from "prop-types";
import "./index.scss";
import { Fade } from "react-reveal";

export default function Numbering({ style, className, data, current }) {
  const KeysOfData = Object.keys(data);

  return (
    <Fade>
      <ol className={["stepper", className].join(" ")} style={style}>
        {KeysOfData.map((list, index) => {
          let isActive = list === current ? "active" : "";
          if (index + 1 === KeysOfData.length) {
            isActive = "";
            return null;
          }

          return (
            <li key={index} className={[isActive].join(" ")}>
              {index + 1}
            </li>
          );
        })}
      </ol>
    </Fade>
  );
}

Numbering.propTypes = {
  className: propTypes.string,
  current: propTypes.string,
  data: propTypes.object,
};
