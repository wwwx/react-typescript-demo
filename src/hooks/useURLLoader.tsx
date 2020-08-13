import {useState, useEffect} from 'react'
import axios from 'axios'




const useURLLoader = (url: string, deps: any) => {

    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true);

        axios
            .get(url)
            .then(response => {
                // console.log(response.data)
                setData(response.data);
                setLoading(false)
            })
    }, [url, deps])

    return [data, loading]

}


export default useURLLoader
