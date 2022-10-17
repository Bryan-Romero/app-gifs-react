import styled from "@emotion/styled"
import { bps, buttons } from "styles/styles"


export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const GifCategoryContent = styled.div`
    display: flex;
    justify-content: right;
    ${bps.smartphone} {
        flex-direction: column;
    }
    ${bps.tablet} {
        flex-direction: row;
    }
    ${bps.desktop}{
        flex-direction: row;
    }
`

export const GifContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const TrendingContent= styled.div`
    ${bps.smartphone} {
        width: var(--width-category-smartphone);
    }
    ${bps.tablet} {
        width: var(--width-category-tablet);
    }
    ${bps.desktop}{
        width: var(--width-category-desktop);
    }
`

export const Button = styled.label`
    ${props => buttons[props.type]}
    margin-top: 30px;
`

export const TitleH3 = styled.h3`
    width: 100%;
    text-align: left;
`