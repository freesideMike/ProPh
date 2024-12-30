import { CartItem } from "../components/CartItem";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";


export const Cart = () => {
  return (
    <>
      <Header></Header>
      <h1>Cart</h1>
      <article>
        <section>
          <CartItem></CartItem>
        </section>
      </article>
      <Footer></Footer>
    </>
  );
};
