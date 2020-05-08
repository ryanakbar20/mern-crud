import React from 'react'
import IconText from '../IconText'
import Button from '../../elements/Button'
import Fade from 'react-reveal/Fade'

export default function Header(props) {

    const getNavLinkClass = path => {
        return props.location.pathname === path ? " active" : "";
    };

    if (props.isCentered) {
        return(
            <Fade>
            <header className="spacing-sm">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="mx-auto">
                            <IconText />
                        </div>
                    </nav>
                </div>
            </header>
            </Fade>
        )
    }

    return (
        <div>
            <Fade>
            <header className="spacing-sm">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <IconText />
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-auto">
                                <li className={`nav-item${getNavLinkClass('/')}`}>
                                    <Button href="/" className="nav-link" type="link">
                                        Home
                                    </Button>
                                </li>
                                <li className={`nav-item ${getNavLinkClass('/browse-by')}`}>
                                    <Button href="browse-by" className="nav-link" type="link">
                                        Browse by
                                    </Button>
                                </li>
                                <li className={`nav-item ${getNavLinkClass('/stories')}`}>
                                    <Button href="stories" className="nav-link" type="link">
                                        Stories
                                    </Button>
                                </li>
                                <li className={`nav-item ${getNavLinkClass('/agents')}`}>
                                    <Button href="agents" className="nav-link" type="link">
                                        Agents
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
            </Fade>
        </div>
    )
}
