import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InputNumber from "./index.js";

class TestInput extends React.Component {
  state = {
    value: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <InputNumber
        max={30}
        name="value"
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

const setup = () => {
  const { container } = render(<TestInput />);
  const input = container.querySelector(`input.form-control[name='value']`);

  return {
    input,
  };
};

test("should able to change value", () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: 23 } });
  console.log(input.value);
  expect(input.value).toBe("23");
});

test("should no able to change when max value", () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: 33 } });
  expect(input.value).toBe("");
});
