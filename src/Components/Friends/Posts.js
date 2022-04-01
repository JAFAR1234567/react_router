import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

export const Posts = () => {
    const [Posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, [])
    return (
        <div>
            {
                Posts.map(post => <Link to={`/posts/${post.id}`} key={post.id}>{post.id} </Link>)
            }
            <Outlet></Outlet>
        </div>

    )
}
