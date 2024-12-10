import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import OnePhoto from "./pages/OnePhoto";
import Cart from "./pages/Cart";
import { IPhoto } from "./models/IPhoto";

interface IRouterProps {
  photos: IPhoto[];
}


const router = (props: IRouterProps) => createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home photos={props.photos} />,
      },
      {
        path: "/onephoto/:id",
        element: <OnePhoto photos={props.photos} />,
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

export default router;