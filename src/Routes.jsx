import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import LoginThree from "pages/Login";
import Login from "pages/SignUp";

import PostAdEleven from "pages/PostAdEleven";
import PostAdTwo from "pages/PostAdTwo";
import SignUpPage from "pages/SignUp";
import HomePage from "pages/HomeNine";
import Products from './pages/Products/index';
import CategoriesPage from './pages/Categories/index';

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "login",
      element: <LoginThree />,
    },
    {
      path: "signup",
      element: <SignUpPage />,
    },
    {
      path: "homenine",
      element: <HomePage/>
    },
    {
      path: "postadeleven",
      element: <PostAdEleven />,
    },
    {
      path: "postadtwo",
      element: <PostAdTwo />,
    },
    {
      path: "products",
      element: <Products/>,
    },
    {
      path: "categories",
      element: <CategoriesPage/>,
    }
  ]);

  return element;
};

export default ProjectRoutes;
