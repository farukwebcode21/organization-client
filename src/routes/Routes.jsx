import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import DashboardLayout from "../layout/DashboardLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../error-page";
import { HomeDashboard } from "../pages/dashboard/homeDashboard";
import AllProducts from "../pages/dashboard/AllProducts";
import AddProduct from "../pages/dashboard/AddProduct";
import PrivateRoute from "./PrivateRoute";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Team from "../pages/Team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Register />,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: "true",
        element: <HomeDashboard />,
      },
      {
        path: "all-product",
        element: <AllProducts />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
    ],
  },
]);
export default router;
