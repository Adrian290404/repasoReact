import styled from 'styled-components';

export const Header = styled.header`
    background-color:rgb(184, 184, 184);
    text-align: center;
    padding: 1em 0 .7em 0;
    position: relative;
`;

export const GoBack = styled.div`
    position: absolute;
    top: 1em;
    left: 1em;
    cursor: pointer;
        a {
            text-decoration: none;
            color: inherit;
        }
`

export const Title = styled.h1`
    font-family: "Archivo", sans-serif;
    font-size: 2.5rem;
    padding-bottom: .5em;
`;

export const Description = styled.p`
    font-family: "Poppins", sans-serif;
    font-size: 1.25rem;
`;

export const Footer = styled.header`
    background-color:rgb(184, 184, 184);
    font-size: 2rem;
    width: 100%;
    position: absolute;
    bottom: 0;
    font-family: "Poppins", sans-serif;
    font-size: 1.25rem;
    text-align: center;
    padding: .6em 0;
`;
