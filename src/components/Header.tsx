import { Cartwheel } from "./Cartwheel";
import Logo from "./Logo";

export const Header = () => {
  return (
    <>
      <article className="w-11/12">
        <section>
          <Logo></Logo>
        </section>
        <section>
          <Cartwheel></Cartwheel>
        </section>
      </article>
    </>
  );
};
