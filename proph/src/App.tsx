import { useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";

function App() {
  const [user, setUser] = useState([]);

  return (
    <>
      <h1>ProPh</h1>
      <p>- where Photos meet new people -</p>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
