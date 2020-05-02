import React from 'react'
import {render} from '@testing-library/react'
import Star from '.'

test('should props value, height, width, spacing', () => {
    const {container} = render(<Star width={35} height={35} spacing={4} value={4} ></Star>)
    const starYellow = "div.stars div.star:not(.placeholder)"

    expect(container.querySelector("div.stars")).toBeInTheDocument()
    expect(container.querySelector("div.stars")).toHaveAttribute("style", expect.stringContaining('height: 35'))
    expect(container.querySelector(starYellow)).toBeInTheDocument()
    expect(container.querySelector(starYellow)).toHaveAttribute("style", expect.stringContaining('width: 35'))
    expect(container.querySelector(starYellow)).toHaveAttribute("style", expect.stringContaining('margin-right: 4'))
    expect(container.querySelector(starYellow)).toHaveAttribute("style", expect.stringContaining('height: 35'))
})
