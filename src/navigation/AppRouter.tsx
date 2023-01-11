import { createBrowserRouter } from "react-router-dom";
import Wallet from "../pages/Wallet";
import ErrorPage from "../component/error-page";
import Send from "../pages/Send";
import Receive from "../pages/Receive";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Wallet />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/send",
    element: <Send />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/receive",
    element: <Receive/>,
    errorElement: <ErrorPage />,
  },
]);
