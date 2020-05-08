import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import {screen} from '@testing-library/dom'
import InputDate from './index.js'

class TestInput extends React.Component {
    state = {
        value: {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        }
    }

    handleChange = event => {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
                <InputDate
                    value={this.state.value}
                    onChange={this.handleChange}
                    max={30}
                    name="value"
                />
        )
    }
}

const setup = () => {
    const {container} = render(<TestInput />);
    const wrapper = container.querySelector(".input-date");
    const input = container.querySelector("input.form-control");

    return {
        container,
        wrapper,
        input
    }
}

test('should have wrapper with classname .form-control', () => {
    const {wrapper} = setup();

    expect(wrapper).toBeInTheDocument();
})

test('should have tag <input with classname .form-control', () => {
    const {input} = setup();

    expect(input).toBeInTheDocument();
})

test('should show date picker when click input', () => {
    const {container, input} = setup();
    
    fireEvent.click(input, {button: 1});
    const wrapperDatePicker = container.querySelector(".date-range-wrapper");
    expect(wrapperDatePicker).toBeInTheDocument();
    // 
})


