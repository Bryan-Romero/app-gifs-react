import React from "react";
import Spinner from "components/Spinner/Spinner";
import useGifs from "hooks/useGifs";
import ListOFGifs from "components/ListOfGifs/ListOfGifs";
import TrendigSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";
import "./index.css"
import { Helmet } from "react-helmet";

function Home(){

    const {gifs, loading, setPage} = useGifs()

    const handleNextPage = () => setPage(prevPage => prevPage + 1)

    return (
        <>
            <Helmet>
                <title>Home | GIFty</title>
                <meta name="description" content='Searching gifs'/>
            </Helmet>
            <SearchForm />
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
