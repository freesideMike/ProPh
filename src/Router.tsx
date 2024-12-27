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
  uploadImage: (file: File) => void;
  getYourOwnPhotos: () => void;
  title: string;
  titleChange: (value: string) => void;
  url: string;
  urlChange: (value: string) => void;
  format: string;
  formatChange: (value: string) => void;
  priceRange: string;
  priceRangeChange: (value: string) => void;
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
              getYourOwnPhotos={props.getYourOwnPhotos}
              uploadImage={props.uploadImage}
              title={props.title}
              titleChange={props.titleChange}
              url={props.url}
              urlChange={props.urlChange}
              format={props.format}
              formatChange={props.formatChange}
              priceRange={props.priceRange}
              priceRangeChange={props.priceRangeChange}
            />
          ),
        },
      /*   {
          path: "/addnew",
          element: (
            <AddNewPhoto
              changeIsActive={props.changeIsActive}
              uploadImage={props.uploadImage}
            />
          ),
        }, */
      ],
      errorElement: <NotFound />,
    },
  ]);
export default Router;
