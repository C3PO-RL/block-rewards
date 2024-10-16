import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "../components/common/layout/AppLayout";
import Home from "../pages/Home";
import ErrorPage from "../components/common/Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/error",
        element: <ErrorPage  />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
