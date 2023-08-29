import RootLayout from "@/layouts/RootLayout";
import HomePage from "@/pages/HomePage";
import SigninPage from "@/pages/SigninPage";
import SignupPage from "@/pages/SignupPage";
import type { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
    {
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/signup",
                element: <SignupPage />,
            },
            {
                path: "/login",
                element: <SigninPage />,
            },
        ],
    },
];

export default routes;
