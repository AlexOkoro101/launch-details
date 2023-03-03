import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/layouts/defaultLayout";
import ErrorPage from "./pages/404";
import Home from "./pages/home";
import LaunchDetails from "./pages/launchDetails";
import Launches from "./pages/launches";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'launches',
        element: <Launches />
      },
      {
        path: 'launches/:id',
        element: <LaunchDetails /> 
      },
    ]
  },
]);

export default routes;