// child's name and age

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Child = (props) => {
const [child, setchild] = useState();

useEffect(() => {
const id = props.match.params.id;


    axios
    .get(`http://localhost:5000/api/childs/${id}`)
    .then(response => {
        setchild(response.data);
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });

},[]);

if (!child) {
return <div>Loading child information...</div>;
}

const { name, age } = child;
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

export default Child;
