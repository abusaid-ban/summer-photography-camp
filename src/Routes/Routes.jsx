import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors/Instructors";
import Login from "../Pages/Login/Login";
import Classes from "../Pages/Home/Classes/Classes";
import Register from "../Pages/Home/Register/Register";
import ErrorPage from "../ErrorPage";

import DashBoard from "../Layout/DashBoard/DashBoard";
import MyCart from "../Pages/MyCart/MyCart";
import PrivateRoute from './PrivateRoute';
import AllUsers from "../Pages/Home/AllUsers/AllUsers";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"instructors",
            element:<Instructors></Instructors>,
          
        },
        {
            path:"classes",
            element:<Classes></Classes>
        },
       
        {
            path:"login",
            element:<Login></Login>
        },
        {
            path:"register",
            element:<Register></Register>
        }
      ]
    },
    {
        path:"dashboard",
        element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children:[
            {
                path:'mycart',
                element:<MyCart></MyCart>
            },
            {
                path:'users',
                element:<AllUsers></AllUsers>
            }
        ]
    },
    {
        path: "/*",
        element: <ErrorPage />,
       
    }
  ]);