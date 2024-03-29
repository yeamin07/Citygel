import React from "react";
import { Route, useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import LoginThree from "pages/Login";
import SignUpPage from "pages/SignUp";
import HomePage from "pages/Home";
import Products from "./pages/Products/index";
import CategoriesPage from "./pages/Categories/index";
import PostAd from "pages/AddPost/PostFormAd";
import PostAd1 from "pages/AddPost/PostMembershipPlan";
import PostAd2 from "pages/AddPost/PostAddPayment";
import Confirm from "pages/SignUp/Confirm";
import RequiredAuth from "hooks/RequiredAuth";
import AddPostWrapper from "pages/AddPost/AddPostWrapper";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Profile from "components/profile/Profile";
import Description from "components/profile/Description";
import PageTitle from "components/Dashboard/PageTitle";
import ECommerce from "pages/Dashboard";
import Dashboard from "pages/Dashboard";

const stripePromise = loadStripe(
  "pk_test_51Ov1cySAeHvI9y2yJ0rfiQdS8DRrkSp9KIhsATonDEL2Yv1w1qKxtuP8NbRxYAUayN3GFilUu6ZRWXXuUp7LdZ2700PaqkmH4c",
);

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
      path: "products/:id",
      element: <Description />,
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
      element: (
        <Elements stripe={stripePromise}>
          <PostAd2 />
        </Elements>
      ),
    },
    {
      path: "Profile",
      element: <Profile />,
    },

    {
      path: "confirm",
      element: <Confirm />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
