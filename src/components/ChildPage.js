// map the list of Child cards

import React from 'react';
import { Link } from 'react-router-dom';
import { getChild, addChild } from '../redux/actions/userActions';
import { connect } from 'react-redux';

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
        return (
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
                <button onClick={this.addNewChild}>Add Child</button>
            </form>
            <div className="child-list">
                {this.props.children.map(child => (
                <Link to={`/children/${child.id}`}> {/*probably different url*/}
                <childDetails key={child.id} child={child} />
                </Link>
                ))}
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => ({
    error: state.error,
    loggingIn: state.loggingIn
  });
  
export default connect( mapStateToProps, { getChild, addChild })(ChildPage);