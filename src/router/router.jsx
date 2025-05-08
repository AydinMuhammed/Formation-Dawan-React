import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Articles from "../pages/Articles"
import Admin from "../pages/Admin"
import Layout from "../components/Layout"
import ProtectedRoute from "../components/ProtectedRoute"

export default createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/articles",
                element: <Articles />
            },
            {
                path: "/admin",
                element: <ProtectedRoute/>,
                children:[
                    {
                        path: "/admin",
                        element: <Admin />
                    }
                ]
            }
        ]
    }
])