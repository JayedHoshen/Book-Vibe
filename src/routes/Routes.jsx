import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/home/Homepage";
import Books from "../pages/books/Books";
import ErrorPage from "../error/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "/books",
        Component: Books,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
