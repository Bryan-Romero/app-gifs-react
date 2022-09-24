import React, {useCallback, useState } from "react";
import { useLocation } from "wouter";
import Spinner from "components/Spinner/Spinner";
import useGifs from "hooks/useGifs";
import ListOFGifs from "components/ListOfGifs/ListOfGifs";
import TrendigSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";
import "./index.css"

function Home(){
    const [, pushLocation] = useLocation()
    const {gifs, loading, setPage} = useGifs()

    const handleSubmit = useCallback(({keyword}) => {
        pushLocation(`/search/${keyword}`)
    }, [pushLocation])

    const handleNextPage = () => setPage(prevPage => prevPage + 1)

    return (
        <>
            <SearchForm onSubmitParent={handleSubmit}/>
            <h3>Last search</h3>
            {
                loading
                ? <Spinner />
                : <ListOFGifs gifs={gifs}/>
            }
            <button className="btnNextPage" onClick={handleNextPage}>Get next page</button>
            <TrendigSearches/>
        </>
    )
}
export default Home
