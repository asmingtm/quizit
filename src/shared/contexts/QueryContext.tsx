import { createContext, use } from "react";

import { fetchQuery } from "@utils";
import type { ContextProviderProps } from "@types";
import { StateContext } from "./StateContext";

export const QueryContext = createContext({});

export function QueryContextProvider({ children }: ContextProviderProps){
    const game = use(StateContext);
    const query = fetchQuery(game.difficulty);
    if(game.setState) game.setState("playing");
    
    return(
        <QueryContext value={query}>
            { children }
        </QueryContext>
    );
}