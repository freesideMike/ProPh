import { useParams } from "react-router-dom";
import { IPhoto } from "../models/IPhoto";

interface IOnePhotoProps {
  photos: IPhoto[];
}

const OnePhoto: React.FC<IOnePhotoProps> = ({ photos }) => {
  const photoId = useParams<{ id: string }>();
  console.log(photoId.id);

  const photoIdNumber = Number(photoId.id);

  const selectedPhoto = photos.find(
    (photography) => photography.id === photoIdNumber
  );

  if (!selectedPhoto) {
    return <div>Photo not found</div>;
  }
  return (
    <>
      <HeaderSmall></HeaderSmall>
      <article className="h-8 bg-blue-900">
        <h3>{selectedPhoto.title}</h3>
        <section className="w-11/12 h-4/5  object-contain object-center ">
          <img
            className=""
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
