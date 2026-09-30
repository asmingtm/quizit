import { Outlet } from "react-router";
import { IconContext } from "react-icons";
import { QueryContextProvider } from "@contexts";

export function AppProvider() {
    return(
        <QueryContextProvider>
            <IconContext.Provider value={{className: "icon"}}>
                <Outlet />
            </IconContext.Provider>
        </QueryContextProvider>
    );
}