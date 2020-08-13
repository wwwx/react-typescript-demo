import React from 'react'
const users = [
    { username: 'Andy', id: 12 },
    { username: 'Jack', id: 44 },
    { username: 'Smith', id: 25 },
]
const List: React.FC = () => {
    return (
    <ul>{users.map(user => <li key={user.id}>{user.username}</li>)}</ul>
    )
}

export default List
