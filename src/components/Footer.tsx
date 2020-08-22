import React from 'react'
import  Clock from './Clock'
import { useSpring, animated } from 'react-spring'

const Footer: React.FC = () => {
    const spring = useSpring({opacity: 1, from: {opacity: 0}})
    return (
        <animated.div className="Footer" style={spring}>
            <div className="py-3 d-flex justify-content-center">
                <Clock />
            </div>
        </animated.div>
    )
}

export default Footer

