import type React from "react";
import { Button } from "./CCButton";

type NumberGuessProps = {
    children: React.ReactNode
}

export const NumberGuess: React.FC<NumberGuessProps> = ({children}) => {
    return (
        <div className="main-container justify-between">
            <h1 className="main-title">{children}</h1>
                <p className="text-3xl text-center">32 ?</p>
                <div className="flex gap-4">
                    <Button iconOnly>+</Button>
                    <Button iconOnly variant="secondary">-</Button>
                    <Button>Check</Button>
                </div>
        </div>
    )
}