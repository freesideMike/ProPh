import { ICart } from "../models/ICart";
/* import { IOrder } from "../models/IOrder";
import { Cost } from "./Cost";
import { Count } from "./Count";
import { ItemText } from "./ItemText"; */

interface IOrderLineProps {
  cartItem: ICart;
  createOrder: () => void;
}

export const OrderLine = (props: IOrderLineProps) => {
 
  return (
    <>
      <div className="user flex items-center text-center flex-col sm:flex-row sm:text-left">
        {/*  <div className="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
                         {  <img
                            className="avatar w-20 h-20"
                            src={
                              supabaseUrl +
                              "/storage/v1/object/public/photoGallery/" +
                              photo.userId +
                              "/" +
                              photo.photoId
                            }
                          /> }
                        </div> */}

        <div className="skills flex flex-col">
          <span className="subtitle text-slate-500">
            {props.cartItem.photoName}
          </span>
        </div>
      </div>
      
     <div className="user-option mx-auto sm:ml-auto sm:mr-0">
              <div>  {props.cartItem.count} st</div>
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
          
      <hr className="" />
      <hr className="w-85%" />
      <div className="user-option mx-auto">
        <button
          className="btn m-6 inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300"
          type="button"
          onClick={props.createOrder}
        >
          Checkout
        </button>
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