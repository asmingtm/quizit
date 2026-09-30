import { use, useRef } from "react";
import { handleActionTrigger } from "@utils";
import { StateContext } from "@contexts";

interface ActionProps{
    index: number;
    label: string;
    isCorrect: boolean;
}

export function ActionButton({index, label = "N/A", isCorrect}: ActionProps) {
    const game = use(StateContext);
    const btnRef = useRef<HTMLButtonElement>(null);

    return (
        <button ref={btnRef} type="submit" className={`
                action
                ${ isCorrect ? "positive" : "negative" }
                ${ game.state === "playing" ? "enabled" : "disabled" }
            `}
            onClick={e => {
                if(game.state === "playing")
                    handleActionTrigger(e, btnRef, isCorrect, game.setState!);
            }
        }>
            <i className="action-index"> {index + 1}. </i>
            <p className="action-label"> {label} </p>
        </button>
    );
}