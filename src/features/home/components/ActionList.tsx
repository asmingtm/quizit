// import { ActionButton } from "./ActionButton";

import { useFetchQuery } from "@hooks";
import type { QueryObject } from "@types";

export function ActionList() {
    const [query, setQuery] = useFetchQuery("hard");
    
    return (
        <div className="action-list">
        </div>
    );
}