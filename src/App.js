import React from 'react';
import './App.css';

import ChildPage from './components/ChildPage';
// import LoginForm from './components/forms/LoginForm'
import MainPage from './components/MainPage';


function App() {
  return (
    <div className="App">
      <nav className="Header">



      </nav>
      <p>Something</p>
      {/* <LoginForm /> */}
      <MainPage />
      <ChildPage />
    </div>
  );
}

export default App;
