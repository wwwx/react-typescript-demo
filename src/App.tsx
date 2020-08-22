import './App.scss';
import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { NavItem } from './common.model'
import Space from './components/Space'

const LikeButton = lazy(() => import('./components/LikeButton'))
const Hello = lazy(() => import('./components/Hello'))
const About = lazy(() => import('./components/About'))
// const Login = lazy(() => import('./components/Login'))


const pages: Array<NavItem> = [
  {
    link: '/',
    view: About,
    displayName: 'About',
  },
  // {
  //   link: '/login',
  //   view: Login,
  //   displayName: 'Login',
  // },
  {
    link: '/hello',
    view: Hello,
    displayName: 'Hello',
  },
  {
    link: '/like',
    view: LikeButton,
    displayName: 'Like',
  },
]

const App: React.FC = () => {
  
  const location = useLocation()
  // console.log(location) // {pathname: "/login", search: "", hash: "", state: undefined}

  return (
    <div className="App"> 
      <Navbar
        pages={pages}
      />
      
      <Suspense fallback={<div />}>
        <Switch location={location}>
          {pages.map((page, i) => (
            <Route 
              exact
              key={i} 
              path={page.link} 
              render={() => <page.view />} 
            />
          ))}
          <Redirect to="/" />
        </Switch>
        <Space />
      </Suspense>

      <Footer />
    </div>
  )
}
export default App;
