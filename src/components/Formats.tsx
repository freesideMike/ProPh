import React from "react";

interface IFormatsProps {
  size: string;
  meauserments: string;
  price: string;
}

const Formats: React.FC<IFormatsProps> = ({ size, meauserments, price }) => {

  console.log(size)
  console.log(meauserments)
  console.log(price)

  return (
    <>
      <article className="w-full lg:w-4/12 px-4">
        <div className="relative w-full mb-3">
          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
            Size Name
          </label>
          <input
            type="email"
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            value={size}
          />
        </div>
      </article>
      <article className="w-full lg:w-4/12 px-4">
        <div className="relative w-full mb-3">
          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
            Size in centimeters
            {/* label for measurements */}
          </label>
          <input
            type="text"
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            value={meauserments}
          />
        </div>
      </article>
      <article className="w-full lg:w-4/12 px-4">
        <div className="relative w-full mb-3">
          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
            Price
          </label>
          <input
            type="text"
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            value={price}
          />
        </div>
      </article>
    </>
  );
};
export default Formats;
