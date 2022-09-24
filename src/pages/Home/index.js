import React, {useState } from "react";
import { useLocation } from "wouter";
import Spinner from "components/Spinner/Spinner";
import useGifs from "hooks/useGifs";
import ListOFGifs from "components/ListOfGifs/ListOfGifs";
import TrendigSearches from "components/TrendingSearches";

function Home(){
    const [keyword, setKeyword] = useState('')
    const [, pushLocation] = useLocation()

    const {gifs, loading} = useGifs()

    const handleSubmit = evt => {
        evt.preventDefault()
        //go to oter roout
        pushLocation(`/search/${keyword}`)
    }
    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type='text' value={keyword} placeholder="Search a gif here"/>
                <button type="submit" value="Search">Search</button>
            </form>
            <h3>Last search</h3>
            {
                loading
                ? <Spinner />
                : <ListOFGifs gifs={gifs}/>
            }
            <TrendigSearches/>
        </>
    )
}
export default Home
