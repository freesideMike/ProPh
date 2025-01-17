import "./App.css";
import { RouterProvider } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import router from "./Router";
import { IPhoto } from "./models/IPhoto";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@supabase/auth-helpers-react";
import { createClient } from "@supabase/supabase-js";
import { IOrder } from "./models/IOrder";
import { ICart } from "./models/ICart";

export const supabaseUrl: string = import.meta.env.VITE_SUPABASE_URL!;
const supabaseKey: string = import.meta.env.VITE_SUPABASE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const App = () => {
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [email, setEmail] = useState<string>("");
  const [order, setOrder] = useState<IOrder[]>([]);
  /* temporary states for adding new photo */
  const [title, setTitle] = useState("");
  /* the "url" is actually a file-object */
  const [url, setUrl] = useState<File>();
  const [format, setFormat] = useState("portrait");
  const [priceRange, setPriceRange] = useState("Low");
  const [cart, setCart] = useState<ICart[]>([]);
  const user = useUser();

  useEffect(() => {
    getAllPhotos();
  }, []);

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
      }
    }
    localStorage.getItem("cart") &&
      setCart(JSON.parse(localStorage.getItem("cart")!));
  };

  const handleSubmit = async () => {
    if (!url) {
      console.error("No file selected");
      return;
    }
  };

  const handleAddNewPhoto = async () => {
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
    }
    if (data){
      addNewPhotoInPhotoDb(fileName);
      return;
    }
  };

  //Adds new photo to database
  const addNewPhotoInPhotoDb = async (photoId: string) => {
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
      saveCartToLocalStorage(updatedCart);
    } else {
      // If the item doesn't exist, add it to the cart
      const newItem: ICart = {
        id: Date.now(),
        photoId,
        photoName: title,
        count: 1,
        size,
        price,
      };
      setCart([...cart, newItem]);
      saveCartToLocalStorage([...cart, newItem]);
    }
  };

  const saveCartToLocalStorage = (cart: ICart[]) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  const addCount = (photoId: number, size: string) => {
    const updatedCart = cart.map((item) =>
      item.photoId === photoId && item.size === size
        ? { ...item, count: item.count + 1 }
        : item
    );
    setCart(updatedCart);
  };

  const subtractCount = (photoId: number, size: string) => {
    if (
      cart.find((item) => item.photoId === photoId && item.size === size)
        ?.count === 1
    ) {
      const updatedCart = cart.filter(
        (item) => item.photoId !== photoId || item.size !== size
      );
      setCart(updatedCart);
      saveCartToLocalStorage(updatedCart);
      return;
    }

    const updatedCart = cart.map((item) =>
      item.photoId === photoId && item.size === size
        ? { ...item, count: item.count - 1 }
        : item
    );
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const createOrder = async () => {
    const newOrder = cart.map((item) => ({
      photoId: item.photoId,
      photoName: item.photoName,
      count: item.count,
      size: item.size,
      price: item.price,
    }));

    const { data, error } = await supabase
      .from("Order")
      .insert(newOrder)
      .select();

    if (error) {
      console.error("Error creating order:", error);
    } else {
      if (data) {
        console.log("Order created:", data);
        setOrder(data);
        setCart([]);
        localStorage.removeItem("cart");
      }
    }
  };

  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // UPDATES THE DATABASE
  const updateIsActiveInPhotosDb = async (id: number, isActive: boolean) => {
    const { data, error } = await supabase
      .from("PhotoGallery")
      .update({ isActive })
      .eq("id", id);
    if (error) {
      console.error("Error updating photo:", error);
    } else {
      console.log("Photo updated:", data);
    }
  };

  const changeIsActive = (id: number) => {
    const newPhotos = photos.map((photo) =>
      photo.id === id ? { ...photo, isActive: !photo.isActive } : photo
    );

    setPhotos(newPhotos);
    const updatedPhoto = newPhotos.find((photo) => photo.id === id);
    if (updatedPhoto) {
      updateIsActiveInPhotosDb(id, updatedPhoto.isActive);
    }
  };

  return (
    <>
      <RouterProvider
        router={router({
          photos,
          changeIsActive,
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
          createOrder,
          addCount,
          subtractCount,
          order,
        })}
      ></RouterProvider>
    </>
  );
};
export default App;
