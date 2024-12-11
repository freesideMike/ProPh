import { useParams } from "react-router-dom";
import { IPhoto } from "../models/IPhoto";
import { HeaderSmall } from "../components/HeaderSmall";
import { Button } from "../components/Button";

interface IOnePhotoProps {
  photos: IPhoto[];
}

export const OnePhoto: React.FC<IOnePhotoProps> = ({ photos }) => {
  const photoId = useParams<{ id: string }>();
  console.log(photoId.id);

  const photoIdNumber = Number(photoId.id);

  const selectedPhoto = photos.find(
    (photography) => photography.id === photoIdNumber
  );

  if (!selectedPhoto) {
    return <div>Photo not found</div>;
  }

  const addToCart = () => {
    // Logic to add the selected photo to the cart
    console.log(`Added ${selectedPhoto.title} to cart`);
    // You can implement your cart logic here
  };

  return (
    <>
      <HeaderSmall></HeaderSmall>
      <article>
        <section className="flex bg-slate-600  justify-center align-middle mt-8 w-full aspect-square">
          <img
            className="self-center justify-self-center w-full h-full object-contain"
            key={selectedPhoto.id}
            src={selectedPhoto.url}
            alt={selectedPhoto.title}
          />
        </section>
        <section className="text-2xl font-mono bg-purple-400">
          <h3>{selectedPhoto.title}</h3>
        </section>
        <section className="w-full">
          {selectedPhoto.versions.map((size) => (
            <ul className="flex flex-row justify-between m-4 align-bottom">
              <div className="flex flex-row object-left align-bottom">
                <li className="text-xl align-bottom ">{size.sizeName}</li>
                <li className=" align-bottom ms-2 font-semibold text-gray-500 dark:text-gray-400">
                  {size.size}
                </li>
              </div>
              <div className="flex flex-row object-right align-bottom">
                <li className="align-bottom"> {size.price + " kr"} </li>
                <li className="align-bottom">
                  <div>
                    <Button click={addToCart} children={"Köp"}></Button>
                  </div>
                </li>
              </div>
            </ul>
          ))}
        </section>
      </article>
    </>
  );
};
