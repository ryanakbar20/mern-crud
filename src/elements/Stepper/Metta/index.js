import React from "react";
import { Fade } from "react-reveal";

export default function Metta({ data, current }) {
  return (
    <Fade>
      <div className="text-center mb-5">
        <h1 className="h2">{data[current] && data[current].title}</h1>
        <p className="lead text-gray-500">
          {data[current] && data[current].description}
        </p>
      </div>
    </Fade>
  );
}
