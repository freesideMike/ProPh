import { NavLink, Outlet } from "react-router-dom";
import "./../index.css";
import { Header } from "../components/Header";

export const Layout = () => {
  return (
    <>
     <Header></Header>
        <nav className="navigation header-item right">
          <ul>
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
