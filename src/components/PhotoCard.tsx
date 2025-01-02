import { useNavigate } from "react-router-dom";
import { IPhoto } from "../models/IPhoto";
import { supabaseUrl } from "../App";
interface IPhotoCardProps {
  photo: IPhoto;
  key: number;
}

export const PhotoCard = (props: IPhotoCardProps) => {
  const navigate = useNavigate();

  /*  try to make this notFoundImage in another way or maybe make it not show at all when no image could be found.
  
  const errorImgSrc = (ev: React.SyntheticEvent<HTMLImageElement, Event>) => {
    ev.currentTarget.src = "/notFound.png"; */
  console.log(
    supabaseUrl +
      "/storage/v1/object/public/photoGallery/" +
      props.photo.userId +
      "/" +
      props.photo.photoId
  );
  
  const random: number = (Math.random()*6)-3;
  console.log(random);


  return (
    <>
      <article
        className="w-6/12 md:w-4/12 lg:3/12 h-1/3 p-2 bg-white border-white border-2 md:border-4 lg:border-6 xl:border-8  cursor-pointer"
        style={{ transform: `rotate(${random}deg) `, transition: 'transform 2s' }}
      
        onClick={() => {
          navigate(`./onephoto/${props.photo.id}`);
        }}
      >
        <img
          key={props.photo.id}
          src={
        supabaseUrl +
        "/storage/v1/object/public/photoGallery/" +
        props.photo.userId + "/" +
        props.photo.photoId
          }
          alt={props.photo.title}
          className="aspect-square object-cover object-center border-"
        />
      </article>
    </>
  );
};
