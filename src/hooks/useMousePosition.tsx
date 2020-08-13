import  { useState, useEffect } from 'react'


const useMousePosition = () => {
    const [position, setPosition] = useState({x: 0, y: 0})

    useEffect(() => {
        const updateMouse = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }
        // console.log('add listener')
        document.addEventListener('mousemove', updateMouse);

        return () => {
            // console.log('remove listener')
            document.removeEventListener('mousemove', updateMouse)
        }
    }, [])

    return position
}


export default useMousePosition