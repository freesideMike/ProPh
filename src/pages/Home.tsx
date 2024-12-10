import { IPhoto } from "../models/IPhoto";
import PhotoCard from "../components/PhotoCard";

interface IHomeProps {
  photos: IPhoto[];
}

const Home: React.FC<IHomeProps> = ({ photos }) => {
  return (
    <>
      <section className="flex flex-wrap">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </section>
    </>
  );
};

export default Home;
