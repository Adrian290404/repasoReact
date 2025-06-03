import styled from "styled-components";
import { FaPowerOff } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { MdTimer } from "react-icons/md";
import { MdNotStarted } from "react-icons/md";
import { MdOutlinePauseCircleFilled } from "react-icons/md";
import { MdOutlineRestartAlt } from "react-icons/md";

interface clockState{
    state: boolean;
}

interface disabled{
    disabled: boolean;
}

export const PowerIcon = styled(FaPowerOff)<clockState>`
    color: ${({ state }) => (state ? "red" : "grey")};
    transition: color 0.4s ease-in-out;
`;

export const TimeIcon = styled(MdOutlineAccessTimeFilled)<clockState>`
    color: #00ffcc;
`;

export const TimerIcon = styled(MdTimer)<clockState>`
    color: #00ffcc;
`;

export const StartIcon = styled(MdNotStarted)<clockState>`
    color: #00ffcc;
`;

export const PauseIcon = styled(MdOutlinePauseCircleFilled)<clockState>`
    color: #00ffcc;
`;

export const RestartIcon = styled(MdOutlineRestartAlt)<clockState>`
    color: #00ffcc;
`;

export const ExternalBorder = styled.div`
    position: relative;
    width: 40em;
    margin: 0 auto;
    padding: 1.5em;
    border-radius: 1.5em;
    background-color: #1e1e1e;
    box-shadow: 0 0 20px rgba(0,0,0,0.5);
`;

export const Buttons = styled.div`
    position: absolute;
    top: 1em;
    right: 1.3em;
    display: flex;
    gap: .5em;
`;

export const Button = styled.button<disabled>`
    border-radius: 50%;
    padding: 0.3em 0.3em 0.1em 0.3em;
    background-color: #1e1e1e;
    border: 1px solid #00ffcc;
    cursor: pointer;
    opacity: ${({ disabled }) => (disabled ? 0 : 1)};
    transform: ${({ disabled }) => (disabled ? 'scale(0.8)' : 'scale(1)')};
    visibility: ${({ disabled }) => (disabled ? 'hidden' : 'visible')};
    transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

    &:hover {
        background-color:rgb(0, 61, 49);
        transition: all 0.2s ease;
    }
`;

export const InternalBorder = styled.div<clockState>`
    position: relative;
    border-radius: 1em;
    background-color: ${({ state }) =>
        state ? "#2c2c2c" : "black"};
    padding-bottom: 1em;
    text-align: center;
    transition: background-color 0.4s ease-in-out;
`;

export const Time = styled.div`
    font-family: "Orbitron", sans-serif;
    padding-top: .1em;
    font-size: 10rem;
    color: #00ffcc;
`;

export const Seconds = styled.div`
    font-family: "Orbitron", sans-serif;
    color: #00ffcc;
`;

export const Switch = styled.button`
    position: absolute;
    padding: 0em .6em;
    border-radius: 1em;
    background-color: black;
    top: .2em;
    left: 6em;
    cursor: pointer;
`;

export const InternalBorderContent = styled.div<disabled>`
    opacity: ${({ disabled }) => (disabled ? 0 : 1)};
    transform: ${({ disabled }) => (disabled ? 'translateY(-10px)' : 'translateY(0)')};
    visibility: ${({ disabled }) => (disabled ? 'hidden' : 'visible')};
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
    transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
`;