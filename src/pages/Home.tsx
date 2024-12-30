import { IPhoto } from "../models/IPhoto";

import { Header } from "../components/Header";
import { PhotoCard } from "../components/PhotoCard";
import { Footer } from "../components/Footer";

interface IHomeProps {
  photos: IPhoto[];
}

export const Home= ( props: IHomeProps ) => {
  return (
    <>
      <section >
        <Header></Header>
        <article className="flex flex-wrap">
          {props.photos.map(
            (photo) =>
              photo.isActive && <PhotoCard key={photo.id} photo={photo} />
          )}
        </article>
      </section>
      <Footer></Footer>
    </>
  );
};
