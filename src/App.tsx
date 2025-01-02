import "./App.css";
import { RouterProvider } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
/* import { createClient } from "@supabase/supabase-js"; */
import router from "./Router";
import { IPhoto } from "./models/IPhoto";
import { IVersions } from "./models/IVersions";
import { v4 as uuidv4 } from "uuid";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { createClient } from "@supabase/supabase-js";
import { IOrder } from "./models/IOrder";
import { InferCreationAttributes } from "sequelize";
import { ICart } from "./models/ICart";

export const supabaseUrl: string = import.meta.env.VITE_SUPABASE_URL!;
const supabaseKey: string = import.meta.env.VITE_SUPABASE_KEY!;
/* const supabaseAPIKey: string = import.meta.env.VITE_SUPABASE_API_KEY!; */

const supabase = createClient(supabaseUrl, supabaseKey);
/* const supabaseDb = createClient(supabaseUrl, supabaseAPIKey); */

const App = () => {
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [email, setEmail] = useState<string>("");
  const [order, setOrder] = useState<IOrder[]>([]);
  /* temporary states for adding new photo */
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState<File>();
  const [format, setFormat] = useState("portrait");
  const [priceRange, setPriceRange] = useState("Low");
  const [cart, setCart] = useState<ICart[]>([]);
  const user = useUser();
  useEffect(() => {
    getAllPhotos();
  }, []);

  console.log(photos);
  console.log(cart);
  console.log(cart.length);

  const titleChange = (value: string) => {
    setTitle(value);
  };
  const urlChange = (value: File) => {
    setUrl(value);
  };
  const formatChange = (value: string) => {
    setFormat(value);
  };

  const priceRangeChange = (value: string) => {
    setPriceRange(value);
  };

  // get photos from database into photos-state
  const getAllPhotos = async () => {
    const { data, error } = await supabase.from("PhotoGallery").select();
    if (error) {
      console.error("Error fetching photos:", error);
    } else {
      if (data) {
        console.log("Photos fetched:", data);
        setPhotos(data);

        /*         getPhotosFromDb(data[0].name);
         */
      }
    }
  };

  const getPhotosFromDb = async (photoId: string) => {
    const currentPhoto = photos.find((photo) => photo.photoId === photoId);
    const { data, error } = await supabase
      .from("photoGallery")
      .insert([
        {
          userId: user?.id,
          photoId: photoId,
          photoName: currentPhoto?.title,
          format: format,
          priceRange: priceRange,
          isActive: true,
        },
      ])
      .select();
    console.log(currentPhoto?.title);
    if (error) {
      console.error("Error fetching photos:", error);
    } else {
      if (data) {
        setPhotos(data);
        console.log("Photos fetched:", data);
      }
    }
  };

  const handleSubmit = async () => {
    if (!url) {
      console.error("No file selected");
      return;
      /*  }
       const imageUrl = await uploadImage();
   
       if (imageUrl) {
         await addNewPhotoInPhotoDb(title, priceRange, priceRange, imageUrl.fullPath, format, true);
       } */
      /*   addNewPhoto(); */
    }
  };

  const handleAddNewPhoto = async () => {
    uploadImageToBucket();
  };

  const uploadImageToBucket = async () => {
    if (!url) {
      console.error("No file selected");
      return;
    }
    const file = url!;
    const fileName = `${uuidv4()}-${file.name}`;
    const filePath = user?.id + "/" + fileName;
    const { data, error } = await supabase.storage
      .from("photoGallery")
      .upload(filePath, file);
    if (error) {
      console.error("Error uploading file:", error);
      return;
    } else {
      addNewPhotoInPhotoDb(fileName);
      console.log(data);
      return;
    }
  };

  //Adds new photo to database
  const addNewPhotoInPhotoDb = async (photoId: string) => {
    console.log(photoId);
    const { data, error } = await supabase
      .from("PhotoGallery")
      .insert([
        {
          userId: user?.id,
          photoId: photoId,
          title: title,
          format: format,
          priceRange: priceRange,
          isActive: true,
        },
      ])
      .select();

    if (error) {
      console.error("Error adding new photo:", error);

      if (data) {
        console.log("New photo added:", data);
        setPhotos((prevPhotos) => [...prevPhotos, data[0]]); // Update state with new photo
      }
    }
  };

  /*  const addToCart = async (photoId: number, price: number, size: string) => {
    // Check if the photo is already in the cart
    const existingPhoto = cart.find((orderline) => orderline.photoId === photoId);
    if (existingPhoto) {
      const newCartItem: ICart = existingPhoto.map(line)  {
    
        }
        return photo;
      };
      setCart(updatedCart);
     
     }; */
  const addToCart = (photoId: number, price: number, size: string) => {
    // Check if the item already exists in the cart
    const existingItem = cart.find(
      (item) => item.photoId == photoId && item.size === size
    );

    if (existingItem) {
      // If the item exists, update its quantity
      const updatedCart = cart.map((item) =>
        item.photoId === photoId && item.size === size
          ? { ...item, count: item.count + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      // If the item doesn't exist, add it to the cart
      const newItem: ICart = {
        id: Date.now(),
        photoId,
        photoName: title, // Replace with actual photo name
        count: 1,
        size,
        price,
      };
      setCart([...cart, newItem]);
    }
  };

  /* 
  const addOrderToDb const { data, error } = await supabase
      .from("Order")
      .insert([
        {
          photoId: photoId,
          photoName: title,
          count: 1,
          size: size,
          price: price,
        },
      ])
      .select();

    if (error) {
      console.log("Error adding to cart:", error);
    }
    if (data) {
      setOrder((prevOrder) => [...prevOrder, data[0]]);
    }
 */

  /*  const getYourOwnPhotos = async () => {
    if (!user) {
      console.error("User is not logged in");
      return <h1>User is not logged in</h1>;
    } */
  /*   const  { data, error }  = await supabase
        .storage
        .from("photos")
        .list(user.id + "/", {
          limit: 100,
          offset: 0,
          sortBy: { column: "changedDate", order: "asc" },
        }); */
  /*     if (data !== null) {
        setPhotos(data.map(file => ({
          id: Date.now(),
          title: file.name,
          url: "", // Provide a default or fetch the URL if available
          isActive: true, // Provide a default value
          versions:
            getSizePrice(format, priceRange),
          times_opened: 0,
          times_ordered: 0,
          created_at: Date.now(),
          updated_at: Date.now(),
        })));
      } else {
        console.log(error);
      } */
  /*  }; */

  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // UPDATES THE DATABASE
  const updateIsActiveInPhotoDb = async (id: number, isActive: boolean) => {
    const { data, error } = await supabase
      .from("Photos")
      .update({ isActive })
      .eq("id", id);
    if (error) {
      console.error("Error updating photo:", error);
    } else {
      console.log("Photo updated:", data);
    }
  };

  /* const getSizePrice = (format: string, priceRange: string) => {
      /* Portrait 
      if (format === "Portrait" && priceRange === "Low") {
        return [
          {
            size: "10 x 15",
            price: 5,
          },
          {
            size: "30 x 45",
            price: 79,
          },
          {
            size: "60 x 90",
            price: 399,
          },
        ];
      } else if (format === "Portrait" && priceRange === "Medium") {
        return [
          {
            size: "10 x 15",
            price: 10,
          },
          {
            size: "30 x 45",
            price: 149,
          },
          {
            size: "60 x 90",
            price: 599,
          },
        ];
      } else if (format === "Portrait" && priceRange === "High") {
        return [
          {
            size: "10 x 15",
            price: 25,
          },
          {
            size: "30 x 45",
            price: 299,
          },
          {
            size: "60 x 90",
            price: 999,
          },
        ];
      } else if (format === "Landscape" && priceRange === "Low") {
        /* Landscape 
        return [
          {
            size: "15 x 10",
            price: 5,
          },
          {
            size: "45 x 30",
            price: 79,
          },
          {
            size: "90 x 60",
            price: 399,
          },
        ];
      } else if (format === "Landscape" && priceRange === "Medium") {
        return [
          {
            size: "15 x 10",
            price: 10,
          },
          {
            size: "45 x 30",
            price: 149,
          },
          {
            size: "90 x 60",
            price: 599,
          },
        ];
      } else if (format === "Landscape" && priceRange === "High") {
        return [
          {
            size: "15 x 10",
            price: 25,
          },
          {
            size: "45 x 30",
            price: 299,
          },
          {
            size: "90 x 60",
            price: 999,
          },
        ];
      } else if (format === "Square" && priceRange === "Low") {
        /* Square 
        return [
          {
            size: "15 x 15",
            price: 5,
          },
          {
            size: "40 x 40",
            price: 79,
          },
          {
            size: "60 x 60",
            price: 399,
          },
        ];
      } else if (format === "Square" && priceRange === "Medium") {
        return [
          {
            size: "15 x 15",
            price: 10,
          },
          {
            size: "40 x 40",
            price: 149,
          },
          {
            size: "60 x 60",
            price: 599,
          },
        ];
      } else if (format === "Square" && priceRange === "High") {
        return [
          {
            size: "15 x 15",
            price: 25,
          },
          {
            size: "40 x 40",
            price: 299,
          },
          {
            size: "60 x 60",
            price: 999,
          },
        ];
      }
    }; */

  // UPDATES THE STATE
  //changes if the isActive (if the photo shows up in gallery or not)
  const changeIsActive = (id: number) => {
    const newPhotos = photos.map((photo) =>
      photo.id === id ? { ...photo, isActive: !photo.isActive } : photo
    );

    setPhotos(newPhotos);
    const updatedPhoto = newPhotos.find((photo) => photo.id === id);
    if (updatedPhoto) {
      updateIsActiveInPhotoDb(id, updatedPhoto.isActive);
    }
  };

  const addNewPhoto = () => {
    // ta bort hela denna och alla props som tillhör i alla filer
    console.log("New photo added to State");
  };

  return (
    <>
      <RouterProvider
        router={router({
          photos,
          changeIsActive,
          addNewPhoto,
          email,
          handleEmailInput,
          title,
          titleChange,
          url,
          urlChange,
          format,
          formatChange,
          priceRange,
          priceRangeChange,
          handleSubmit,
          handleAddNewPhoto,
          addToCart,
          supabase,
          cart,
          order,
          /*  getYourOwnPhotos, */
        })}
      ></RouterProvider>
    </>
  );
};
export default App;
