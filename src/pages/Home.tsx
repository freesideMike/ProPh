import { IPhoto } from "../models/IPhoto";

import { Header } from "../components/Header";
import { PhotoCard } from "../components/PhotoCard";
import { Footer } from "../components/Footer";

interface IHomeProps {
  photos: IPhoto[];
}

export const Home = (props: IHomeProps) => {
  
  const activePage = "home";
  return (
    <>
      <section className=" bg-slate-50">
        <Header activePage={activePage}></Header>
        <article className="flex flex-wrap w-90% ">
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
