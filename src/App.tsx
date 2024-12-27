import "./App.css";
import { RouterProvider } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import router from "./Router";
import { IPhoto } from "./models/IPhoto";
import { IVersions } from "./models/IVersions";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@supabase/auth-helpers-react";

const supabaseUrl: string = import.meta.env.VITE_SUPABASE_URL!;
const supabaseKey: string = import.meta.env.VITE_SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const App = () => {
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [email, setEmail] = useState<string>("");
  const [sizePrice, setSizePrice] = useState<IVersions[]>([]);
  /* temporary states for adding new photo */
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [format, setFormat] = useState("portrait");
  const [priceRange, setPriceRange] = useState("Low");
  
  const user = useUser();
  
  const titleChange = (value: string) => {
    setTitle(value);
  };
const urlChange = (value: string) => {
    if (value && value.length > 0) {
      setUrl(value); 
    }
  };
  const formatChange = (value: string) => {
    setFormat(value);
  };

  const priceRangeChange = (value: string) => {
    setPriceRange(value);
    console.log(value);
  };



  useEffect(() => {
    getAllPhotos();
  }, []);

  const getYourOwnPhotos = async () => {
    if (!user) {
      console.error("User is not logged in");
      return;
    }
    const { data, error } = await supabase
      .storage
      .from("photos")
      .list(user.id + "/", {
        limit: 100,
        offset: 0,
        sortBy: { column: "changedDate", order: "asc" },
      });
    if (data !== null) {
      setImages(data.map(file => file.name));
    } else {
      console.log(error);
    }

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
  const addNewPhotoInPhotoDb = () => {
    // to add the photo to the storage in Database here is what you will do.
  };

    const uploadImage = async (file: File) => {
      const { data, error } = await supabase.storage
        .from("photos") // the supabase bucket name
        .upload(user?.id + "/" + uuidv4(), file); // the unique user/filename, and the file
      if (data) {
        getAllPhotos();
      } else {
        console.log(error);
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
     
      addNewPhotoInPhotoDb();
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
            uploadImage,
            getYourOwnPhotos,
            title,
            titleChange,
            url,
            urlChange,
            format,
            formatChange,
            priceRange,
            priceRangeChange,
          })}
        ></RouterProvider>
      </>
    );
  
}
export default App;
