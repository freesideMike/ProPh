import logo from "./../img/logo.png";

export const LogoSmall = () => {
  return (
    <>
      <section className="h-8">
        <img
          src={logo}
          alt="ProPh - Pro Photo Logo"
          className="w-5 m-1 mr-2 absolute top-1 left-2"
        />
      </section>
    </>
  );
};
