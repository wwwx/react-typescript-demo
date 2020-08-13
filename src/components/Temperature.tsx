import React, { useState } from 'react'

const Tempture: React.FC = () => {
    const [temperature, setTemperature] = useState<string>('0') 
    return (
        <fieldset>
            <legend>Enter temperatures in celsius:</legend>
            <input value={temperature} onChange={(e) => setTemperature(e.target.value)} />
            <BoilingVerdict celsius={parseFloat(temperature)} />
        </fieldset>
    )
}

interface BoilingVerdictProps {
    celsius: number;
}

const BoilingVerdict: React.FC<BoilingVerdictProps> = (props) => {
    if (props.celsius > 100) {
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}

export default Tempture
