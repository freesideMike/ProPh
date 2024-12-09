import { IPhoto } from "../models/IPhoto";

interface IHomeProps {
  photos: IPhoto[];
}

const Home: React.FC<IHomeProps> = ({ photos }) => {
  return (
    <>
      <article className="flex flex-wrap">
        {photos.map((photo) => (
          <section className="w-1/2 ">
            <img
              key={photo.id}
              src={photo.url}
              alt={photo.title}
              className="aspect-square object-cover object-center"
            />
          </section>
        ))}
      </article>
    </>
  );
};
export default Home;
