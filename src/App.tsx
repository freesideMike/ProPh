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

 
const supabaseUrl: string = import.meta.env.VITE_SUPABASE_URL!;
const supabaseKey: string = import.meta.env.VITE_SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey); 

const App = () => {
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [email, setEmail] = useState<string>("");
  const [sizePrice, setSizePrice] = useState<IVersions[]>([]);
  /* temporary states for adding new photo */
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState<File>();
  const [format, setFormat] = useState("portrait");
  const [priceRange, setPriceRange] = useState("Low");
  
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


  const handleSubmit = async () => {
    if (!url) {
      console.error("No file selected");
      return;
    }
    const imageUrl = await uploadImage();

    if (imageUrl) {
      await addNewPhotoInPhotoDb(title, imageUrl.fullPath, format, priceRange);
    }
    /*   addNewPhoto(); */
  };

  const uploadImage = async () => {
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
      console.log("File uploaded:", data);
      return data;
    }
  }

  const handleAddNewPhoto = async () => {
    uploadImage();
  }

  const getYourOwnPhotos = async () => {
    if (!user) {
      console.error("User is not logged in");
      return <h1>User is not logged in</h1>;
    }
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
  };

  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // get photos from database into photos-state
  const getAllPhotos = async () => {
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

  //Adds new photo to database
const addNewPhotoInPhotoDb = async (
  title: string,
  url: string,
  format: string,
  priceRange: string
) => {
  const { data, error } = await supabase
    .from("Photos")
    .insert([{ title, url, format, priceRange }]); // Adjust fields as necessary

  if (error) {
    console.error("Error adding new photo:", error);
  } else {
    console.log("New photo added:", data);
    if (data) {
      setPhotos((prevPhotos) => [...prevPhotos, data[0]]); // Update state with new photo
    }
  }
};

 

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

    console.log("New photo added to State");

    addNewPhotoInPhotoDb(title, url!.name, format, priceRange);
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
          getYourOwnPhotos,
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
          supabase,
        })}
      ></RouterProvider>
    </>
  );
};
export default App;
