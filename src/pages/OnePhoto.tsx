import { useParams } from "react-router-dom";
import { IPhoto } from "../models/IPhoto";

interface IOnePhotoProps {
  photos: IPhoto[];
}

/*

Seems like i cant get the useParams to work


console.log(useParams());

const photoId = Number(urlId);
const selectedPhoto = photos.find((p) => p.id == photoId);
console.log({ urlId });
*/
const OnePhoto: React.FC<IOnePhotoProps> = ({ photos }) => {
  const photoId = useParams<{ id: string }>();
  console.log(photoId.id);
  
  
  const photoIdNumber = Number(photoId.id);
console.log(photoIdNumber);
  /* 
  const urlId = photoId.id; */
  const selectedPhoto = photos.find(
    (photography) => photography.id === photoIdNumber
  );

  if (!selectedPhoto) {
    return <div>Photo not found</div>;
  }
  return (
    <>
      <article className="h-8 bg-blue-900">
        <h3>{selectedPhoto.title}</h3>
        <section>
          <img
            key={selectedPhoto.id}
            src={selectedPhoto.url}
            alt={selectedPhoto.title}
          />
        </section>
      </article>
    </>
  );
};
export default OnePhoto;
