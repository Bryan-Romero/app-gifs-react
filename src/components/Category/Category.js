import React from "react"
import { Link } from "wouter"
import "./Category.css"

function Category({options = [], name = ''}){
    return (
        <div className="categoryContainer">
            <h1>{name}</h1>
            {
            options.map(sigleOption => (
                <div key={sigleOption} className="sigleCategory">
                    <Link to={`/search/${sigleOption}`}>
                        Gif of {sigleOption} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </Link> 
                </div>
            ))
            }
        </div>
    )
}

export default Category