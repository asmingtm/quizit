import type React from "react";
import type { ReactElement } from "react";
import type { GameStateType } from "./game.types";
import type { QueryDifficulty } from "./queries.types";

export interface ContextProviderProps{ children: ReactElement }

export interface StateContextValues{
    gameState: GameStateType;
    setGameState: React.Dispatch<React.SetStateAction<GameStateType>>;
}

export interface GameContextValues{
    state: GameStateType;
    setState?: React.Dispatch<React.SetStateAction<GameStateType>>;
    difficulty: QueryDifficulty;
    setDifficulty?: React.Dispatch<React.SetStateAction<QueryDifficulty>>;
}