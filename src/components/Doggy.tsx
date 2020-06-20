import React from 'react'
import useURLLoader from '../hooks/useURLLoader'

interface IShowResult {
    message: string,
    status: string
}


const Doggy: React.FC<{on: boolean}> = (props) => {
    const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [props.on]);
    // console.log(data, loading)
    const doggyResult = data as IShowResult;
    return (
    <div>{loading ? 'loading...' : <img className="small-image" src={doggyResult && doggyResult.message} alt=""/>}</div>
    )
}


export default Doggy