import { IOrder } from "../models/IOrder";
import { Cost } from "./Cost";
import { Count } from "./Count";
import { ItemText } from "./ItemText";

interface IOrderLineProps {
  orderline: IOrder;
}

export const OrderLine = (props: IOrderLineProps) => {
  return (
    <>
      <article className="cartItem">
        <section>
        <h4>{props.orderline.photoName}</h4>
        </section>

        <section>
        <p>{props.orderline.count} st</p>
        <p>{props.orderline.size} cm</p>
        <p>{props.orderline.price}</p>
          <p>{(props.orderline.count * props.orderline.price).toFixed(2)}</p>
        </section>
        <section>
          <p>-</p>
          <p>+</p>
        </section>
      </article>
    </>
  );
};

