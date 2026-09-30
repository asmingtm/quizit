import { QueryContext } from "@contexts";
import type { QueryObject } from "@types";
import { use } from "react";

export function QuestionDisplay() {
    const query = use(QueryContext);

    return (
        <div className="display">
            <p id="qn" className="display-text">
                {
                    (query as QueryObject).question
                }
            </p>
        </div>
    );
}