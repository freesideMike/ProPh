import { NavLink, Outlet } from "react-router-dom";
import "./../index.css";
import "./../styles/layout.css";
import logoBig from "./../img/logoBig.png";

export const Layout = () => {
  return (
    <>
      <header className="header">
        <img src={logoBig} alt="Pro Ph logo" className="logo" />
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
      </header>
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
