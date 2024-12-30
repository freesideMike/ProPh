import { LogoSmall } from "./LogoSmall";

export const HeaderSmall = () => {
  return (
    <>
      <section className="bg-white h-11 shadow-md shadow-slate-600 sticky top-0 border-gray-800 z-10">
        <div className="flex  justify-between ">
          <section>
            <LogoSmall />
          </section>
          <section className="">
            <ul className="flex flex-row">
              <li className="m-2">Start</li>
              <li className="m-2">Gallery</li>
              <li className="m-2">Cart</li>
            </ul>
          </section>
        </div>
      </section>
    </>
  );
};
