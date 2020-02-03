// map the list of Child cards

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ChildPage = props => {
const [children, setchildren] = useState([])
useEffect(() => {
const getchildren = () => {
    axios
    .get('http://localhost:5000/api/children')
    .then(response => {
        setchildren(response.data);
        console.log(response.data)
    })
    .catch(error => {
        console.error('Server Error', error);
    });
}

getchildren();
}, []);

return (
<div className="child-list">
    {children.map(child => (
    <Link to={`/children/${child.id}`}>
    <childDetails key={child.id} child={child} />
    </Link>
    ))}
</div>
);
}

function childDetails({ child }) {
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
);
}

export default ChildPage;
