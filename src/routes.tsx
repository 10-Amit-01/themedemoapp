import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home, { loader } from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: loader
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default routes;
