import { NavLink, Outlet } from "react-router-dom";
import "./../index.css";
import { Header } from "../components/Header";

export const Layout = () => {
  return (
    <>
     <Header></Header>
        <nav className="">
          <hr />
        <ul className="flex flex-row justify-evenly">
            <li>
              <NavLink to={"/"}>Hem</NavLink>
            </li>
            <li>
              <NavLink to={"/onephoto"}>One Photo</NavLink>
            </li>
            <li>
              <NavLink to={"/cart"}>Cart</NavLink>
          </li>
          </ul>
          <hr />
        </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>
        POWERED by
        Mikael Cardaba
        </p>
        <p>
        </p>
      </footer>
    </>
  );
};
