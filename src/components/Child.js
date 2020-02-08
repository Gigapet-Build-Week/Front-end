// child's name and age

import React, { useEffect } from 'react';
import { getChild } from '../../redux/actions/userActions';
import { connect } from 'react-redux';

const Child = (props) => {
console.log('props in Child',props);
console.log('this.state.props in Child',this.state.props)
console.log('this.children in Child',this.children);

useEffect(() => {
const id = props.match.params.id;
this.props.getChild(id);
},[]);

if (!this.children) {
return <div>Loading child information...</div>;
}

const { name, age } = this.children;
return (
<div className="save-wrapper">
    <div className="child-card">
        <div className="child-name">
            Name: <em>{name}</em>
        </div>
        <div className="child-age">
            Age: <strong>{age}</strong>
        </div>
    </div>
</div>
);
}

const mapStateToProps = state => ({
   children: state.children
  });
  
  export default connect( mapStateToProps, { getChild })(Child);