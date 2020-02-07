// Where entryform and gigapet will be


import React from 'react'
import { Link } from 'react-router-dom';
import Gigapet from './Gigapet/Gigapet';
import EntryForm from './forms/EntryForm';

export default function MainPage() {
  return (
    <div>
      <div className="header">
                <Link to={"/"}>Sign Out</Link>
                <Link to={"/childPage"}>ChildPage</Link>
            </div>
      <h1>MainPage</h1>
      <EntryForm />
      <Gigapet />
    </div>
  )
}

