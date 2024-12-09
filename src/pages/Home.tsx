import { IPhoto } from "../models/IPhoto";

interface IHomeProps {
  photos: IPhoto[];
}

const Home: React.FC<IHomeProps> = ({ photos }) => {
  return (
    <>
      <article className="flex flex-wrap">
        {photos.map((photo) => (
          <section className="lg:w-1/3 sm:w-1/2 p-4">
            <img
              key={photo.id}
              src={photo.url}
              alt={photo.title}
              className="w-1/3 h-1/3 object-cover object-center"
            />
          </section>
        ))}
      </article>
    </>
  );
};
export default Home;
