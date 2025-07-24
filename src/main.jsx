import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Error from "./Components/Root/Error.jsx";
import Home from "./Components/Home/Home.jsx";
import ProDetail from "./Components/Projects/ProDetail.jsx";
import AllProjects from "./Components/Projects/AllProjects.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root></Root>,
//     errorElement: <Error></Error>,
//   },
//   {
//     path: "/detail/:id",
//     element: <ProDetail></ProDetail>,
//   },
//   {
//     path: "/detail/:id",
//     element: <ProDetail></ProDetail>,
//   },
//   {
//     path: "/allprojects",
//     element: <AllProjects></AllProjects>,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/detail/:id",
        element: <ProDetail></ProDetail>,
      },
      {
        path: "/allprojects",
        element: <AllProjects></AllProjects>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
