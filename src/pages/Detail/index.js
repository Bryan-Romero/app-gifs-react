import React from "react";
import Gif from "components/Gif/Gif";
import useSingleGif from "hooks/useSingleGif";
import Spinner from "components/Spinner/Spinner";
import { Redirect } from "wouter";
import { Helmet } from "react-helmet";

export default function Detail ({ params }){
    const {gif, isLoading, isError} = useSingleGif({id: params.id})
    const title = gif ? gif.title : ''

    

    if(isLoading){ 
        return (
            <>
                <Helmet>
                    <title>Loading...</title>
                    <meta name="description" content={title}/>
                </Helmet>
                <Spinner />
            </>
        )
    }
    if(isError) return <Redirect to="/404" />
    if(!gif) return null
    return (
        <>
            <Helmet>
                <title>{`Detail of gif ${title}`}</title>
                <meta name="description" content={title}/>
            </Helmet>
            <h4 className="gif-titel">{gif.title}</h4>
            <Gif {...gif}/>
        </>
    )
}