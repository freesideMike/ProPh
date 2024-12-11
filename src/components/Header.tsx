import { CartIcon } from "./CartIcon";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <>
      <section className="h-32 sticky top-0 border-gray-800 z-10">
        <article className="flex justify-between ">
          <section>
            <Logo></Logo>
          </section>
          <section>
            <CartIcon></CartIcon>
          </section>
        </article>
      </section>
    </>
  );
};
