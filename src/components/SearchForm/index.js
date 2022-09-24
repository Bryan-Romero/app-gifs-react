import React, { useState } from "react";
import "./index.css"

function SearchForm({ onSubmitParent }) {
    const [keyword, setKeyword] = useState('')

    const handleSubmit = evt => {
        evt.preventDefault()
        //go to oter roout
        //pushLocation(`/search/${keyword}`)
        onSubmitParent({keyword})
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type='text' value={keyword} placeholder="Search a gif here"/>
            <button type="submit" value="Search">Search</button>
        </form>
    )
}
export default React.memo(SearchForm)