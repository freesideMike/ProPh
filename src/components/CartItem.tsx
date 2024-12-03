import Cost from "./Cost";
import { Count } from "./Count";
import ItemText from "./ItemText";


const CartItem = () => {
  return (
    <>
      <article className="cartItem">
      <Count></Count>
      <ItemText></ItemText>
      <Cost></Cost>
      </article>
    </>
  );
};
export default CartItem;
