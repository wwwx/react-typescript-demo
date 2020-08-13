import React from 'react'
import { Route } from 'react-router-dom'
import LikeButton from '../LikeButton'
import Hello from '../Hello'
import Navbar from './Navbar'
import About from '../../pages/about'
import Footer from './Footer'
const Body = () => {
    return (
        <section className="container body-container flex-grow-1">
            <Route path="/dashboard/about" component={About} exact />
            <Route path="/dashboard/hello" component={Hello} />
            <Route path="/dashboard/like" component={LikeButton} />
        </section>
    )
}
const Dashboard: React.FC = () => {
    return (
        <div className="h-100 d-flex flex-column">
            <Navbar />
            <Body />
            <Footer />
        </div>
    )
}
export default Dashboard
