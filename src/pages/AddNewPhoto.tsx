import { useUser } from "@supabase/auth-helpers-react";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface IAddNewPhotoProps {
  changeIsActive: (id: number) => void;
  /*  uploadImage: (file: File) => void; */
  title: string;
  titleChange: (value: string) => void;
  url: File | undefined;
  urlChange: (value: File) => void;
  format: string;
  formatChange: (value: string) => void;
  priceRange: string;
  priceRangeChange: (value: string) => void;
  handleSubmit: () => void;
  toggleShowAddNewPhoto: () => void;
  handleAddNewPhoto: () => void;
  supabase: any;
}

export const AddNewPhoto = (props: IAddNewPhotoProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const user = useUser();
 

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("testar om handleTitleChange funkar");
    props.titleChange(String(e.target.value));
  };
  const handleUrlChange = (file: File) => {
    props.urlChange(file);
  };

  const handleFormatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.formatChange(String(e.target.value));
  };
  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.priceRangeChange(String(e.target.value));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]); // Set the selected file
    }
  };

  const handleUploadClick = async () => {
    props.handleAddNewPhoto();
    props.toggleShowAddNewPhoto()
   /*  alert(`A new photo added to gallery`); */

    };
    
  



  return (
    <>
      <section className=" py-1 bg-blueGray-50">
        <div className="w-full md:w-10/12 lg:8/12 px-4 mx-auto mt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <article className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Add New Photo
                </h6>
              </div>
            </article>

            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              {/*  <form onSubmit={(e) => handleSubmit(e)}> */}
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Photo Information
              </h6>
              <div className="flex flex-wrap">
                <article className="w-full px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      title="Add a title of the photo you want to dispaly in the gallery"
                      value={props.title}
                      onChange={(e) => {
                        handleTitleChange(e);
                      }}
                    />
                  </div>
                </article>

                <article className="w-full  px-4">
                  <div className="relative w-full mb-3">
                    <label className="block  text-blueGray-600 text-xs font-bold mb-2">
                      PHOTO (.jpg)
                    </label>
                    <input
                      type="file"
                      accept=".jpg"
                      onChange={(e) => {
                        const file = e.target.files && e.target.files[0];
                        if (file) {
                          console.log(file);
                          handleUrlChange(file);
                        }
                      }}
                      required
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </article>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Format and Price
              </h6>

              <div className="flex flex-wrap">
                <article className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Format
                    </label>
                    <select
                      value={props.format}
                      onChange={(e) => {
                        handleFormatChange(e);
                      }}
                    >
                      <option value="" disabled>
                        Select a format
                      </option>
                      <option value="Portrait">Portrait</option>
                      <option value="Landscape">Landscape</option>
                      <option value="Square">Square</option>
                    </select>
                  </div>
                </article>
                <article className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Pricerange
                    </label>
                    <select
                      value={props.priceRange}
                      onChange={(e) => {
                        handlePriceRangeChange(e);
                      }}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option value="" disabled>
                        Select a pricerange
                      </option>
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                  </div>
                </article>
              </div>

              <hr className="my-6 border-b-1 border-blueGray-300" />
              <div className="flex justify-center">
                <button
                  className="btn m-6 inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300"
                  type="button"
                  onClick={handleUploadClick}
                >
                  Upload to Gallery
                </button>
                {/*  </form> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
