import { IPhoto } from "../models/IPhoto";

interface IAdminProps {
  photos: IPhoto[];
  changeIsActive: (id: number) => void;
}

export const Admin: React.FC<IAdminProps> = ({ photos, changeIsActive }) => {
 

  

  // if not logged in --> go to loginpage
  //ändra detta state till ett props från photo-statet.

  return (
    <>
      <h1>Hej dittAnvändarnamn</h1>

      {/* visa alla bilder som en lista
    använd samma som för visa ett foto.
    
    liten bild, titel, active as checkbox, addButton for update 
    
    klicka på update för att ändra
    
    klicka på checkbox för att bilden skall visas i galleri eller inte 
    
    update kanske kan öppnas mitt i listan?    
    
    */}

      <div className="flex flex-col items-center justify-center min-h-screen  bg-slate-200">
        <h1 className="my-10 font-medium text-3xl sm:text-4xl">My photos</h1>

        <div className="user-list w-full max-w-lg mx-auto bg-white rounded-xl shadow-xl flex flex-col py-4">
          {photos.map((photo) => (
            <>
              <div className="user-row flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#f6f8f9]">
                <div className="user flex items-center text-center flex-col sm:flex-row sm:text-left">
                  <div className="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
                    <img className="avatar w-20 h-20" src={photo.url} />
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
                      onChange={() => { changeIsActive(photo.id) }}
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
            </>
          ))}

          <div className="user-option mx-auto">
            <button
              className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300"
              type="button"
            >
              Add new Photo
            </button>
          </div>
        </div>
        <a
          className="show-more block  mx-auto py-2.5 my-4 px-4 text-center no-underline rounded hover:border-2 hover:border-white  font-medium duration-300"
          href="#/"
        >
          Back to Gallery
        </a>
      </div>
    </>
  );
};
