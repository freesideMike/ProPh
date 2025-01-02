import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { IPhoto } from "../models/IPhoto";
import { useState } from "react";
import { AddNewPhoto } from "./AddNewPhoto";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const supabaseUrl: string = import.meta.env.VITE_SUPABASE_URL!;

interface IAdminProps {
  photos: IPhoto[];
  email: string;
  changeIsActive: (id: number) => void;
  handleEmailInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /* getYourOwnPhotos: () => void; */
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

export const Admin = (props: IAdminProps) => {
  const user = useUser();
  /*   console.log(user); */
  const supabase = useSupabaseClient();
  console.log(props.email);

  const [showAddNewPhoto, setShowAddNewPhoto] = useState(false);

  /*   console.log(supabaseUrl + user?.id + props.photos[0].photoId); */
  // if not logged in --> go to loginpage
  //ändra detta state till ett props från photo-statet.
  const magicLinkLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email: props.email });
    if (error) {
      console.error(
        "Error logging in:",
        error.message
      ); /* make this into a nice message on the screen, or just an alert */
    } else {
      console.log(
        "Magic link has been sent to your email"
      ); /* make this into a nice message on the screen, or just an alert */
    }
  };

  const logOut = async () => {
    const { error } = await supabase.auth.signOut();
    console.log("logged out" + error);
  };

  const toggleShowAddNewPhoto = () => {
    setShowAddNewPhoto(!showAddNewPhoto);
  };
  const toggleEditPhoto = (photoId: number) => {
    console.log("edit photo" + photoId);
  };
  const doThePrintOut = () => {
    props.photos.map((photo) => {
      console.log(photo.userId, user?.id);
    });
  };
  doThePrintOut();
  /* const handleGetYourOwnPhotos = () => {
    if (!props.photos || props.photos.length === 0) {
      return <p>No photos available.</p>;
    }
    return props.photos.map((photo) => (
      <div
        key={photo.id}
        className="user-row flex flex-col items-center justify-between cursor-pointer p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#f6f8f9]"
      >
        <div className="user flex items-center text-center flex-col sm:flex-row sm:text-left">
          <div className="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
            <img
              className="avatar w-20 h-20"
              src={photo.url}
              alt={photo.title}
            />
          </div>
          <div className="skills flex flex-col">
            <span className="subtitle text-slate-500">{photo.title}</span>
          </div>
        </div>
        <div className="user-option mx-auto sm:ml-auto sm:mr-0">
          <div>
            <input
            type="checkbox"
            checked={photo.isActive}
            onChange={() => props.changeIsActive(photo.id)}
            />
            Show
          </div>
          <button
            className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300"
            type="button"
            >
            Edit
            </button>
            </div>
      </div>
      ));
  }; */

  return (
    <>
     
        <Header></Header>
    
      {user == null ? (
        <>
          {" "}
          {/* if not logged in, show login-field */}
          <section className=" py-1 bg-white">
            <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <article className="rounded-t bg-white mb-0 px-6 py-6">
                  <div className="">
                    <h6 className="text-blueGray-700 text-xl font-bold">
                      Enter your email
                    </h6>
                    <p className="text-blueGray-700 text-s">
                      Enter email to add your own photos
                    </p>
                  </div>
                </article>

                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <form>
                    <div className="flex flex-wrap">
                      <article className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                            E-mail
                          </label>
                          <input
                            type="email"
                            placeholder="enter your valid email"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={props.email}
                            onChange={props.handleEmailInput}
                          />
                        </div>
                      </article>
                    </div>
                    <button
                      className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={magicLinkLogin}
                    >
                      Get Magic Link
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          {" "}
          {/* if logged in, show your Gallery-admin */}
          <div className="flex flex-col items-center justify-center min-h-screen  bg-slate-50">
            <h1 className="my-10 font-medium text-3xl sm:text-4xl">
              My photos
            </h1>
            <div className="flex flex-row items-center justify-center">
              <h1 className="p-6">{user.email}</h1>

              <button
                className="bg-gray-300 text-[#6911e7] active:bg-gray-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md border-2 border-white focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={logOut}
              >
                logout
              </button>
            </div>

            <div className="user-list w-full max-w-lg mx-auto bg-white rounded-xl shadow-xl flex flex-col py-4">
              {props.photos
                .filter((photo) => user.id === photo.userId)
                .map((photo) => (
                  <>
                    <div
                      key={photo.photoId}
                      className="user-row flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#f6f8f9]"
                    >
                      <div className="user flex items-center text-center flex-col sm:flex-row sm:text-left">
                        <div className="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
                          <img
                            className="avatar w-20 h-20"
                            src={
                              supabaseUrl +
                              "/storage/v1/object/public/photoGallery/" +
                              photo.userId +
                              "/" +
                              photo.photoId
                            }
                          />
                        </div>

                        <div className="skills flex flex-col">
                          <span className="subtitle text-slate-500">
                            {photo.title}
                          </span>
                        </div>
                      </div>

                      <div className="user-option mx-auto sm:ml-auto sm:mr-0">
                        <div>
                          <input
                            type="checkbox"
                            checked={photo.isActive}
                            onChange={() => {
                              props.changeIsActive(photo.id);
                            }}
                          />
                          Show
                        </div>
                        <button
                          className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300"
                          type="button"
                          onClick={() => toggleEditPhoto(photo.id)}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                    <hr className="" />
                  </>
                ))}
              <hr className="w-85%" />
              <div className="user-option mx-auto">
                <button
                  className="btn m-6 inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300"
                  type="button"
                  onClick={toggleShowAddNewPhoto}
                >
                  Add new Photo
                </button>
              </div>
              {showAddNewPhoto && (
                <AddNewPhoto
                  changeIsActive={props.changeIsActive}
                  title={props.title}
                  titleChange={props.titleChange}
                  url={props.url}
                  urlChange={props.urlChange}
                  format={props.format}
                  formatChange={props.formatChange}
                  priceRange={props.priceRange}
                  priceRangeChange={props.priceRangeChange}
                  handleSubmit={props.handleSubmit}
                  handleAddNewPhoto={props.handleAddNewPhoto}
                  supabase={props.supabase}
                />
              )}
            </div>
            <a
              className="show-more block  mx-auto py-2.5 my-4 px-4 text-center no-underline rounded hover:border-2 hover:border-white  font-medium duration-300"
              href="#/"
            >
              Back to Gallery
            </a>
          </div>
        </>
      )}
      <Footer></Footer>
    </>
  );
};
