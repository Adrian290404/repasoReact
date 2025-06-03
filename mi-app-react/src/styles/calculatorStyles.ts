import styled, { keyframes } from 'styled-components';

const pressEffect = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(2px);
    }
    100% {
        transform: translateY(0);
    }
`;


interface ButtonProps {
    variant?: 'operator' | 'AC' | 'default';
}

export const ExternalBorder = styled.div`
    position: relative;
    max-width: 22em;
    margin: 0 auto;
    padding: 1.5em;
    border-radius: 1.5em;
    background-color: #1e1e1e;
    box-shadow: 0 0 20px rgba(0,0,0,0.5);
    font-family: 'Poppins', sans-serif;
`;

export const OffButton = styled.div`
    position: absolute;
    top: 3.5em;
    right: -.6em;
    background-color: #ff4d4d;
    padding: 1.5em .5em;
    border-radius: 0 .5em .5em 0;
    color: white;
    font-weight: bold;
    cursor: pointer;
    z-index: 10;
    transition: background-color 0.3s;
    &:hover {
        background-color: #e63946;
    }
    &:active {
        animation: ${pressEffect} 0.2s ease-in-out;
    }
`;

export const InternalBorder = styled.div`
    border-radius: 1em;
    background-color: #2c2c2c;
    padding: 1em;
`;

export const Result = styled.div`
    background-color: #121212;
    color: #00ffcc;
    font-size: 1.2em;
    height: 4em;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 1em;
    border-radius: 0.8em;
    box-shadow: inset 0 0 5px #00ffcc55;
`;

export const Buttons = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1em;
    margin-top: 1.5em;
`;

export const Button = styled.button<ButtonProps>`
    padding: 1em;
    font-size: 1.1em;
    border-radius: 0.8em;
    border: none;
    background-color: ${({ variant }) =>
        variant === 'operator' ? '#00bcd4' :
        variant === 'AC' ? '#ff7043' :
        '#eeeeee'};
    color: ${({ variant }) =>
        variant === 'operator' || variant === 'AC' ? 'white' : 'black'};
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        opacity: 0.9;
    }

    &:active {
        animation: ${pressEffect} 0.2s ease-in-out;
    }
`;