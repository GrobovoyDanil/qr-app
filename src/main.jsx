import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Layout } from "./Layout.jsx";
import { BrowserRouter } from "react-router-dom";

import { QRCodeGen } from "./components/Generete/QRCodeGen.jsx";
import { QRCodeScan } from "./components/Scan/QRCodeScan.jsx";
// import { Navigation } from "./components/Navigation.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//   },
//   {
//     path: "/generate",
//     element: <QRCodeGen />,
//   },
//   {
//     path: "/scan",
//     element: <QRCodeScan />,
//   },
// ]);

createRoot(document.getElementById("root")).render(
  //   <RouterProvider router={router} />,
  <BrowserRouter>
    <Layout />
  </BrowserRouter>,
);
