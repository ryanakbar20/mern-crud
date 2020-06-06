import React, { useState, Fragment } from "react";
import propTypes from "prop-types";
import Controller from "./Controller";
import MainContent from "./MainContent";
import Metta from "./Metta";
import Numbering from "./Numbering";

export default function Stepper(props) {
  const { steps, initialStep } = props;
  const stepsKeys = Object.keys(steps);

  const [CurrentStep, setCurrentStep] = useState(
    stepsKeys.indexOf(initialStep) > -1 ? initialStep : stepsKeys[0]
  );

  const totalSteps = stepsKeys.length;
  const indexSteps = stepsKeys.indexOf(CurrentStep);

  function prevStep() {
    if (+indexSteps > 0) setCurrentStep(stepsKeys[indexSteps - 1]);
  }

  function nextStep() {
    if (+indexSteps < totalSteps) setCurrentStep(stepsKeys[indexSteps + 1]);
  }

  return <>{props.children(prevStep, nextStep, CurrentStep, steps)}</>;
}

Stepper.propTypes = {
  data: propTypes.object,
  initialStep: propTypes.string,
};

export { Controller, MainContent, Metta, Numbering };
