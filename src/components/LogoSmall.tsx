import logo from "./../img/logo.png";

export const LogoSmall = () => {
  return (
    <>
      <section className="h-9">
        <img
          src={logo}
          alt="ProPh - Pro Photo Logo"
          className="w-8 m-1 mr-3 absolute"
        />
      </section>
    </>
  );
};
