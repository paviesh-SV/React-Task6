import React from "react";
import AppRoutes from "./routes/Routes.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer.jsx";

//URL where the data is stored/retrieved
export const URL = "https://666c084c49dbc5d7145c4a91.mockapi.io/AxiosTask"

function App() {

  const router = createBrowserRouter(AppRoutes)
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}


export default App