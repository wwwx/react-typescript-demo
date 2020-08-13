import React from 'react'
import { useParams } from 'react-router-dom'
interface RouteParams {
    id: string;
}
const About = () => {
    const params = useParams<RouteParams>()
    return (
        <div>
            <p>About page works!</p>
            <div>{ params.id }</div>
        </div>
    )
}
export default About
