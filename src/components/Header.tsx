import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <>
      <section className="h-16 sticky top-0 bg-slate-200 border-gray-800 z-10">
        <article className="flex justify-between w-full">
          <section className="object-center">
            <Logo></Logo>
          </section>

          <ul className="flex flex-row justify-end w-full object-center">
            <li>
              <NavLink
                to={"/"}
                className={"mx-2 lg:mx-5 font-light lg:text-2xl"}
              >
                Log In / Admin
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/start"}
                className={"mx-2 lg:mx-5 font-light lg:text-2xl"}
              >
                Start
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={"mx-2 lg:mx-5 font-light lg:text-2xl"}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/cart"}
                className={"mx-2 lg:mx-5 font-light lg:text-2xl"}
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
};
