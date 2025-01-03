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
  addCount: (photoId: number, size: string) => void;
  subtractCount: (photoId: number, size: string) => void;
}

export const OrderLine = (props: IOrderLineProps) => {
  const currentPhoto: IPhoto =
    props.photos.find((photo) => photo.id === props.cartItem.photoId) ??
    ({} as IPhoto);

  return (
    <>
      {/* container */}
      <div className=" w-full flex items-center text-center flex-col  sm:text-left">
        {/* top container */}
        <div className="  w-full flex items-center text-center flex-row sm:text-left">
          {/* image contanier */}
          <div className="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
            {
              <img
                className="avatar w-20 h-20"
                src={
                  supabaseUrl +
                  "/storage/v1/object/public/photoGallery/" +
                  currentPhoto.userId +
                  "/" +
                  currentPhoto?.photoId
                }
              />
            }
          </div>

          {/* text container */}
          <div className=" w-full flex flex-col">
            {/* title */}
            <span className="text-2xl uppercase text-left mx-4 font-mono text-slate-500">
              {currentPhoto.title}
            </span>
            {/* size */}
            <span>
              <p className="text-md text-left mx-4">{props.cartItem.size} cm</p>
            </span>
          </div>
        </div>

        {/* bottom container */}
        <div className="w-full my-2 flex flex-row justify-between align-middle">
          {/* count */}
          <div className="flex  w-full flex-row align-middle">
            <span className="flex flex-row">
              <p
                className="m-2"
                onClick={() =>
                  props.subtractCount(props.cartItem.photoId, props.cartItem.size)
                }
              >
                -
              </p>
              <p className="p-2 border-slate-500 border-2 justify-center align-middle">
                {props.cartItem.count}
              </p>
              <p
                className="m-2"
                onClick={() =>
                  props.addCount(props.cartItem.photoId, props.cartItem.size)
                }
              >
                +
              </p>
            </span>
          </div>
          {/* price */}
          <div className="align-middle flex flex-row w-full justify-between m-2 ml-8">
            <span>
              <p> {props.cartItem.price} kr</p>
            </span>
            <span className="justify-self-end">
              <p>sum: {props.cartItem.price * props.cartItem.count} kr</p>
            </span>
          </div>
        </div>
      </div>

      <div className="border-b-2 border-slate-100 my-2 w-full"></div>
      <div className="user-option mx-auto">
        <hr className="w-full  " />
      </div>
    </>
  );
};
