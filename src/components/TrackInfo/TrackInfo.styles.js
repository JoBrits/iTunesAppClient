import styled from "styled-components";

export const Wrapper = styled.div `
    padding: 20px;
    
   
`;


export const Content = styled.div `
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: var(--maxWidth);
    margin: 0 auto;

    :not(:last-child){
        border-right: solid 1px #fff;
        flex: 1 1 auto;
        padding: 0 20px;
        height: 20px;
    }


audio {
    padding: 0 20px;
}
    
`;
