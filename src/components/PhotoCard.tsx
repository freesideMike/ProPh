import { useNavigate } from "react-router-dom";
import { IPhoto } from "../models/IPhoto";
import { supabaseUrl } from "../App";
interface IPhotoCardProps {
  photo: IPhoto;
  key: number;
}

export const PhotoCard = (props: IPhotoCardProps) => {
  const navigate = useNavigate();

  const random: number = (Math.random()*6)-3;
 
  return (
    <>
      <article
        className="w-6/12 md:w-4/12 lg:3/12  p-2 bg-white border-white border-2 md:border-4 lg:border-6 xl:border-8"
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
          className="aspect-square object-cover object-center"
        />
      </article>
    </>
  );
};
