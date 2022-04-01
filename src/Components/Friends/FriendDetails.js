import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const FriendDetails = (props) => {
    console.log(props);
    const{name,username,email,id} = props.friend;
    const navigate = useNavigate();
    const showFriendDetails = () =>{
        const path = `/friend/${id}`;
        navigate(path);
    }
    return (
        <div>
          <h2>name:{name}</h2>
          <Link to={'/friend/'+id}>FriendDetails</Link>
          <button onClick={showFriendDetails}>{username} id:{id}</button>
        </div>
    )
}
