import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "context/AuthContext";
import { home, postad, profile } from "assets/Allimages";
// import { useEffect } from "react";
// import {
//   Route,
//   useNavigationType,
//   useLocation,
// } from "react-router-dom";

function App() {
  {
    /**This is from ai-5 component */
  }

  // const action = useNavigationType();
  // const location = useLocation();
  // const pathname = location.pathname;

  // useEffect(() => {
  //   if (action !== "POP") {
  //     window.scrollTo(0, 0);
  //   }
  // }, [action, pathname]);

  // useEffect(() => {
  //   let title = "";
  //   let metaDescription = "";

  //   switch (pathname) {
  //     case "/":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //   }

  //   if (title) {
  //     document.title = title;
  //   }

  //   if (metaDescription) {
  //     const metaDescriptionTag = document.querySelector(
  //       'head > meta[name="description"]'
  //     );
  //     if (metaDescriptionTag) {
  //       metaDescriptionTag.content = metaDescription;
  //     }
  //   }
  // }, [pathname]);
  const navigate = useNavigate();
  return (
    <AuthProvider>
      <div className="h-auto">
        <div
          className="fixed bottom-0  z-[1000] hidden  h-[80px] w-full items-center justify-center border-t-[2px]
      border-solid border-gray-200 bg-[#FFFFFF] p-4 pt-[9px] mq500:flex"
        >
          <div className="mq300:px-4 flex h-5/6 w-full justify-between px-8">
            <img
              className="h-[100%]  w-[33px] cursor-pointer"
              alt=""
              src={home}
            />
            <img
              className="h-[100%] w-[40px] cursor-pointer"
              alt=""
              src={postad}
              onClick={() => navigate("/add-post")}
            />
            <img
              className="h-[100%] w-[36px] cursor-pointer"
              alt=""
              src={profile}
            />
          </div>
        </div>
      </div>
      <Routes />
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
