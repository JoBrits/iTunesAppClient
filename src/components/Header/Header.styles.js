import styled from "styled-components";

export const Wrapper = styled.div `
    background: var(--medGrey);
    padding: 0 20px;
`;

export const Content = styled.div `
    display: flex;
    align-items center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    margin: 0 auto;
`;

export const ReactItunes = styled.div `
    font-size: 1rem;
    color: var(--white);
    display: flex;
    align-items: center;
    column-gap: 20px;
    
    a,
    a:visited {
        color: var(--white);
        text-decoration: none;
    }
    
`;

export const ReactLogo = styled.img `
    width: 40px;
    padding: 10px 0;
    
    @media screen and (max-width: 500px) {
        width: 32px;
    }
`;