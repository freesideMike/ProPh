import { useNavigate } from "react-router-dom";
import { IPhoto } from "../models/IPhoto";

interface IPhotoCardProps {
  photo: IPhoto;
}

const PhotoCard: React.FC<IPhotoCardProps> = ({ photo }) => {
  const navigate = useNavigate();

  /*  try to make this notFoundImage in another way or maybe make it not show at all when no image could be found.
  
  const errorImgSrc = (ev: React.SyntheticEvent<HTMLImageElement, Event>) => {
    ev.currentTarget.src = "/notFound.png"; */

  return (
    <>
      <article
        className="w-1/3"
        onClick={() => {
          navigate(`./onephoto/${photo.id}`);
        }}
      >
        <img
          key={photo.id}
          src={photo.url}
          alt={photo.title}
          className="aspect-square object-cover object-center"
        />
      </article>
    </>
  );
};

export default PhotoCard;
