import { createBrowserRouter } from "react-router-dom"
import Home from '../pages/Home';
import Main from "../components/main";

const router = createBrowserRouter([
    {
        path: "/main",
        element: <Main />,
    },
    {
        path: "/homepage",
        element: <Home></Home>,
    },
]);

export default router;