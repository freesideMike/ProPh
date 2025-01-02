import { useState } from "react";
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
}


export const Cart = (props: ICartProps) => {


  return (
    <>
      <Header></Header>
      <h1>Cart {props.cart.length}</h1>
      <article>
        <section>
          {props.cart.map((cartItem) =>
            <OrderLine key={cartItem.photoId} cartItem={cartItem} />
          )
          }
        </section>
        <div>
        </div>
      </article>
      <Footer></Footer>
    </>
  );
};
