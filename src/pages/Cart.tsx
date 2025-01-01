import { useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { IOrder } from "../models/IOrder";
import { IPhoto } from "../models/IPhoto";
import { OrderLine } from "../components/OrderLine";

interface ICartProps {
  order: IOrder[];
  photos: IPhoto[];
}


export const Cart = (props: ICartProps) => {

  function orderline(value: IOrder, index: number, array: IOrder[]): unknown {
    throw new Error("Function not impleme</div>nted.");
  }

  return (
    <>
      <Header></Header>
      <h1>Cart</h1>
      <article>
        <section>
          {props.order.map((orderline) => 
            props.photos.map(photo => 
              photo.photoId === orderline.photoId && (
                <OrderLine key={orderline.photoId} orderline={orderline} />
              )
            )
          )}
        </section>
      </article>
      <Footer></Footer>
    </>
  );
};
