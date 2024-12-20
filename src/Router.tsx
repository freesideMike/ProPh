import { createBrowserRouter } from "react-router";
/* import { Layout } from "./pages/Layout"; */

import { IPhoto } from "./models/IPhoto";
import { Home } from "./pages/Home";
import { OnePhoto } from "./pages/OnePhoto";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { Admin } from "./pages/Admin";
import { AddNewPhoto } from "./pages/AddNewPhoto";

interface IRouterProps {
  photos: IPhoto[];
  email: string;
  addNewPhoto: () => void;
  changeIsActive: (id: number) => void;
  handleEmailInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Router = (props: IRouterProps) =>
  createBrowserRouter([
    {
      /*  path: "/",
      element: <Layout />, */
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
          path: "/admin",
          element: (
            <Admin
              photos={props.photos}
              changeIsActive={props.changeIsActive}
              email={props.email}
              handleEmailInput={props.handleEmailInput}
            />
          ),
        },
        {
          path: "/addnew",
          element: (
            <AddNewPhoto
              addNewPhoto={props.addNewPhoto}
              changeIsActive={props.changeIsActive}
            />
          ),
        },
      ],
      errorElement: <NotFound />,
    },
  ]);
export default Router;
