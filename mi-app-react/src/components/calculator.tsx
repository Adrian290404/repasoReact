import React, { useState } from "react";
import { ExternalBorder, InternalBorder, Result, Buttons, Button, OffButton } from "../styles/calculator";
import { evaluate } from "mathjs";

export const Calculator: React.FC = () => {
    const [input, setInput] = useState("");
    const [calculatorState, setCalculatorState] = useState(false)

    const pressButton = (value: string) => {
        if (calculatorState){
            if (value === "AC") {
                setInput("0");
            } 
            else if (value === "=") {
                try {
                    const result = evaluate(input);
                    setInput(String(result));
                } 
                catch {
                    setInput("Error");
                }
            } 
            else {
                if (input === "0" || input === "Error") {
                    setInput(value);
                } 
                else {
                    setInput(input + value);
                }
            }
        }
    };

    const switchState = () => {
        setCalculatorState(!calculatorState);
        !calculatorState ? setInput("0") : setInput("");
    }

    const buttons = [
        "9", "8", "7", "/",
        "6", "5", "4", "*",
        "3", "2", "1", "-",
        "0", "AC", "=", "+"
    ];

    return (
        <ExternalBorder>
            <OffButton onClick={() => switchState()} /> 
            <InternalBorder>
                <Result>{input}</Result>
                <Buttons>
                    {buttons.map((btn, index) => {
                        let variant: 'operator' | 'AC' | 'default' = 'default';

                        if (['+', '-', '*', '/', '='].includes(btn)) {
                            variant = 'operator';
                        } 
                        if (btn === 'AC') {
                            variant = 'AC';
                        }

                        return (
                            <Button key={index} variant={variant} onClick={() => pressButton(btn)}>
                                {btn}
                            </Button>
                        );
                    })}
                </Buttons>
            </InternalBorder>
        </ExternalBorder>
    );
};