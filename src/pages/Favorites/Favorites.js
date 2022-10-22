import Gif from "components/Gif/Gif";
import ListOFGifs from "components/ListOfGifs/ListOfGifs";
import Spinner from "components/Spinner/Spinner";
import useSingleGif from "hooks/useSingleGif";
import useUser from "hooks/useUser";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import getFavsGifs from "services/getFavsGifs";
import getSingleGif from "services/getSingleGif";
import { Title } from './styles'

const Favorites = () => {
    const [gifs, setGifs] = useState([])
    const {favs} =  useUser()
    const listFavs = favs.data !== undefined ? favs.data.map(objGif => objGif.idGif) : []

    useEffect(() => {
        getFavsGifs({ids: listFavs.join()}).then(res => {
            setGifs(res)
        })
    }, [favs])

    return (
        <>
            <Helmet>
                <title>{'Favotite gifs'}</title>
                <meta name="description" content={'Your favorites gifs'}/>
            </Helmet>
            <Title>Your favorites gifs</Title>
            <ListOFGifs gifs={gifs}/>
        </>
    )
};

export default Favorites;
