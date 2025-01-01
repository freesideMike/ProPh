import { useParams } from "react-router-dom";
import { IPhoto } from "../models/IPhoto";
import { HeaderSmall } from "../components/HeaderSmall";
import { ChangeEvent, useState } from "react";
import { supabaseUrl } from "../App";
import { Header } from "../components/Header";
import { getSizePrice } from "../service/getSizePrice";
interface IOnePhotoProps {
  photos: IPhoto[];
}

export const OnePhoto = (props: IOnePhotoProps) => {
  const [price, setPrice] = useState<number>(0);
  const [size, setSize] = useState("");

  const photoId = useParams<{ id: string }>();
  const photoIdNumber = Number(photoId.id);
  const selectedPhoto = props.photos.find(
    (photography) => photography.id === photoIdNumber
  );

  if (!selectedPhoto) {
    return <div>Photo not found</div>;
  }

  const getSizePriceData = (format: string, priceRange: string) => {
    const data = getSizePrice(format, priceRange);
    console.log(data);
    return data;
  };

  const handleSizeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newSize = e.target.value;
    setSize(newSize);
    findPrice(newSize);
  };

  const findPrice = (newSize: string) => {
    const format = selectedPhoto.format;
    const priceRange = selectedPhoto.priceRange;
    const data = getSizePriceData(format, priceRange);
    const price = data?.find((response) => response.size === newSize)?.price;
    setPrice(Number(price));
  };

  const addToCart = () => {
    // Logic to add the selected photo to the cart
    console.log(`Added ${selectedPhoto.title} to cart`);
    // You can implement your cart logic here
  };

  return (
    <>
      <Header></Header>

      <div className="flex flex-col items-center justify-center min-h-screen ">
        {/* -------- card -------- */}

        <div className="user-list w-full md:w-10/12 xl:w-8/12 mx-auto bg-white rounded-xl shadow-xl flex flex-col">
          {/* -------- image -------- */}
          <section className="flex bg-slate-200  justify-center align-middle w-full">
            <img
              className="self-center justify-self-center w-full h-full object-contain"
              key={selectedPhoto.id}
              src={`${supabaseUrl}/storage/v1/object/public/photoGallery/${selectedPhoto.userId}/${selectedPhoto.photoId}`}
              alt={selectedPhoto.title}
            />
          </section>
          {/* -------- sizebuttons ------- */}
          <div className="flex flex-row justify-start my-4 mb-12 w-full">
            <div className=" ">
              {/* skapa en input där man har bildens mått att välja på men som inte ser ut som en inputruta, bara en skrolllista */}
              {/*    <select
                value={activeSize ? activeSize : "choose your size"}
                onChange={handleSizeChange}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              >
                <option value="" disabled>
                  Select a pricerange
                </option> */}

              {/*  {selectedPhoto.versions.map((version, i) => (
                  <option key={i} value={version.toString()}>
                    {version.size} cm
                  </option>
                ))} */}
              {/*  </select> */}
              {/*    <h4 className="ml-4 lg:text-lg  xl:text-2xl">
                choose your size
                {/* {console.log(selectedPhoto.versions)} 
              </h4> */}
              {/*      {selectedPhoto.versions? (
                  <span>{selectedPhoto.prices[activeSiize]} kr</span>
                ) : (
                  <span>Price not available</span>
                )} */}

              {/*       <button
                className="toggle-theme mx-2 btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-5 py-1 rounded-full text-base font-normal leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300"
                type="button"
              >
                Small
              </button>
            </div>{" "}
            <div className="">
              <button
                className="toggle-theme  mx-2 btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-5 py-1 rounded-full text-base font-normal leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300"
                type="button"
              >
                Medium
              </button>
            </div>
            <div className="">
              <button
                className="toggle-theme mx-2 btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-5 py-1 rounded-full text-base font-normal leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300"
                type="button"
              >
                Large
              </button> */}
            </div>
          </div>
          {/* ------ imagetitle ------- */}
          <section className="text-2xl font-mono border-y-2">
            <h3 className="my-2 mx-4">{selectedPhoto.title}</h3>
          </section>

          <div className="user-row flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 ">
            <div className="user flex items-center text-center flex-col sm:flex-row sm:text-left">
              <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
                <div className="skills flex flex-col">
                  <select
                    value={size}
                    onChange={(e) => {
                      handleSizeChange(e);
                    }}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  >
                    <option value="" disabled>
                      Choose size
                    </option>
                    {getSizePriceData(
                      selectedPhoto.format,
                      selectedPhoto.priceRange
                    )?.map((response) => (
                      <option key={response.size} value={response.size}>
                        {response.size}
                      </option>
                    ))}
                  </select>
                  <span className="subtitle text-slate-600 lg:text-lg xl:text-xl my-4">
                    {price == 0
                      ? "Choose size to get the price"
                      : `Price: ${price} kr`}
                  </span>
                </div>
              </div>
            </div>

            <div className="user-option mx-auto sm:ml-auto sm:mr-0">
              <button
                className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-8 py-1.5 rounded-full text-base font-normal leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb]  hover:shadow-sm hover:shadow-violet-800 duration-300"
                type="button"
              >
                Buy
              </button>
            </div>
          </div>
        </div>

        <a
          className="show-more block m-2.5 mx-auto py-2.5 px-4 text-center text-slate-800 no-underline rounded-full hover:border-slate-500 hover:border-2 font-medium duration-300"
          href="/"
          onClick={addToCart}
        >
          Back to Gallery
        </a>
      </div>
    </>
  );
};
