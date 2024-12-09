import { CartIcon } from "./CartIcon";
import Logo from "./Logo";

export const Header = () => {
  return (
    <>
      <article className="flex justify-between ">
        <section>
          <Logo></Logo>
        </section>
        <section  >
          <CartIcon></CartIcon>
        </section>
        <section className="h-32 sticky top-0 bg-red-500 border-gray-800 z-10"></section>
      </article>
    </>
  );
};
