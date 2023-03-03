import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleWarningBar } from "./redux/warningReducer";
import Toast from "./components/Toast";
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
    path: "/profile/:id",
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
    path: "/projects/:id",
    element: <Home />,
  },
  {
    path: "/projects/update/:id",
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
  const dispatch = useDispatch();
  const warning = useSelector((state) => state.warning);
  if (warning.toggle === true) {
    dispatch(toggleWarningBar(""));
  }

  return (
    <div>
      {warning.toggle && <Toast />}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
