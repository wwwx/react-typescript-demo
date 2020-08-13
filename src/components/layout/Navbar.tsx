import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import { useWindowSize } from 'react-use'

import locales from '../../i18n/locales.json'

const Navbar: React.FC = () => {

    const [expand, setExpand] = useState(false)
    const windowSize = useWindowSize()
    const spring = useSpring({ opacity: 1, from: { opacity: 0 } })
    // const spring = useSpring({ number: 100, from: { number: 0 } })

    const handleMouseEnter = () => {
        if (windowSize.width > 769) {
            setExpand(true)
        }
    }

    return (
        <animated.div className="Navbar" style={spring}>
            {/* {spring.number.interpolate(x => (x).toFixed(2))} */}

            <div className="navbar-left">
                {locales['english']}
            </div>
            <div className="navbar-middle">
                <Link to="/">
                    covid19<span>india</span>
                </Link>
            </div>
            <div className="navbar-right"
                onMouseEnter={handleMouseEnter}
                {...(windowSize.width < 769 && {
                    onClick: () => setExpand(!expand),
                })}
            >
                {windowSize.width < 769 && (
                    <span>{expand ? 'Close' : 'Menu'}</span>
                )}

                {/* {windowSize.width > 769 && (
                    <React.Fragment>
                        <Link to="/dashboard/about">
                            <span>
                                about
                            </span>
                        </Link>
                    </React.Fragment>
                )} */}
            </div>
            <div style={{position: 'absolute', height: '100vh', top: 64, zIndex: 999}}>
                <Expand />
            </div>

        </animated.div>
    )
}

const Expand: React.FC = () => {
    return (
        <div className="expand">
            <Link to="/dashboard/about">About</Link>
            <Link to="/dashboard/hello">Hello</Link>
            <Link to="/dashboard/like">Like</Link>
        </div>
    )
}

export default Navbar
