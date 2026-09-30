import type { ContextProviderProps, GameStateType, QueryDifficulty, GameContextValues } from "@types";
import { createContext, useState } from "react";

const initialGameState: GameStateType = "loading";

const initialGameContext: GameContextValues = {
    state: "loading",
    difficulty: "normal",
}

export const StateContext = createContext<GameContextValues>(initialGameContext);

export function StateContextProvider({ children }: ContextProviderProps){
    const [gameState, setGameState] = useState<GameStateType>(initialGameState);
    const [difficulty, setDifficulty] = useState<QueryDifficulty>("normal");

    const game: GameContextValues = {
        state: gameState,
        setState: setGameState,
        difficulty,
        setDifficulty,
    }

    return(
        <StateContext value={game} >
            { children }
        </StateContext>
    );
}