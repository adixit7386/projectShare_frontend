import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Home />,
  },
  {
    path: "/chats",
    element: <Home />,
  },
  {
    path: "/teams",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Home />,
  },
  {
    path: "/",
    element: <Navigate replace to="/home" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
