import { useParams } from "react-router-dom";
import { IPhoto } from "../models/IPhoto";
import { HeaderSmall } from "../components/HeaderSmall";


interface IOnePhotoProps {
  photos: IPhoto[];
}

export const OnePhoto: React.FC<IOnePhotoProps> = ({ photos }) => {
  const photoId = useParams<{ id: string }>();
  const photoIdNumber = Number(photoId.id);
  const selectedPhoto = photos.find(
    (photography) => photography.id === photoIdNumber
  );

  if (!selectedPhoto) {
    return <div>Photo not found</div>;
  }

  const addToCart = () => {
    // Logic to add the selected photo to the cart
    console.log(`Added ${selectedPhoto.title} to cart`);
    // You can implement your cart logic here
  };

  return (
    <>
      <HeaderSmall></HeaderSmall>

      <div className="flex flex-col items-center justify-center min-h-screen  bg-slate-200">
        {/* -------- card -------- */}
        <div className="user-list w-full max-w-lg mx-auto bg-white rounded-xl shadow-xl flex flex-col">
          {/* -------- image -------- */}
          <section className="flex bg-slate-200  justify-center align-middle w-full">
            <img
              className="self-center justify-self-center w-full h-full object-contain"
              key={selectedPhoto.id}
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
            />
          </section>
          {/* -------- sizebuttons ------- */}
          <div className="flex flex-row justify-start my-4 mb-12 w-full">
            <div className=" ">
              <button
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
              </button>
            </div>
          </div>
          {/* ------ imagetitle ------- */}
          <section className="text-2xl font-mono border-y-2">
            <h3>{selectedPhoto.title}</h3>
          </section>

          <div className="user-row flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 ">
            <div className="user flex items-center text-center flex-col sm:flex-row sm:text-left">
              <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
                <div className="skills flex flex-col">
                  <span className="subtitle text-slate-600">
                    size x size cm
                  </span>
                  <span className="subtitle text-slate-600">Pris xxx kr</span>
                </div>
              </div>
            </div>

            <div className="user-option mx-auto sm:ml-auto sm:mr-0">
              <button
                className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-8 py-1.5 rounded-full text-base font-normal leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb]  hover:shadow-sm hover:shadow-violet-800 duration-300"
                type="button"
              >
                Köp
              </button>
            </div>
          </div>
        </div>

        <a
          className="show-more block m-2.5 mx-auto py-2.5 px-4 text-center no-underline rounded-full hover:border-slate-900 hover:border-2 font-medium duration-300"
          href="#/"
        >
          Back to Gallery
        </a>
      </div>
    </>
  );
};
