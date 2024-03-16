import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import LoginThree from "pages/Login";
import Login from "pages/SignUp";

import PostAdEleven from "pages/PostAdEleven";
import PostAdTwo from "pages/PostAdTwo";
import SignUpPage from "pages/SignUp";
import HomeNine from "pages/HomeNine";
import FlightSearch from "pages/Flight";
import Description from "components/Description";

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
      element: <HomeNine />,
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
      path: "flight",
      element: <FlightSearch />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
