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
  const total = props.cart.reduce((sum, cartItem) => {
    return sum + cartItem.price * cartItem.count;
  }, 0);

  return (
    <>
      <Header></Header>

      <section className=" py-1 bg-blueGray-50">
        <div className="flex flex-col items-center justify-center min-h-screen   bg-slate-50">
          <h1 className="my-10 font-medium text-3xl sm:text-4xl">My cart</h1>
          <div className="flex flex-row items-center justify-center"></div>
          <div className="user-list w-full max-w-lg mx-auto bg-white rounded-xl shadow-xl flex flex-col py-4">
            
            <div
              className="user-row flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-col
       sm:py-4 sm:px-8 hover:bg-[#f6f8f9]"
            >
              {props.cart.map((cartItem) => (
                <OrderLine
                  key={cartItem.photoId}
                  cartItem={cartItem}
                  photos={props.photos}
                  createOrder={props.createOrder}
                />
              ))}
            </div>
            <div className="flex flex-row items-center justify-between p-6 ml-60">
              <span>TOTAL: </span>
              <span>{total} kr </span>
            </div>
          </div>{" "}
        </div>

        <button
          className="btn m-6 inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300"
          type="button"
          onClick={props.createOrder}
        >
          Checkout
        </button>
      </section>
      <Footer></Footer>
    </>
  );
};
