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
      <EntryForm />
      <h1>My Gigapet</h1>
      <Gigapet />
    </div>
  )
}