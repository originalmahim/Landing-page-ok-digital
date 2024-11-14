import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import AllOrders from "../pages/orders/AllOrders.jsx";
import PrivateRouter from "./PrivateRouter.jsx";
import ErrorPage from "../pages/shared/ErrorPage.jsx";
import Success from "../pages/home/Success.jsx";
import Chelkout from "../pages/home/Chelkout.jsx";
import Orders3 from "../pages/home/Orders3.jsx";
import PaymentCancel from "../pages/home/PaymentCancel.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/chelkout/",
        element: <Orders3></Orders3>,
      },
      {
        path: "/Payment/Cancelled",
        element: <PaymentCancel></PaymentCancel>,
      },

      {
        path:"/thankyou/bb",
        element: <Success></Success>
        
      },
    ],
  },
  {
    path: "/orders",
    element: (
      <PrivateRouter>
        <AllOrders></AllOrders>
      </PrivateRouter>
    ),
  }
]);

export default router;
