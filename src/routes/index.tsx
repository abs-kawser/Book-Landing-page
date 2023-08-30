import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import CreateBook from "../pages/createBook";
import DetailsBook from "../pages/DetailsBook";
import UpdateBook from "../pages/UpdateBook";
import PrivateRoute from "./privateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/createBook",
        element: (
          <PrivateRoute>
            <CreateBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateBook/:id",
        element: (
          <PrivateRoute>
            <UpdateBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <DetailsBook />
          </PrivateRoute>
        ),
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },

     
    ],
  },
]);

export default routes;
