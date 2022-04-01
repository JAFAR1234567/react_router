import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Details = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setFriend(data))
  }, [id])
  return (
    <div>
      <h2>This is details about dosto {id}</h2>
      <h2>Name:{friend.name}</h2>
      <h2>City:{friend.address?.city}</h2>

    </div>
  )
}