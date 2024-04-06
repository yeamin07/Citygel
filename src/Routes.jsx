import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import AddCategory from "pages/Dashboard/AddCategory";
import SubCategory from "pages/Dashboard/SubCategory";
import Country from "pages/Dashboard/Country";
import Test from "components/Test/Test";
import State from "./pages/Dashboard/AddState";
import City from "./pages/Dashboard/City";
import AllUser from "pages/Dashboard/AllUser";
import AllAds from "pages/Dashboard/AllAds";
import AllPayment from "pages/Dashboard/AllPayment";
import AddPost from "pages/Dashboard/AddPost";
import AddField from "pages/Dashboard/AddField";
import NotFound from "pages/NotFound";
import LoginPage from "pages/Login";
import AddPosts from "components/Dashboard/AddPost";
import Advertise from "pages/Dashboard/Advertisement/Advertise";
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
<<<<<<< HEAD
      <Route path="dashboard/all-ads" element={<AllAds />} />
      <Route path="dashboard/all-payment" element={<AllPayment />} />
      <Route path="dashboard/add-type" element={<Dashboard />} />
      <Route path="dashboard/add-category" element={<AddCategory />} />
      <Route path="dashboard/add-subcategory" element={<SubCategory />} />
      <Route path="dashboard/add-country" element={<AddCountry />} />
      <Route path="dashboard/add-state" element={<State />} />
      <Route path="dashboard/add-city" element={<City />} />
      <Route path="dashboard/add-post" element={<AddPosts />} />
      <Route path="dashboard/add-advertisement" element={<Advertise />} />
=======
      <Route
        path="dashboard/all-ads"
        element={
          <RequiredAuth>
            <AllAds />
          </RequiredAuth>
        }
      />
      <Route
        path="dashboard/all-payment"
        element={
          <RequiredAuth>
            <AllPayment />
          </RequiredAuth>
        }
      />
      <Route
        path="dashboard/add-type"
        element={
          <RequiredAuth>
            <Dashboard />
          </RequiredAuth>
        }
      />
      <Route
        path="dashboard/add-category"
        element={
          <RequiredAuth>
            <AddCategory />
          </RequiredAuth>
        }
      />
      <Route
        path="dashboard/add-subcategory"
        element={
          <RequiredAuth>
            <SubCategory />
          </RequiredAuth>
        }
      />
      <Route
        path="dashboard/add-country"
        element={
          <RequiredAuth>
            <Country />
          </RequiredAuth>
        }
      />
      <Route
        path="dashboard/add-state"
        element={
          <RequiredAuth>
            <State />
          </RequiredAuth>
        }
      />
      <Route
        path="dashboard/add-city"
        element={
          <RequiredAuth>
            <City />
          </RequiredAuth>
        }
      />
      <Route
        path="dashboard/add-post"
        element={
          <RequiredAuth>
            <AddPosts />
          </RequiredAuth>
        }
      />
>>>>>>> 25a74100f320db1aa869d7dcb94ebf8eda7281f9
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
