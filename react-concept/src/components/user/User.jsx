import React from 'react';
import './User.css'

const User = ({user}) => {
    return (
        <div className='person'>
            <h1>Name : {user.name}</h1>
            <p>User Name : {user.username}</p>
            <p>Email : {user.email}</p>
            <p>Address: {user.address.city}, {user.address.street}, {user.address.suite}, {user.address.zipcode}</p>
            <p>Phone : {user.phone}</p>
        </div>
    );
};

export default User;