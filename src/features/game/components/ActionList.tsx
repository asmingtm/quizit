import { use } from "react";

import { QueryContext } from "@contexts";
import { ActionButton } from "./ActionButton";
import type { QueryObject } from "@types";

export function ActionList() {
    const query = use(QueryContext);

    return (
        <div className="action-list">
            {
                (query as QueryObject).options.map((option, i) => (
                    <ActionButton
                        key={crypto.randomUUID()}
                        index={i}
                        label={option.label}
                        isCorrect={
                            (query as QueryObject).correctOptionId === option.id
                        }
                    />
                ))
            }
        </div>
    );
}