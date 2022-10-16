import useGifs from "hooks/useGifs";
import Spinner from "components/Spinner/Spinner";
import ListOFGifs from "components/ListOfGifs/ListOfGifs";
import useNearScreen from "hooks/useNearScreen";
import { useCallback, useEffect, useRef } from "react";
import debounce from "just-debounce-it";
import { Helmet } from "react-helmet";
import SearchForm from "components/SearchForm";



export default function SearchGifs({params}){
    const {keyword, rating, lang} = params
    
    const {gifs, loading, setPage} = useGifs({keyword, rating , lang: lang && decodeURI(lang).substring(lang.length -5, lang.length -3 )})
    const externalRef = useRef()
    const {isNearScreen} = useNearScreen({
        externalRef: loading? null : externalRef, 
        once:false
    })
    const title = gifs ? `${gifs.length} Results of ${decodeURI(keyword)}` : ''

    //const debounceHandleNextPage = useRef()
    //const handleNextPage = () => console.log('next page')
    //const handleNextPage = () => setPage(prevPage => prevPage + 1)

    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1)
        , 500)
    ,[])

    useEffect(() => {
        if(isNearScreen) debounceHandleNextPage()
    },[debounceHandleNextPage, isNearScreen])

    return (
        <>
            {
                loading
                ? 
                <>
                    <Helmet>
                        <title>Loading... | GIFty</title>
                    </Helmet>
                    <Spinner />
                </>
                : 
                <>
                    <Helmet>
                        <title>{`${title} | GIFty`}</title>
                        <meta name="description" content={title}/>
                        <meta name="rating" content="General"/>
                    </Helmet>
                    <SearchForm initialKeyword={keyword} initialRating={rating} initialLang={decodeURI(lang)}/>
                    <h3>{decodeURI(keyword)}</h3>
                    <ListOFGifs gifs={gifs}/>
                    <div id="visor" ref={externalRef}></div>
                </>
            }
            {/* <button onClick={handleNextPage}>Get next page</button> */}
        </>
    )
}