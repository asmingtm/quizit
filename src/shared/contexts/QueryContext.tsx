import { createContext } from "react";

import { useFetchQuery } from "@hooks";
import type { ContextProviderProps } from "@types";

export const QueryContext = createContext({});

export function QueryContextProvider({ children }: ContextProviderProps){
    const query = useFetchQuery("easy");
    console.log(query);

    return(
        <QueryContext value={query}>
            { children }
        </QueryContext>
    );
}