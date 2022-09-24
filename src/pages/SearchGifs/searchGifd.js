import useGifs from "hooks/useGifs";
import Spinner from "components/Spinner/Spinner";
import ListOFGifs from "components/ListOfGifs/ListOfGifs";
import useNearScreen from "hooks/useNearScreen";
import { useCallback, useEffect, useRef } from "react";
import debounce from "just-debounce-it";



export default function SearchGifs({params}){
    const {keyword} = params
    const {gifs, loading, setPage} = useGifs({keyword})
    const externalRef = useRef()
    const {isNearScreen} = useNearScreen({
        externalRef: loading? null : externalRef, 
        once:false
    })

    //const debounceHandleNextPage = useRef()
    //const handleNextPage = () => console.log('next page')
    //const handleNextPage = () => setPage(prevPage => prevPage + 1)

    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1)
        , 500)
    ,[])

    useEffect(() => {
        console.log(isNearScreen)
        if(isNearScreen) debounceHandleNextPage()
    },[debounceHandleNextPage, isNearScreen])

    return (
        <>
            {
                loading
                ? <Spinner />
                : <>
                    <h3>{decodeURI(keyword)}</h3>
                    <ListOFGifs gifs={gifs}/>
                    <div id="visor" ref={externalRef}></div>
                </>
            }
            {/* <button onClick={handleNextPage}>Get next page</button> */}
        </>
    )
}