import { CartIcon } from "./CartIcon";
import LogoSmall from "./LogoSmall";

export const HeaderSmall = () => {
  return (
    <>
      <article className="flex justify-between ">
        <section>
          <LogoSmall></LogoSmall>
        </section>
        <section  >
          <CartIcon></CartIcon>
        </section>
        <section className="h-22 sticky top-0 bg-red-500 border-gray-800 z-10"></section>
      </article>
    </>
  );
};
