
import { createBrowserRouter } from "react-router-dom";
import Root from "../../layouts/Root";
import Home from "../../pages/Home/Home";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import NeDetails from "../../pages/delails/NeDetails";
import PrivetRoutes from "./PrivetRoutes";
import About from "../../about/About";
import Contact from "../../contact/Contact";


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/event.json'),
      },
      {
        path: '/data/:id',
        element: (
          <PrivetRoutes>
            <NeDetails></NeDetails>
          </PrivetRoutes>
        ),
        loader: () => fetch('/event.json'),
      },
      {
        path: '/about',
        element: <About></About>,
        loader: () => fetch('/card.json'),
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);
export default routes;