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
        <section className="h-8 bg-purple-400">
          <h3>{selectedPhoto.title}</h3>
        </section>
        <section className="w-full aspect-square object-contain align-center justify-center">
          <img
            className=""
            key={selectedPhoto.id}
            src={selectedPhoto.url}
            alt={selectedPhoto.title}
          />
        </section>
        <section className="w-full">
          {selectedPhoto.versions.map((size) => (
            <ul className="flex flex-row justify-between m-4">
              <div className="flex flex-row object-left">
                <li> {size.sizeName} </li>
                <li> {size.size} </li>
              </div>
              <div className="flex flex-row object-right">
                <li> {size.price + " kr"} </li>
                <li>
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
