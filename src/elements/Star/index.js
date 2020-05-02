import React from 'react'
import propTypes from 'prop-types'
import './index.scss'

export default function Star({value, className, width, height, spacing}) {

    const decimals = Number(value) % 1
    const star = []
    let leftPost = 0

    for (let index = 0; index < 5 && index < value - decimals; index++) {
        leftPost = leftPost + width;

        star.push(
            <div className="star"
                 key={`star-${index}`}
                 style={{left: index * width, height: height, width: width, marginRight: spacing}}>

            </div>
        )
    }

    if (decimals > 0 && value <= 5) {
        star.push(
            <div className="star" 
                 key={`starWithDecimal`}
                 style={{left: leftPost, height: height, width: decimals * width - spacing}}>
                 
            </div>
        )
    }

    const starPlaceHolder = []

    for (let index = 0; index < 5; index++) {
        star.push(
            <div className="star placeholder"
                 key={`starPlaceHolder${index}`}
                 style={{left: index * width, height: height, width: width, marginRight: spacing}}>

            </div>
        )
        
    }

    return (
        <div className={["stars", className].join(" ")}
             style={{height: height}}>
            {starPlaceHolder}
            {star}
        </div>
    )
}

Star.propTypes = {
    value: propTypes.number,
    className: propTypes.string,
    width: propTypes.number,
    height: propTypes.number,
    spacing: propTypes.number
}