import styled from  '@emotion/styled'
import { Link } from 'wouter'

export const CategoryTitle = styled.h3`
    color: var(--theme-body-txt);
    text-align: right;
`

export const CategoryList = styled.ul`
    list-style-position: inside;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    justify-content: flex-end;
`

const generateMulticolor = props => {
    const index = props.index % 5 + 1
    const background = `var(--brand-color_${index})`

    const colorWhite = [3, 4]
    const isColorWhite = colorWhite.includes(index)
    const color = isColorWhite ? 'white' : 'var(--theme-body-bg)'

    return `
        background-color: ${background};
        color: ${color};
    `
}

export const CategoryItem = styled.li`
    list-style: none;
    padding: 0.3rem;
    margin: 0.2rem;
    font-size: medium;
    ${generateMulticolor}
    &:hover{
        transform: scale(1.05);
    }
`

export const CategoryLink = styled(Link)`
    color: inherit;
    font-size: 1em;
    text-decoration: none;
    font-size: 1em;
    transition: color ease-in 0.1s;
`