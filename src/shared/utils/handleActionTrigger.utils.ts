import type { Dispatch } from "react";
import type { GameStateType } from "@types";

export function handleActionTrigger(
    e: React.MouseEvent,
    button: React.RefObject<HTMLButtonElement | null>,
    isCorrect: boolean,
    setGameState: Dispatch<React.SetStateAction<GameStateType>>
){

    e.preventDefault();
    if (button.current instanceof HTMLButtonElement)
        button.current.classList.add("active", isCorrect ? "correct" : "negative");
    setGameState("stopped");
}