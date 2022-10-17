import styled from "@emotion/styled"

export const bps = {
    desktop: '@media screen and (min-width: 1024px)',
    tablet: '@media screen and (min-width: 767px) and (max-width: 1023px)',
    smartphone: '@media screen and (max-width: 767px)'
}

export const buttons = {
    primary: `
        cursor: pointer;
        padding: 8px;
        background-color: var(--brand-color_6);
        color: aliceblue;
        font-size: medium;
        font-weight: 600;
        &:hover {
            transform: scale(1.05);
        }
    `
}
