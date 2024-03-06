import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import LoginThree from "pages/LoginThree";
import Login from "pages/Login";
import HomeNine from "pages/HomeNine";
import PostAdEleven from "pages/PostAdEleven";
import PostAdTwo from "pages/PostAdTwo";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "loginthree",
      element: <LoginThree />,
    },
    {
      path: "login",
      element: <Login />,
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
  ]);

  return element;
};

export default ProjectRoutes;
