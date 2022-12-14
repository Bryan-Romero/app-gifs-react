import { useEffect, useState } from "react";
import getSingleGif from "services/getSingleGif";
import useGifs from "./useGifs";

export default function useSingleGif({ id }) {
    const {gifs} = useGifs()
    const gifFromCache = gifs.find(sigleGif => 
        sigleGif.id === id)
    
    const [gif, setGif] = useState(gifFromCache)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    
    useEffect( () => {
        if(!gif){
            setIsLoading(true)
            //call servece if dont have gifFromCache
            getSingleGif({ id: id })
            .then(gif => {
                setGif(gif)
                setIsLoading(false)
                setIsError(false)
            }).catch(err => {
                setIsLoading(false)
                setIsError(true)
            })
        }
    },[gif, id])

    return {gif, isLoading, isError}
}