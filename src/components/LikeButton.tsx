import React, { useState, useEffect } from 'react';
import Doggy from './Doggy'
import {Button} from 'antd'

const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(false)
    useEffect(() => {
        document.title = `click like ${like}`
    })
    return (
    <div>

        <div className="my-3" style={{ float: 'right' }}>
            <Button type="primary" className="mr-3" onClick={() => {setLike(like + 1)}}>{like} like</Button>
            <Button type="primary" className="mr-3 float-right" danger onClick={() => {setOn(!on)}}>{on ? 'No' : 'OFF'}</Button>
        </div>
        <Doggy on={on} />
    </div>
    )
}

export default LikeButton