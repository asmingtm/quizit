import { handleActionTrigger } from "@utils";

interface ActionProps{
    index: number;
    label: string;
    isCorrect?: boolean;
}

export function ActionButton({index, label = "N/A", isCorrect}: ActionProps) {
    return (
        <button id="a1" type="submit" className={`action ${isCorrect ? "positive" : "negative"}`} onClick={e => handleActionTrigger(e, index)}>
            <i className="action-index"> {index + 1}. </i>
            <p className="action-label"> {label} </p>
        </button>
    );
}