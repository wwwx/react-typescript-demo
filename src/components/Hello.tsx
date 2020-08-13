import React from 'react'
import useMousePosition from '../hooks/useMousePosition'
interface ISmartPositionProps {
    message?: string
}

const SmartPosition: React.FC<ISmartPositionProps> = (props) => {

    const position = useMousePosition();

    return (
        <h2>{props.message}  X: {position.x}, Y: {position.y}</h2>
    )
}

SmartPosition.defaultProps = {
    message: 'Hello world;'
}

const Hello: React.FC = () => {
return <SmartPosition message="Start move " />
}

export default Hello
