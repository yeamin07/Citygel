import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import LoginThree from "pages/Login";
import PostAdEleven from "pages/AddPost/PostCategories";
import PostAdTwo from "pages/PostAdTwo";
import SignUpPage from "pages/SignUp";
import HomePage from "pages/HomeNine";
import Products from "./pages/Products/index";
import CategoriesPage from "./pages/Categories/index";
import Description from "components/ai-5pages/Description";
import PostAd from "pages/AddPost/PostFormAd";
import PostAd1 from "pages/AddPost/PostMembershipPlan";
import PostAd2 from "pages/AddPost/PostAddPayment";
import Profile from "components/ai-5pages/Profile";
import Fullheader from "pages/AddPost/AddPostWrapper";
import Thankyou from "components/ai-5pages/ThankYou";
import Confirm from "pages/SignUp/Confirm";
import RequiredAuth from "hooks/RequiredAuth";
import AddPostWrapper from "pages/AddPost/AddPostWrapper";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <HomePage /> },
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
      path: "add-post",
      element: (
        <RequiredAuth>
          <AddPostWrapper />
        </RequiredAuth>
      ),
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
    {
      path: "fullheader",
      element: <Fullheader />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
