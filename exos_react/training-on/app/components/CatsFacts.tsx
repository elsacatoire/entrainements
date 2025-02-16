import type React from "react";
import { useState } from "react";
import { Button } from "./CCButton";

type FactType = {
    fact: string,
    length: number
}

export const CatsFacts: React.FC = () => {

    const [fact, setFact] = useState<null | FactType>(null);

    const getFact = () => {
        fetch("https://catfact.ninja/fact", {method: "GET"})
        .then((response) => response.json())
        .then((data) => {setFact(data)})
        .catch((error) => console.log(error));
    }

    return(
        <div className="main-container">
            <h1 className="main-title">Do you wanna learn fun facts about cats ?</h1>
            <div className="flex gap-4 items-center text-gray-100">
                <Button iconOnly onClick={() => getFact()}>Get Cat Fact</Button>
                {!fact && <p>Press the button as many time as you wish to learn things about cutties of the univers</p>}
                {fact && <p className="font-semibold italic">{fact.fact}</p>}
            </div>
        </div>
    )
}