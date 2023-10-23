import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import About from "../Pages/About/About";
import BookService from "../Pages/BookService/BookService";
import Bookings from "../Pages/Bookings/Bookings";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "about",
          element: <About/>
        },
        {
          path: 'login', 
          element: <Login/>
        }, 
        {
          path: 'signup', 
          element: <Signup/>
        },
        {
          path: 'book/:id', 
          element: <PrivateRoute><BookService/></PrivateRoute>, 
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: 'bookings', 
          element: <PrivateRoute><Bookings/></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;