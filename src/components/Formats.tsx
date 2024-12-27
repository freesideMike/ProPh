interface IFormatsProps {
  size: string;
  meauserments: string;
  price: string;
}

const Formats = ( props: IFormatsProps) => {

  console.log(props.size)
  console.log(props.meauserments);
  console.log(props.price);

  return (
    <>
     
      <article className="w-full lg:w-6/12 px-4">
        <div className="relative w-full mb-3">
          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
            Size
            {/* label for measurements */}
          </label>
          <input
            type="text"
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            value={props.meauserments}
          />
        </div>
      </article>
      <article className="w-full lg:w-6/12 px-4">
        <div className="relative w-full mb-3">
          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
            Price
          </label>
          <input
            type="text"
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            value={props.price}
          />
        </div>
      </article>
    </>
  );
};
export default Formats;
