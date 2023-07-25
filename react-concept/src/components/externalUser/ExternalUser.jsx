import React, { useEffect, useState } from 'react';
import User from '../user/User'

const ExternalUser = () => {

    let [users, setUsers]= useState([]);

    useEffect(()=>{

        (async()=>{
            let response = await fetch('https://jsonplaceholder.typicode.com/users')
            let data = await response.json();
            setUsers(data);
        })()

    },[])
    return (
        <div>
            <h1 className='mx-4'>Users Information: {users.length}</h1>
            {
                users.map(user => <User user={user} key={user.id}></User>)
            }
        </div>
    );
};

export default ExternalUser;