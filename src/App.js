import React from 'react';
import './App.css';

import ChildPage from './components/ChildPage';
import LoginForm from './components/forms/LoginForm'
import RegistryForm from  './components/forms/RegistryForm'
import MainPage from './components/MainPage';
import { Route } from "react-router-dom";
import { PrivateRoute } from './utils/privateRoute';


function App() {
  return (
    <div className="App">
      <nav className="Header">



      </nav>
      <h1>Gigapet</h1>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/register" component={RegistryForm} />
        <PrivateRoute exact path="/mainPage" component={MainPage}/>
        <PrivateRoute exact path="/childPage" component={ChildPage}/>
    </div>
  );
}

export default App;

// Code Sample
// <SavedList list={savedList} />
// <Route exact path="/" component={MovieList} />
// <Route path="/movies/:id" component={Movie} />