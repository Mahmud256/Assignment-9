import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
 import PrivateRoute from "./PrivateRoute";
import Details from "../pages/Details/Details";
import Cart from "../pages/Cart/Cart";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('/categories.json')
        },
        {
            path: '/cart',
            element: <Cart></Cart>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/details/:id',
            element: <PrivateRoute><Details></Details></PrivateRoute>,
            loader: () => fetch('/categories.json')
        },
    ]
    }
  ]);

  export default router;