import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import OnePhoto from "./pages/OnePhoto";
import Cart from "./pages/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/onephoto",
        element: <OnePhoto />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
