import { useNavigate } from "react-router-dom";
/* import { IVersions } from "../models/IVersions"; */
import { IPhoto } from "../models/IPhoto";

interface IPhotoCardProps {
  photo: IPhoto;
  /*   id: number;
  title: string;
  versions: IVersions;
  times_opened: number;
  times_ordered: number;
  url: string;
  created_at: number;
  updated_at: number; */
}

const PhotoCard: React.FC<IPhotoCardProps> = ({ photo }) => {
  const navigate = useNavigate();

  /*   const errorImgSrc = (ev: React.SyntheticEvent<HTMLImageElement, Event>) => {
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
