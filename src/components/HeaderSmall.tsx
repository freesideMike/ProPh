import { CartIcon } from "./CartIcon";
import { LogoSmall } from "./LogoSmall";

export const HeaderSmall = () => {
  return (
    <>
      <section className="h-8 sticky top-0 border-gray-800 z-10">
        <div className="flex  justify-between ">
          <section>
            <LogoSmall></LogoSmall>
          </section>
          <section>
            <CartIcon></CartIcon>
          </section>
        </div>
      </section>
    </>
  );
};
