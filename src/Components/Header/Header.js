import React from 'react'
import { Link } from 'react-router-dom'
import { CustomLink } from './CustomLink'

export const Header = () => {
    return (
        <div>
            <h1>Welcome To React Routes</h1>
            {/* <nav>
                <Link to="/">Home</Link>
                <Link to="/friends">Friends</Link>
                <Link to="/about">About</Link>
            </nav> */}
            <nav>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/friends">Friends</CustomLink>
                <CustomLink to="/posts">Posts</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </nav>
        </div>
    )
}
