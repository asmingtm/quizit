import { createBrowserRouter } from "react-router";
import { AppProvider } from "../providers/AppProvider";
import { GamePage } from "@features";

export const routes = createBrowserRouter([
    {
        element: <AppProvider />,
        children: [
            {
                path: "/",
                element: <GamePage />
            }
        ]
    }
])