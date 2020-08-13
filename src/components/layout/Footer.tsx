import React from 'react'
import  Clock from '../Clock'

const Footer: React.FC = () => {
    return (
        <section className="footer container">
            <div className="py-3 d-flex justify-content-center">
                <Clock />
            </div>
        </section>
    )
}

export default Footer

