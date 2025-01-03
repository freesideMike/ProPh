import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";
import { useUser } from "@supabase/auth-helpers-react";

interface IHeaderProps {
activePage: string;
}

export const Header = () => {
  const user = useUser();
  
  return (
    <>
      <section className="h-16 sticky top-0  bg-slate-200 lg:bg-white border-[#6911e7] lgz-10 border-b-2">
        <article className="flex justify-between lg:flex-col lg:w-28 lg:mr-60 w-full ">
          <section className="object-center">
            <Logo></Logo>
          </section>

            <h1 className="hidden md:inline ml-10 m-auto text-xl font-bold lg:text-4xl">ProPhotography</h1>

          <ul className="flex flex-row lg:flex-col  lg:mr-60 justify-end w-full object-center">
            <li>
              <NavLink
                to={"/admin"}
                className={"mx-2 lg:mx-5 font-light lg:text-2xl "}
              >
                {user ? "Admin" : "Login"}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/"}
                className={"mx-2 lg:mx-5 font-light lg:text-2xl"}
              >
                Gallery
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to={"/about"}
                className={"mx-2 lg:mx-5 font-light lg:text-2xl"}
              >
                About
              </NavLink>
            </li> */}
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
