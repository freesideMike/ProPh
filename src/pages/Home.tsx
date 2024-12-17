import { IPhoto } from "../models/IPhoto";

import { Header } from "../components/Header";
import { PhotoCard } from "../components/PhotoCard";

interface IHomeProps {
  photos: IPhoto[];
}

export const Home: React.FC<IHomeProps> = ({ photos }) => {
  return (
    <>
      <section>
        <Header></Header>
        <article className="flex flex-wrap">
          {photos.map(
            (photo) =>
              photo.isActive && <PhotoCard key={photo.id} photo={photo} />
          )}
        </article>
      </section>
    </>
  );
};
