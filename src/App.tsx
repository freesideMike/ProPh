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

export const App = () => {
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  useEffect(() => {
    getPhotos();
  }, []);

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
      <RouterProvider router={router({ photos })}></RouterProvider>
    </>
  );
};
