import React, { useState, useEffect } from 'react';
import Doggy from './Doggy'

const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(false)
    useEffect(() => {
        document.title = `click like ${like}`
    })
    return (
    <div>
        <button onClick={() => {setLike(like + 1)}}>{like} like</button>
        <button onClick={() => {setOn(!on)}}>{on ? 'No' : 'OFF'}</button>

        <Doggy on={on} />
    </div>
    )
}

export default LikeButton