import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

export const PostDetails = (props) => {
    const {postId} = useParams();
    return (
        <div>
            <h1>Details for {postId}</h1>
        </div>

    )
}
