import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "context/AuthContext";
import { RiHome5Line } from "react-icons/ri"; 
import { FiPlusCircle } from "react-icons/fi"; 
import { FaRegCircleUser } from "react-icons/fa6"; 
// import { useEffect } from "react";
// import {
//   Route,
//   useNavigationType,
//   useLocation,
// } from "react-router-dom";

function App() {

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
    {/*~~~~~~~~~~~~~~~~~~~~~~~New Footer ~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <div className="h-auto">       
        <div
          className="fixed bottom-0  z-[1000] hidden  h-[80px] w-full items-center justify-center border-t-[2px]
      border-solid border-gray-200 bg-[#FFFFFF] p-4 pt-[9px] mq500:flex"
        >
          <div className="mq400:px-4 flex h-5/6 w-full justify-between px-8">
            <div className="w-[34px] h-[70%]">
              <RiHome5Line className="w-[25px] h-[100%] text-cyan-500 ml-[2.5px]" />
              <p className="text-cyan-400 mt-[-8px] text-[13px] font-aleo">Home</p>
            </div>
            <div className="w-[45px] h-[70%] text-gray-400">
              <FiPlusCircle className="w-[22px] h-[100%] mb-[-13px] ml-[6px]"/>
              <p className=" text-[13px] font-aleo inline">Post ad</p>
            </div>
            <div className="w-[34px] h-[70%] text-gray-400">
              <FaRegCircleUser className="w-[22px] h-[100%] ml-2"/>
              <p className="text-[13px] font-aleo mt-[-8px]">Profile</p>
            </div>
          </div>
        </div>
      </div>
      <Routes />
      <ToastContainer/>
    </AuthProvider>
  );
}

export default App;
