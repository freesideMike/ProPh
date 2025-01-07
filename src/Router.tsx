import { createBrowserRouter } from "react-router";
import { IPhoto } from "./models/IPhoto";
import { Home } from "./pages/Home";
import { OnePhoto } from "./pages/OnePhoto";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { Admin } from "./pages/Admin";
import { IOrder } from "./models/IOrder";
import { ICart } from "./models/ICart";

interface IRouterProps {
  photos: IPhoto[];
  email: string;
  changeIsActive: (id: number) => void;
  handleEmailInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  titleChange: (value: string) => void;
  url: File | undefined;
  urlChange: (value: File) => void;
  format: string;
  formatChange: (value: string) => void;
  priceRange: string;
  priceRangeChange: (value: string) => void;
  handleSubmit: () => void;
  handleAddNewPhoto: () => void;
  addToCart: (photoIdNumber: number, price: number, size: string) => void;
  supabase: any;
  cart: ICart[];
  createOrder: () => void;
  addCount: (photoId: number, size: string) => void;
  subtractCount: (photoId: number, size: string) => void;
  order: IOrder[];
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
          element: (
            <OnePhoto photos={props.photos} addToCart={props.addToCart} />
          ),
        },
        {
          path: "/cart",
          element: (
            <Cart
              order={props.order}
              photos={props.photos}
              cart={props.cart}
              createOrder={props.createOrder}
              addCount={props.addCount}
              subtractCount={props.subtractCount}
            />
          ),
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
              /*   getYourOwnPhotos={props.getYourOwnPhotos} */
              title={props.title}
              titleChange={props.titleChange}
              url={props.url}
              urlChange={props.urlChange}
              format={props.format}
              formatChange={props.formatChange}
              priceRange={props.priceRange}
              priceRangeChange={props.priceRangeChange}
              handleSubmit={props.handleSubmit}
              handleAddNewPhoto={props.handleAddNewPhoto}
              supabase={props.supabase}
            />
          ),
        },
      ],
      errorElement: <NotFound />,
    },
  ]);
export default Router;
