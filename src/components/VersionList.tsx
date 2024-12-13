export const VersionList = () => {

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
        rel="stylesheet"
      />

      {/* <style>
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");
    body{
      font-family: "Roboto", sans-serif;
    }
</style> */}

      <div className="flex flex-col items-center justify-center min-h-screen p-16 bg-slate-200">
        <div className="flex flex-row justify-evenly w-full mb-4">

        <div className=" ">
          <button
            className="toggle-theme btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded-full text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300"
            type="button"
            >
            Small
          </button>
        </div>{" "}
        <div className="">
          <button
            className="toggle-theme btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded-full text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300"
            type="button"
            >
            Medium
          </button>
        </div>
        <div className="">
          <button
            className="toggle-theme btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded-full text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300"
            type="button"
            >
            Large
          </button>
        </div>
            </div>
        <div className="user-list w-full max-w-lg mx-auto bg-white rounded-xl shadow-xl flex flex-col py-4">
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
                className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-8 py-1.5 rounded-full text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb]  hover:shadow-sm hover:shadow-violet-800 duration-300"
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
}