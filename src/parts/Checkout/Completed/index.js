import React from "react";
import Fade from "react-reveal";
import ilustration from "../../../assets/icons/completed.png";

export default function Completed() {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-4">
            <img
              src={ilustration}
              alt="completed checkout"
              className="img-fluid"
            />
            <p className="text-gray-500">
              We will inform you via email later once the transaction has been
              accepted
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
