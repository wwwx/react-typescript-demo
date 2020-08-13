import React, { useState } from 'react'

const Form: React.FC = () => {
    const [username, setUsername] = useState('')
    return (
        <form>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
            
            <h3>&nbsp;{username}</h3>
        </form>
    )
}

export default Form
