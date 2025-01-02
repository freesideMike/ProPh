
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { IOrder } from "../models/IOrder";
import { IPhoto } from "../models/IPhoto";
import { OrderLine } from "../components/OrderLine";
import { ICart } from "../models/ICart";

interface ICartProps {
  order: IOrder[];
  photos: IPhoto[];
  cart: ICart[];
  createOrder: () => void;
}

export const Cart = (props: ICartProps) => {

  return (
    <>
      <Header></Header>
      {/*    <h1>Cart {props.cart.length}</h1>
      <article>
        <section>
          {props.cart.map((cartItem) =>
            <OrderLine key={cartItem.photoId} cartItem={cartItem} />
          )
          }
        </section>
        <div>
        </div>
      </article> */}

      <div className="user-list w-full max-w-lg mx-auto bg-white rounded-xl shadow-xl flex flex-col py-4">
        <h1>Cart {props.cart.length}</h1>
        <div className="user-row flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#f6f8f9]">
          {props.cart.map((cartItem) => (
            <OrderLine
              key={cartItem.photoId}
              cartItem={cartItem}
              createOrder={props.createOrder}
            />
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
