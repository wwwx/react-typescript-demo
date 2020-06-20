import './App.css';
import React from 'react';
// import Hello  from './components/Hello';
// import LikeButton from './components/LikeButton'
// import MouseTracker from './components/MouseTracker';
import Login from './pages/user/login'


const App: React.FC = () => {
  return (
    <div className="container">
      <Login />
      {/* <Hello message="Hello shanghai ." />
      <LikeButton /> */}
      {/* <MouseTracker /> */}
    </div>
  )
}

export default App;
