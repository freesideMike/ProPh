import "./App.css";
import { RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import router from "./Router";
import { IPhoto } from "./models/IPhoto";

const supabaseUrl: string = import.meta.env.VITE_SUPABASE_URL!;
const supabaseKey: string = import.meta.env.VITE_SUPABASE_KEY!;
console.log(supabaseUrl);
const supabase = createClient(supabaseUrl, supabaseKey);

const App = () => {
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  useEffect(() => {
    getPhotos();
  }, []);

  const updateIsActiveInPhotoDb = async (id: number, isActive: boolean) => {
    console.log(isActive);
    const { data, error } = await supabase
      .from("Photos") // Replace 'photos' with your table name
      .update({ isActive }) // Update the isActive field
      .eq("id", id); // Match the photo by id

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
    console.log(photos);
    const updatedPhoto = newPhotos.find((photo) => photo.id === id);
    if (updatedPhoto) {
      console.log(updatedPhoto.isActive);
      updateIsActiveInPhotoDb(id, updatedPhoto.isActive);
    }
  };

  const getPhotos = async () => {
    const { data, error } = await supabase.from("Photos").select();
    if (error) {
      console.error("Error fetching photos:", error);
    } else {
      setPhotos(data);
    }
  };

  return (
    <>
      <RouterProvider
        router={router({ photos, changeIsActive })}
      ></RouterProvider>
    </>
  );
};
export default App;
