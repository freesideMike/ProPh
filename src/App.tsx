/* require("dotenv").config();  */
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import router from "./Router";
import { IPhoto } from "./models/IPhoto";

const supabaseUrl: string = "https://pzmrtjfxkhgiafjyldjw.supabase.co";
const supabaseKey: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6bXJ0amZ4a2hnaWFmanlsZGp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzOTI0MTksImV4cCI6MjA0ODk2ODQxOX0.Y75EwJASRBM8VHxU75gDphS-ewu2-1QCgPLzQ5t24_o";

/* const supabaseUrl: string = process.env.REACT_APP_SUPABASE_URL!;
const supabaseKey: string = process.env.REACT_APP_SUPABASE_KEY!;  */
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
