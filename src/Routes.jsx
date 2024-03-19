import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import LoginThree from "pages/Login";
import PostAdEleven from "pages/PostAdEleven";
import PostAdTwo from "pages/PostAdTwo";
import SignUpPage from "pages/SignUp";
import HomePage from "pages/HomeNine";
import Products from "./pages/Products/index";
import CategoriesPage from "./pages/Categories/index";
import Description from "components/ai-5pages/Description";
import PostAd from "components/ai-5pages/PostAd";
import PostAd1 from "components/ai-5pages/PostAd1";
import PostAd2 from "components/ai-5pages/PostAd2";
import Profile from "components/ai-5pages/Profile";
import Fullheader from "components/Fullheader";
import Thankyou from "components/ai-5pages/ThankYou";
import Confirm from "pages/SignUp/Confirm";

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
      element: <HomePage />,
    },
    {
      path: "postadeleven",
      element: <PostAdEleven />,
    },

    {
      path: "products",
      element: <Products />,
    },
    {
      path: "categories",
      element: <CategoriesPage />,
    },
    {
      path: "description",
      element: <Description />,
    },
    {
      path: "postad",
      element: <PostAd />,
    },
    {
      path: "postad1",
      element: <PostAd1 />,
    },
    {
      path: "postad2",
      element: <PostAd2 />,
    },
    {
      path: "Profile",
      element: <Profile />,
    },
    {
      path: "thanks",
      element: <Thankyou />,
    },
    {
      path: "confirm",
      element: <Confirm />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
