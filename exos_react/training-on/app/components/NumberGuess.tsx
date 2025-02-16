import type React from "react";
import { Button } from "./CCButton";
import { useState } from "react";

type NumberGuessProps = {
    children: React.ReactNode,
    numberToGuess?: number
}

export const NumberGuess: React.FC<NumberGuessProps> = ({
    children, 
    numberToGuess=32
}) => {

const [num, setNum] = useState<number>(34);

const checkNumber = () => {
    num === numberToGuess ? alert('succes !') : alert('try again')
}

    return (
        <div className="main-container justify-between">
            <h1 className="main-title">{children}</h1>
            <div className="flex flex-col gap-2">
                <p className="text-3xl text-center normal-text">{num} ?</p>
                <div className="flex gap-2 justify-center">
                    <Button iconOnly variant="secondary" onClick={() => setNum(num -1)}>-</Button>
                    <Button iconOnly onClick={() => setNum(num + 1)}>+</Button>
                </div>
            </div>
            <Button onClick={() => {checkNumber()}}>Check</Button>
        </div>
    )
}