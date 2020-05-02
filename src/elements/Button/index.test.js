import React from 'react'
import {render} from '@testing-library/react'
import Button from './index'
import { BrowserRouter as Router} from 'react-router-dom'


test("should not allowed click button if isDisabled is present", () => {
    const {container} = render(<Button isDisabled></Button>)

    expect(container.querySelector('span.disabled')).toBeInTheDocument()
})

test("should have tag <a>", () => {
    const {container} = render(<Router><Button href="" type="link"></Button></Router>)

    expect(container.querySelector("a")).toBeInTheDocument()
})

test("should have props isLoading", () => {
    const {container,getByText} = render(<Button isLoading></Button>)

    expect(container.querySelector("span")).toBeInTheDocument()
    expect(getByText(/loading/i)).toBeInTheDocument()
})