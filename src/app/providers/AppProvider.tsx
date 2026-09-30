import { Outlet } from "react-router";
import { IconContext } from "react-icons";
import { QueryContextProvider, StateContextProvider } from "@contexts";

export function AppProvider() {
    return(
        <StateContextProvider>
            <QueryContextProvider>
                <IconContext.Provider value={{className: "icon"}}>
                    <Outlet />
                </IconContext.Provider>
            </QueryContextProvider>
        </StateContextProvider>
    );
}