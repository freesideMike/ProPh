import { ICart } from "../models/ICart";
import { IOrder } from "../models/IOrder";
import { Cost } from "./Cost";
import { Count } from "./Count";
import { ItemText } from "./ItemText";

interface IOrderLineProps {
  cartItem: ICart;
}

export const OrderLine = (props: IOrderLineProps) => {
  return (
    <>
      <article className="cartItem">
        <section>
        <h4 className="m-15">{props.cartItem.photoName}</h4>
        </section>

        <section>
        <p>{props.cartItem.count} st</p>
        <p>{props.cartItem.size} cm</p>
        <p>{props.cartItem.price}</p>
          <p>{(props.cartItem.count * props.cartItem.price).toFixed(2)}</p>
        </section>
        <section>
          <p>-</p>
          <p>+</p>
        </section>
      </article>
    </>
  );
};

