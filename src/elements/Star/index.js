import React from "react";
import propTypes from "prop-types";
import "./index.scss";

export default function Star({ value, className, width, height, spacing }) {
  const decimals = Number(value) % 1;
  const star = [];
  let leftPost = 0;

  for (let index = 0; index < 5 && index < value - decimals; index++) {
    leftPost += width;

    star.push(
      <div
        className="star"
        key={`star-${index}`}
        style={{
          left: index * width,
          height,
          width,
          marginRight: spacing,
        }}
      />
    );
  }

  if (decimals > 0 && value <= 5) {
    star.push(
      <div
        className="star"
        key="starWithDecimal"
        style={{ left: leftPost, height, width: decimals * width - spacing }}
      />
    );
  }

  const starPlaceHolder = [];

  for (let index = 0; index < 5; index++) {
    star.push(
      <div
        className="star placeholder"
        key={`starPlaceHolder${index}`}
        style={{
          left: index * width,
          height,
          width,
          marginRight: spacing,
        }}
      />
    );
  }

  return (
    <div className={["stars", className].join(" ")} style={{ height }}>
      {starPlaceHolder}
      {star}
    </div>
  );
}

Star.propTypes = {
  value: propTypes.number,
  className: propTypes.string,
  width: propTypes.number,
  height: propTypes.number,
  spacing: propTypes.number,
};
