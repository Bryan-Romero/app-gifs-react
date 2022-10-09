import {useContext, useEffect, useState } from "react";
import getGifs from "services/getGifs";
import GifsContext from "context/GifsContext"

const INITIAL_PAGE = 0

function useGifs({keyword, rating, lang} = {keyword: null}){
    const [loading, setLoading] = useState(false)
    const {gifs, setGifs} = useContext(GifsContext)
    const [page, setPage] = useState(INITIAL_PAGE)
    const [loadidNextPage, setLoadingNextPage] = useState(false)

    //get keyword of localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || "Cats"

    useEffect(()=>{
        setLoading(true)

        getGifs({keyword : keywordToUse, rating, lang}).then(gifs => {
            console.log(keywordToUse + ' ' + lang)
            setGifs(gifs)
            setLoading(false)
            typeof(keyword) !== 'object' && localStorage.setItem('lastKeyword', keyword)//save keyword in localStorage
        })
    }, [keyword, setGifs, keywordToUse, rating, lang])

    useEffect(() => {
        if(page === INITIAL_PAGE) return
        setLoadingNextPage(true)
        getGifs({keyword: keywordToUse, rating, lang, page})
        .then(nextGifs => {
            setGifs(prevGifs => prevGifs.concat(nextGifs))
            setLoadingNextPage(false)
        })
    }, [page, keywordToUse, setGifs, rating, lang])

    return {loading, gifs, loadidNextPage, setPage}
}
export default useGifs