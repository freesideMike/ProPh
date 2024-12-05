import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://pzmrtjfxkhgiafjyldjw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6bXJ0amZ4a2hnaWFmanlsZGp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzOTI0MTksImV4cCI6MjA0ODk2ODQxOX0.Y75EwJASRBM8VHxU75gDphS-ewu2-1QCgPLzQ5t24_o"
);

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos();
  }, []);

  async function getPhotos() {
    const { data } = await supabase.from("Photos").select();
    console.log(data);
    setPhotos(data);
  }

  return (
    <>
      <ul>
        {photos.map((photo) => (<>
          <li key={photo.id}>{photo.name}</li>
          <img src={photo.url} alt="" />
        </>
        ))}
      </ul>
        <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
