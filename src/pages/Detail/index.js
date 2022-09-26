import React from "react";
import Gif from "components/Gif/Gif";
import useSingleGif from "hooks/useSingleGif";
import Spinner from "components/Spinner/Spinner";
import { Redirect } from "wouter";

export default function Detail ({ params }){
    const {gif, isLoading, isError} = useSingleGif({id: params.id})

    if(isLoading) return <Spinner />
    if(isError) return <Redirect to="/404" />
    if(!gif) return null
    return (
        <>
            <h4 className="gif-titel">{gif.title}</h4>
            <Gif {...gif}/>
        </>
    )
}