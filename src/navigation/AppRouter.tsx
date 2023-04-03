import { createBrowserRouter } from "react-router-dom";
import Wallet from "../pages/Wallet";
import ErrorPage from "../component/error-page";
import Send from "../pages/Send";
import Receive from "../pages/Receive";
import Trancsation from "../pages/transation";
import Remittance from "../pages/Remittance";
import Exchanger from "../pages/Exchanger";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Wallet />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/trancsation/:id",
    element: <Trancsation />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/remittance/:address",
    element: <Remittance />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/send",
    element: <Send />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/receive",
    element: <Receive />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/exchanger",
    element: <Exchanger />,
    errorElement: <ErrorPage />,
  },
]);
