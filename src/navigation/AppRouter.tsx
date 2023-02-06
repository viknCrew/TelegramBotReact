import { createBrowserRouter } from "react-router-dom";
import Wallet from "../pages/Wallet";
import ErrorPage from "../component/error-page";
import Send from "../pages/Send";
import Receive from "../pages/Receive";
import Trancsation from "../pages/transation";
import Remittance from "../pages/Remittance";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Wallet />,
  },
  {
    path: "/trancsation/:id",
    element: <Trancsation />,
  },
  {
    path: "/remittance/:address",
    element: <Remittance />,
  },
  {
    path: "/send",
    element: <Send />,
  },
  {
    path: "/receive",
    element: <Receive />,
    // errorElement: <ErrorPage />,
  },
]);
