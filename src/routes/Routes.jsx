import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
 import PrivateRoute from "./PrivateRoute";
import Details from "../pages/Details/Details";
import Cart from "../pages/Cart/Cart";
import Footer from "../pages/Footer/Footer";
import LoginAuth from "../pages/Login/LoginAuth";
import Products from "../components/Header/Products/Products";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import About from "../pages/About/About";
import Instructor from "../pages/Instructors/Instructor";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('/categories.json')
        },       
        {
            path: '/instructors',
            element: <Instructor></Instructor>,
        },       
        {
            path: '/footer',
            element: <Footer></Footer>
        },
        {
            path: '/services',
            element: <Products></Products>,
            loader: () => fetch('/categories.json')
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/login',
            element: <LoginAuth></LoginAuth>
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
        {
            path: '/cart',
            element: <PrivateRoute><Cart></Cart></PrivateRoute>
        },
        {
            path: '/about',
            element: <About></About>
        }
    ]
    }
  ]);

  export default router;