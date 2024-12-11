import { NavLink, Outlet } from "react-router-dom";
import "./../index.css";

export const Layout = () => {
  return (
    <>
      <nav className="">
        <hr />
        <ul className="flex flex-row justify-evenly">
          <li>
            <NavLink to={"/"}>Hem</NavLink>
          </li>
          <li>
            <NavLink to={"/onePhoto/:id"} >One Photo</NavLink>
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
        <p>POWERED by Mikael Cardaba</p>
        <p></p>
      </footer>
    </>
  );
};
