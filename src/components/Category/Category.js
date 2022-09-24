import React from "react"
import { Link } from "wouter"
import "./Category.css"

function Category({options = [], name = ''}){
    return <div>
        <h1>{name}</h1>
        {
        options.map(sigleOption => (
            <div key={sigleOption}>
                <Link to={`/search/${sigleOption}`}>
                    Gif of {sigleOption}&nbsp;
                </Link> 
            </div>
        ))
    }</div>
}

export default Category