import React from 'react'
import { NavLink } from 'react-router-dom';
const HeaderBar: React.FC = () => {
    return (
        <section className="header-bar d-flex">
            <div className="brand">
                <span className="brand_title">As soon as possible</span>
            </div>
            <div className="nav d-flex align-items-center">
                <NavLink to="/dashboard/about">About</NavLink>
                <NavLink to="/dashboard/hello">Hello</NavLink>
                <NavLink to="/dashboard/like">Like</NavLink>
            </div>
        </section>
    )
}
export default HeaderBar
