import React from "react";
import Spinner from "components/Spinner/Spinner";
import useGifs from "hooks/useGifs";
import ListOFGifs from "components/ListOfGifs/ListOfGifs";
import TrendigSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";
import { Helmet } from "react-helmet";
import { HomeContent, GifContent, Button, TitleH3, GifCategoryContent, TrendingContent } from "./styles";

function Home(){

    const {gifs, loading, setPage} = useGifs()

    const handleNextPage = () => setPage(prevPage => prevPage + 1)

    return (
        <>
            <Helmet>
                <title>Home | GIFty</title>
                <meta name="description" content='Searching gifs'/>
            </Helmet>
            
            <HomeContent>
                <SearchForm />
                <GifCategoryContent>
                    <GifContent>
                        <TitleH3>Last search</TitleH3>
                        {
                            loading
                            ? <Spinner />
                            : <ListOFGifs gifs={gifs}/>
                        }
                        <Button onClick={handleNextPage} type='primary'>Show more</Button>
                    </GifContent>
                    <TrendingContent>
                        <TrendigSearches />
                    </TrendingContent>
                </GifCategoryContent>
            </HomeContent>
        </>
    )
}
export default Home
