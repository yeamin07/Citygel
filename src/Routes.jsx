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
import Description from "pages/Products/Description";
import PageTitle from "components/Dashboard/PageTitle";
import ECommerce from "pages/Dashboard";
import Dashboard from "pages/Dashboard";
import AddCategory from "pages/Dashboard/AddCategory";
import SubCategory from "pages/Dashboard/SubCategory";
import Country from "pages/Dashboard/Country";
import Test from "components/Test/Test";
import State from './pages/Dashboard/AddState';
import City from './pages/Dashboard/City';
import AllUser from "pages/Dashboard/AllUser";
import AllAds from "pages/Dashboard/AllAds";
import AllPayment from "pages/Dashboard/AllPayment";
import AddField from "pages/Dashboard/AddField";
import AddPost from "pages/Dashboard/AddPost";

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
      element: (
        <RequiredAuth>
          <Dashboard />
        </RequiredAuth>
      ),
    },
    {
      path: "/dashboard/all-user",
      element: (
        <RequiredAuth>
          <AllUser />
        </RequiredAuth>
      ),
    },
    {
      path: "/dashboard/all-ads",
      element: (
        <RequiredAuth>
          <AllAds />
        </RequiredAuth>
      ),
    },
    {
      path: "/dashboard/all-payment",
      element: (
        <RequiredAuth>
          <AllPayment />
        </RequiredAuth>
      ),
    },
    {
      path: "/dashboard/add-type",
      element: (
        <RequiredAuth>
          <Dashboard />
        </RequiredAuth>
      ),
    },
    {
      path: "/dashboard/add-category",
      element: (
        <RequiredAuth>
          <Dashboard />
        </RequiredAuth>
      ),
    },
    {
      path: "/dashboard/add-post",
      element: (
        <RequiredAuth>
          <AddPost />
        </RequiredAuth>
      ),
    },
    {
      path: "/forms/add-category",
      element: (
        <RequiredAuth>
          <AddField />
        </RequiredAuth>
      ),
    },
    {
      path: "/dashboard/addCategory",
      element: <AddCategory />,
    },
    {
      path: "/dashboard/country",
      element: <Country/>,
    },
    {
      path: "/dashboard/subCategory",
      element: <SubCategory />,
    },
    {
      path: "/dashboard/state",
      element: <State />,
    },
    {
      path: "/dashboard/city",
      element: <City />,
    },
    {
      path: "/test",
      element: <Test />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
