import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

export default function Button(props) {
    const className = [props.className]
    if (props.isPrimary) className.push("btn-primary")
    if (props.isSmall) className.push("btn-sm")
    if (props.isLarge) className.push("btn-lg")
    if (props.isBlock) className.push("btn-block")
    if (props.hasShadow) className.push("btn-shadow")

    const onClick = () => {
        if (props.onClick) props.onClick()
    }

    if (props.isDisabled || props.isLoading) {
        if (props.isDisabled) className.push("disabled")
        return (
            <span className={className.join(" ")} style={props.style}>
                {
                    props.isLoading ? (
                        <>
                            <span className="spinner-border spinner-border-sm mx-5"></span>
                            <span className="sr-only">Loading...</span>
                        </>
                    ) : (
                        props.children
                    )
                }
            </span>
        )
    }

    if (props.type === "link") {
        if (props.isExternal) {
            return (
                <a href={props.href}
                    style={props.style}
                    onClick={onClick}
                    className={className.join(" ")}
                    target={props.target === "_blank" ? "_blank" : undefined}
                    rel={props.target === "blank" ? "noopener noreferrer" : undefined}>
                    {props.children}
                </a>
            )
            
        } else {
            return (
                <Link className={className.join(" ")}
                  to={props.href}
                  style={props.style}
                  onClick={onClick}>
                      {props.children}
                </Link>
            )
            
        }
    }

    return (
        <button className={className.join(" ")}
                to={props.href}
                onClick={onClick}
                style={props.style}>
                {props.children}
        </button>
    )
}

Button.propTypes = {
    type : propTypes.oneOf(["button", "link"]),
    onClick : propTypes.func,
    target : propTypes.string,
    className : propTypes.string,
    isDisabled : propTypes.bool,
    isLoading : propTypes.bool,
    isPrimary : propTypes.bool,
    isSmall : propTypes.bool,
    isLarge : propTypes.bool,
    isBlock : propTypes.bool,
    hasShadow : propTypes.bool,
    isExternal: propTypes.bool
}