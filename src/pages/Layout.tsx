import { NavLink, Outlet } from "react-router-dom";
import "./../index.css";
import "./../styles/logo.css";
import "./../styles/layout.css";
import Logo from "../components/Logo";

export const Layout = () => {
  return (
    <>
      <header className="header">
        <article className="logo header-item left">
          <Logo />
        </article>

        <nav className="navigation header-item right">
          <ul>
            <li>
              <NavLink to={"/"}>Hem</NavLink>
            </li>
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
            <li>
              <NavLink to={"/mypage"}>MyPage</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <article className="footer">
        <footer> Stuff ... </footer>
      </article>
    </>
  );
};
