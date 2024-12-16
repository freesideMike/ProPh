import { useNavigate } from "react-router-dom";
import logo from "./../img/logo.png";

export const LogoSmall = () => {
  const navigate = useNavigate();
  return (
    <>
      <section
        className="h-9"
        onClick={() => {
          navigate(`./../../`);
        }}
      >
        <img
          src={logo}
          alt="ProPh - Pro Photo Logo"
          className="w-8 m-1 mr-3 absolute"
        />
      </section>
    </>
  );
};
