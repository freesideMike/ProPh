import { useParams } from "react-router-dom";
import { IPhoto } from "../models/IPhoto";

interface IOnePhotoProps {
  photos: IPhoto[];
}

const OnePhoto: React.FC<IOnePhotoProps> = ({ photos }) => {

  const photoId = Number(useParams<{ photoId: string }>());

  const selectedPhoto = photos.find(p => p.id == photoId);

   if (!selectedPhoto) {
     return <div>Photo not found</div>;
   }

  return (
    <>
      <article className="displayingOnePhoto">
        <h3>{selectedPhoto.title}</h3>
        <section >
          <img key={selectedPhoto.id} src={selectedPhoto.url} alt={selectedPhoto.title} className="onePhoto" />
        </section>
      </article>
    </>
  );
};
export default OnePhoto;
