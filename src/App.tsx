import "./App.css";
import { RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import router from "./Router";
import { IPhoto } from "./models/IPhoto";

const supabaseUrl: string = import.meta.env.VITE_SUPABASE_URL!;
const supabaseKey: string = import.meta.env.VITE_SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const App = () => {
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  useEffect(() => {
    getPhotos();
  }, []);

  // get photos from database into photos-state
  const getPhotos = async () => {
    const { data, error } = await supabase.from("Photos").select();
    if (error) {
      console.error("Error fetching photos:", error);
    } else {
      setPhotos(data);
    }
  };
  

  // UPDATES THE DATABASE
  const updateIsActiveInPhotoDb = async (id: number, isActive: boolean) => {
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

  

    //Adds new photo to database
  const addNewPhotoOInPhotoDb = () => {
  
  
    // to add the photo to the storage in Database here is what you will do.
  
    /* const uploadImage = async (file) => {
  const { data, error } = await supabase.storage
    .from('your-bucket-name') // Replace with your bucket name
    .upload(`images/${file.name}`, file); // Path where the file will be stored

  if (error) {
    console.error('Error uploading image:', error);
  } else {
    console.log('Image uploaded:', data);
  }
}; */

    console.log("New photo added to Database");
  }

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
    // add to state with a constructor and a spread operator . . . 

    console.log("New photo added to State")

    addNewPhotoOInPhotoDb();
  }

  return (
    <>
      <RouterProvider
        router={router({ photos, changeIsActive, addNewPhoto })}
      ></RouterProvider>
    </>
  );
};
export default App;
