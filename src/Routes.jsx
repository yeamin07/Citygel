import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import RequiredAuth from "hooks/RequiredAuth";

import HomePage from "pages/Home";
import SignUpPage from "pages/SignUp";
import AddPostWrapper from "pages/AddPost/AddPostWrapper";
import Products from "pages/Products";
import Description from "pages/Products/Description";
import Profile from "components/profile/Profile";
import Confirm from "pages/SignUp/Confirm";
import Category from "pages/Categories";
import Dashboard from "pages/Dashboard";
import AllUser from "pages/Dashboard/AllUser";
import AllAds from "pages/Dashboard/AllAds";
import AllPayment from "pages/Dashboard/AllPayment";
import AddPost from "pages/Dashboard/AddPost";
import AddField from "pages/Dashboard/AddField";
import NotFound from "pages/NotFound";
import LoginPage from "pages/Login";

const stripePromise = loadStripe(
  "pk_test_51Ov1cySAeHvI9y2yJ0rfiQdS8DRrkSp9KIhsATonDEL2Yv1w1qKxtuP8NbRxYAUayN3GFilUu6ZRWXXuUp7LdZ2700PaqkmH4c",
);

const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route
        path="add-post"
        element={
          <RequiredAuth>
            <AddPostWrapper />
          </RequiredAuth>
        }
      />
      <Route path="products" element={<Products />} />
      <Route path="products/:id" element={<Description />} />
      <Route path="categories" element={<Category />} />
      <Route path="description" element={<Description />} />

      <Route path="profile" element={<Profile />} />
      <Route path="confirm" element={<Confirm />} />
      <Route path="dashboard/all-user" element={<AllUser />} />
      <Route
        path="dashboard"
        element={
          <RequiredAuth>
            <Dashboard />
          </RequiredAuth>
        }
      ></Route>
      <Route path="dashboard/all-ads" element={<AllAds />} />
      <Route path="dashboard/all-payment" element={<AllPayment />} />
      <Route path="dashboard/add-type" element={<Dashboard />} />
      <Route path="dashboard/add-category" element={<Dashboard />} />
      <Route path="dashboard/add-post" element={<AddPost />} />
      <Route
        path="forms/add-field"
        element={
          <RequiredAuth>
            <AddField />
          </RequiredAuth>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default ProjectRoutes;
