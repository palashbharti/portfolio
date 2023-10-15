import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bestsellers from "./Bestsellers";
import Theodores from "./Theodores";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Navbar />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/new-york-times-bestsellers",
                    element: <Bestsellers />,
                },
                {
                    path: "/theodores-restaurant",
                    element: <Theodores />,
                },
            ],
        },
    ]);

    return (
        <div className="App">
            <RouterProvider router={routes} />
        </div>
    );
}

export default App;
