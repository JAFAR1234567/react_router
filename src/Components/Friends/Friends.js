import React, { useEffect, useState } from 'react'
import { FriendDetails } from './FriendDetails';

export const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    
    return (
        <div>
            <h1>name of friends</h1>
            {
                friends.map((friend) =><FriendDetails friend={friend} key={friend.id}></FriendDetails>)
            }
        </div>
    )
}
