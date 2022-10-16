import React from "react"
import { CategoryTitle, CategoryList, CategoryItem, CategoryLink } from './styles'

function Category({options = [], name = ''}){
    return (
        <section>
            <CategoryTitle className="Category-title">{name}</CategoryTitle>
            <CategoryList className="Category-list">
                {options.map((singleOption, index) => (
                <CategoryItem key={singleOption} index={index} className="Category-list-item">
                    <CategoryLink className="Category-link" to={`/search/${singleOption}`}>
                    {singleOption}
                    </CategoryLink>
                </CategoryItem>
                ))}
            </CategoryList>
        </section>
    )
}

export default Category