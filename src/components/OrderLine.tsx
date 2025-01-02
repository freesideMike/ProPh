import { supabaseUrl } from "../App";
import { ICart } from "../models/ICart";
import { IPhoto } from "../models/IPhoto";
/* import { IOrder } from "../models/IOrder";
import { Cost } from "./Cost";
import { Count } from "./Count";
import { ItemText } from "./ItemText"; */

interface IOrderLineProps {
  cartItem: ICart;
  photos: IPhoto[];
  createOrder: () => void;
}

export const OrderLine = (props: IOrderLineProps) => {

  const currentPhoto: IPhoto = props.photos.find((photo) => photo.id === props.cartItem.photoId) ?? {} as IPhoto;

  

  return (
    <>
      <div className="user w-full flex items-center text-center flex-col sm:flex-row sm:text-left">
         <div className="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
                         {  <img
                            className="avatar w-20 h-20"
                            src={
                              supabaseUrl  +
                              "/storage/v1/object/public/photoGallery/" +
                              currentPhoto.userId +
                              "/" +
                              currentPhoto?.photoId
                            }
                          /> }
                        </div>

        <div className="skills flex flex-col">
          <span className="subtitle text-slate-500">
            {currentPhoto.title}
          </span>
          <span>
            {" "}
            <p>{props.cartItem.size} cm</p>
          </span>
          <span>

            <p>{props.cartItem.price}</p>
          </span>
        </div>
      </div>

      <div className="user-option mx-auto sm:ml-auto sm:mr-0">
        <div> {props.cartItem.count} st</div>
        {/*          <input
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
              </button>  */}
      </div>

    
      <div className="user-option mx-auto">
      
      <hr className="w-full" />
      </div>
      {/*  {showAddNewPhoto && (
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
          /> */}
    </>
  );
};



/* 
      <article className="cartItem">
        <section>
        <h4 className="m-15">{props.cartItem.photoName}</h4>
        </section>

        <section>
        <p>{props.cartItem.count} st</p>
        <p>{props.cartItem.size} cm</p>
        <p>{props.cartItem.price}</p>
          <p>{(props.cartItem.count * props.cartItem.price).toFixed(2)}</p>
        </section>
        <section>
          <p>-</p>
          <p>+</p>
        </section>
      </article> */