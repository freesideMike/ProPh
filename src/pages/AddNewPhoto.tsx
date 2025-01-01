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
  handleAddNewPhoto: () => void;
  supabase: any;
}

export const AddNewPhoto = (props: IAddNewPhotoProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const user = useUser();
  console.log(props);
  console.log(user?.id);
  console.log(props.url);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  /* const uploadImage = async () => {
    console.log("uploading image to storage");
    if (!props.url) {
      console.error("No file selected");
      return;
    }

    const { data, error } = await props.supabase.storage
      .from("photos") // the supabase bucket name
      .upload(user?.id + "/" + uuidv4(), props.url); // the unique user/filename, and the file
    console.log(user?.id);
    console.log(uuidv4());
    console.log(props.url);

    if (data) {
      // getAllPhotos();
      console.log("Image uploaded:", data);
      return data;
    } else {
      console.log(error);
    }
  }; */

  /* 

    smallMeasurements = "10 x 15 cm";
        mediumMeasurements = "30 x 45 cm";
        largeMeasurements = "60 x 90 cm";
        smallPrice = "5 kr";
        mediumPrice = "79 kr";
        largePrice = "399 kr";
      } else if (format === "Landscape") {
        smallMeasurements = "15 x 10 cm";
        mediumMeasurements = "45 x 30 cm";
        largeMeasurements = "90 x 60 cm";
        smallPrice = "5 kr";
        mediumPrice = "79 kr";
        largePrice = "399 kr";
      } else if (format === "Square") {
        smallMeasurements = "15 x 15 cm";
        mediumMeasurements = "45 x 45 cm";
        largeMeasurements = "60 x 60 cm";
        smallPrice = "10 kr";
        mediumPrice = "89 kr";
        largePrice = "299 kr";
      } else {
        smallMeasurements = "";
        mediumMeasurements = "";
        largeMeasurements = "";
        smallPrice = "";
        mediumPrice = "";
        largePrice = "";
      }

 */

  /*     if (format === "Portrait") {
      smallMeasurements = "10 x 15 cm";
      mediumMeasurements = "30 x 45 cm";
      largeMeasurements = "60 x 90 cm";
      smallPrice = "5 kr";
      mediumPrice = "79 kr";
      largePrice = "399 kr";
    } else if (format === "Landscape") {
      smallMeasurements = "15 x 10 cm";
      mediumMeasurements = "45 x 30 cm";
      largeMeasurements = "90 x 60 cm";
      smallPrice = "5 kr";
      mediumPrice = "79 kr";
      largePrice = "399 kr";
    } else if (format === "Square") {
      smallMeasurements = "15 x 15 cm";
      mediumMeasurements = "45 x 45 cm";
      largeMeasurements = "60 x 60 cm";
      smallPrice = "10 kr";
      mediumPrice = "89 kr";
      largePrice = "299 kr";
    } else {
      smallMeasurements = "";
      mediumMeasurements = "";
      largeMeasurements = "";
      smallPrice = "";
      mediumPrice = "";
      largePrice = "";
    } */

  return (
    <>
      <section className=" py-1 bg-blueGray-50">
        <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
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
                <article className="w-full lg:w-6/12 px-4">
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

                <article className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      ({"photo (.jpg)"}) {/* label for what photo to add */}
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
                {/*  <Formats
                    size="Small"
                    meauserments={smallMeasurements}
                    price={smallPrice}
                  />
                  <Formats
                    size="Medium"
                    meauserments={mediumMeasurements}
                    price={mediumPrice}
                  />
                  <Formats
                    size="Large"
                    meauserments={largeMeasurements}
                    price={largePrice}
                  /> */}
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />

              <button
                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={props.handleAddNewPhoto}
              >
                Upload to Gallery
              </button>
              {/*  </form> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
