import { Link } from 'react-router-dom';
import styled from "styled-components";

export const Header = styled.h1`
    font-family: "DynaPuff", system-ui;
    font-size: 4rem;
    padding: .5em;
    color: #333;
    background-color: grey;
    text-align: center;
`;

export const Exercises = styled.div`
    padding: 2em 7em;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2em;
    justify-content: space-around;

    @media (max-width: 1400px) {
        padding: 2em 3em;
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 900px) {
        padding: 1em 1.5em;
        grid-template-columns: 1fr;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;