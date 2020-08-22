import React, { useState, useEffect } from 'react';
import Doggy from './Doggy'
import List from './List'
import Form from './Form'
import Temperature from './Temperature'

const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(false)
    useEffect(() => {
        document.title = `click like ${like}`
    })
    
    return (

        <React.Fragment>
            <Temperature />
            <Form />
            <List />
            <div className="my-3" style={{ float: 'right' }}>
                <button className="mr-3" onClick={() => {setLike(like + 1)}}>{like} like</button>
                <button className="mr-3 float-right" onClick={() => {setOn(!on)}}>{on ? 'No' : 'OFF'}</button>
            </div>
            <Doggy on={on} />
        </React.Fragment>
    )
}

export default LikeButton
