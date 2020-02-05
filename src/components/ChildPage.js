// map the list of Child cards

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getChild, addChild } from '../redux/actions/userActions';

export default class ChildPage extends React.Component {
    state = {
        newChild: {
            name: '',
            age: ''
        }
    }

    addNewChild = event => {
        event.preventDefault();
        this.props.addChild(this.state.newChild);
    }

    changeHandler = event => {
        this.setState({
          newChild: {
            ...this.state.newChild,
            [event.target.name]: event.target.value
          }
        });
      };

    render(){
        return (
        // <div className="child-list">
        //     {children.map(child => (
        //     <Link to={`/children/${child.id}`}>
        //     <childDetails key={child.id} child={child} />
        //     </Link>
        //     ))}
        // </div>
        // );
        // }
        <div>
        <form onSumbit={this.addNewChild}>
                <input
                    type="text"
                    name="name"
                    value={this.state.newChild.name}
                    onChange={this.changeHandler}
                    placeholder="name"
                />
                <input
                    type="number"
                    name="age"
                    value={this.state.newChild.age}
                    onChange={this.changeHandler}
                    placeholder="age"
                />
                />
                <button onClick={this.addNewChild}>add child</button>
                </form>

        </div>
        )
    }
}

// childDetails({ child }) {
// const { name, age } = child;
// return (
// <div className="child-card">
//     <div className="child-name">
//     Name: <em>{name}</em>
//     </div>
//     <div className="child-age">
//     Age: <strong>{age}</strong>
//     </div>
// </div>
// );