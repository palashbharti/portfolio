import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bestsellers from "./Bestsellers";
import Home from "./Home";

function App() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/new-york-times-bestsellers",
            element: <Bestsellers />,
        },
    ]);

    return (
        <div className="App">
            <RouterProvider router={routes} />
        </div>
    );
}

export default App;
