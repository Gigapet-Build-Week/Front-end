// map the list of Child cards

import React from 'react';
import { Link } from 'react-router-dom';
import { addChild } from '../redux/actions/userActions';
import { connect } from 'react-redux';
import styled from 'styled-components';

const FormContainer = styled.div`
position: absolute;
width: 50%;
height: 65%;
top: 10%;
left: 25%;
background: #e96a2b;
border-radius: 10px;
`;

const ChildStyle = styled.form`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
input {
  width: 50%;
  height: 50%;
  padding: 2% 1%;
  margin: 2% 0;
  font-size: 150%;
  box-sizing: border-box;
  background-color: DarkSlateBlue;
  color: OldLace;
}

input:focus {
  border: 3px solid #2f4f4f;
}

[type="button"] {
  background-color: #4CAF50;
  border: none;
  color: OldLace;
  padding: 3% 3%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 150%;
}
`;

class ChildPage extends React.Component {
    state = {
        newChild: {
            name: '',
            age: ''
        }
    };

    childDetails({ child }) {
    const { name, age } = child;
    return (
    <div className="child-card">
        <div className="child-name">
        Name: <em>{name}</em>
        </div>
        <div className="child-age">
        Age: <strong>{age}</strong>
        </div>
    </div>
    )
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

    render() {
        console.log(this.props);
        return (
        <FormContainer>
            <div className="header">
                <Link to={"/"}>Sign Out</Link>
                <Link to={"/mainPage"}>MainPage</Link>
            </div>
            <h1>Child Page</h1>
            <ChildStyle className="ChildStyle" onSubmit={this.addNewChild}>
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
                <button type="button" onClick={this.addNewChild}>Add Child</button>
            </ChildStyle>
            <div className="child-list">
                {/* {this.props.children.map(child => (
                <Link to={`/children/${child.id}`}>
                <childDetails key={child.id} child={child} />
                </Link>
                ))} */}
            </div>
        </FormContainer>
        )
    }
}

const mapStateToProps = state => ({
    children: state.child.children,
    gettingChild: state.gettingChild,
    error: state.error
  });

export default connect(mapStateToProps, { addChild })(ChildPage);