import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true, // ✅ Root path "/fly_fishing/"
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "services",
          element: <Services />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ],
  {
    basename: "/fly_fishing", // ✅ This is critical for GitHub Pages
  }
);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
