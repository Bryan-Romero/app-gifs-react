import React, { useReducer, useState } from "react";
import { useLocation } from "wouter";
import useForm from "./hook";
import "./index.css";

const RATINGS = [
    "g",
    "pg",
    "pg-13",
    "r"
];
const LANG = [
    "English (en)",
    "Spanish (es)",
    "Portuguese (pt)",
    "German (de)",
    "Japanese (ja)",
];

function SearchForm({
    initialKeyword = "",
    initialRating = "g",
    initialLang = "English (en)"
}) {
    //const [keyword, setKeyword] = useState(decodeURI(initialKeyword));
    //const [times, setTimes] = useState(0)
    //const [rating, setRating] = useState(initialRating ? initialRating : RATINGS[0]);
    const [, pushLocation] = useLocation();

    const {
        keyword,
        rating,
        lang,
        updateKeyword,
        updateRating,
        updateLang,
        resetFilter
    } = useForm({
        initialKeyword,
        initialRating,
        initialLang,
    });

    const handleSubmit = (evt) => {
        evt.preventDefault();
        pushLocation(`/search/${keyword}/${rating}/${lang}`)
    };

    const handleReset = (evt) => {
        evt.preventDefault();
        resetFilter(RATINGS[0], LANG[0])
    };

    const handleChange = (evt) => {
        updateKeyword(evt.target.value)
    };

    const handleChangeRating = (evt) => {
        updateRating(evt.target.value)
    };

    const handleChangeLang = (evt) => {
        updateLang(evt.target.value)
    };

    return (
        <form className="search-form" onSubmit={handleSubmit} onReset={handleReset}>
            <input
                className="search-input"
                onChange={handleChange}
                type="search"
                value={keyword}
                placeholder="Search a gif here"
            />
            {/* <small>{times}</small> */}
            <button className="search-button" type="submit" value="Search">
                Search
            </button>
            <select onChange={handleChangeRating} value={rating}>
                <option disabled>Rating types</option>
                {RATINGS.map((rating) => (
                    <option key={rating}>{rating}</option>
                ))}
            </select>
            <select onChange={handleChangeLang} value={lang}>
                <option disabled>Supported Languages</option>
                {LANG.map((lang) => (
                    <option key={lang}>{lang}</option>
                ))}
            </select>
            <button type="reset" value="Reset Filters">
                Reset Filters
            </button>
        </form>
    );
}
export default React.memo(SearchForm);
