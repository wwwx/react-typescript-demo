import React, { useState, useRef, useEffect } from 'react'

const Clock: React.FC = () => {
    const [now, setNow] = useState<String>(new Date().toLocaleString())
    const intervalHandle = useRef<NodeJS.Timeout>() 
    useEffect(() => {
        intervalHandle.current = setInterval(() => {
            setNow(new Date().toLocaleString())
        }, 1 * 1000)
        return () => {
            clearInterval(intervalHandle.current as any)
        }
    }, [])
    return (
    <div>{now}</div>
    )   
}

export default Clock
