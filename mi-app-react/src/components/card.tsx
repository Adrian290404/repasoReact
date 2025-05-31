import React from "react";
import { CardContent, CardTitle, StyledIframe } from "../styles/cardStyles";

interface CardProps {
    title: string;
    root: string;
}

export const Card: React.FC<CardProps> = ({ title, root }) => {
    return <CardContent>
        <CardTitle>{title}</CardTitle>
        <StyledIframe src={root} />
    </CardContent>
}