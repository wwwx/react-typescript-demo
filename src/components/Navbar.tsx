import {
    SLIDE_IN,
    SLIDE_OUT,
    SLIDE_IN_MOBILE,
    SLIDE_OUT_MOBILE,
} from '../animation'
import locales from '../i18n/locales.json'
import React, { useState, useRef, RefObject } from 'react'
import { Link } from 'react-router-dom'
// https://www.react-spring.io/
import { useSpring, animated, useTransition } from 'react-spring'
// http://www.usehooks.com
import { useWindowSize, useLockBodyScroll } from 'react-use'
import { NavItem } from '../common.model'

interface NavbarProps {
    pages: Array<NavItem>;
}

interface ExpandProps {
    pages: Array<NavItem>;
    setExpand: any;
    windowSize: {width: number; height: number}
}

const Navbar: React.FC<NavbarProps> = ({ pages }) => {

    const [expand, setExpand] = useState(false)
    const windowSize = useWindowSize()
    useLockBodyScroll(expand)
    const spring = useSpring({ opacity: 1, from: { opacity: 0 } })
    // const spring = useSpring({ number: 100, from: { number: 0 } })

    const transitions = useTransition(expand, null, {
        from: windowSize.width < 769 ? SLIDE_OUT_MOBILE : SLIDE_IN,
        enter: windowSize.width < 769 ? SLIDE_IN_MOBILE : SLIDE_OUT,
        leave: windowSize.width < 769 ? SLIDE_OUT_MOBILE : SLIDE_IN,
        config: {mass: 1, tension: 210, friction: 26}, // TODO
    } as React.CSSProperties)

    // const handleMouseEnter = () => {
    //     if (windowSize.width > 769) {
    //         setExpand(true)
    //     }
    // }

    return (
        <animated.div className="Navbar" style={spring}>
            {/* {spring.number.interpolate(x => (x).toFixed(2))} */}

            <div className="navbar-left">
                {locales['english']}
            </div>
            <div className="navbar-middle">
                <Link to="/" onClick={() => setExpand(false)}>
                    covid19<span>india</span>
                </Link>
            </div>
            <div className="navbar-right"
                // onMouseEnter={handleMouseEnter}
                {...(windowSize.width < 769 && {
                    onClick: () => setExpand(!expand),
                })}
            >
                {windowSize.width < 769 && (
                    <span>{expand ? 'Close' : 'Menu'}</span>
                )}

                {windowSize.width > 769 && (
                    <React.Fragment>
                        lsdjfljsdl
                    </React.Fragment>
                )}
            </div>
            
            {transitions.map(({item, key, props}) => 
                item ? (
                    <animated.div key={key} style={props}>
                        <Expand {...{pages, setExpand, windowSize}} />
                    </animated.div>
                )  : (
                    <animated.div key={key} style={props}></animated.div>
                )  
            )}
            

        </animated.div>
    )
}

const Expand: React.FC<ExpandProps> = ({ pages, setExpand, windowSize }) => {
    const expandElement: RefObject<HTMLDivElement> = useRef(null)
    return (
        <div className="expand" ref={expandElement}>
            {pages.map((page, i) => (
                <Link to={page.link} key={i}
                    {...(windowSize.width < 769 && {
                        onClick: () => setExpand(false)
                    })}
                >
                    <span {...navlinkProps(page.link)}>
                    {page.displayName}
                    </span>
                </Link>
            ))}
        </div>
    )
}

const navlinkProps = (path: string): { [key: string]: any } => {
    // console.log(path, window.location.hash)
    return { className: `${path === window.location.hash.slice(1) ? 'focused' : ''}` };
}

export default Navbar
