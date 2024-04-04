import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "context/AuthContext";
import ProjectRoutes from "Routes";

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
  // const navigate = useNavigate();
  // const location = useLocation();
  // const { pathname } = location;
  return (
    <AuthProvider>
      {/*~~~~~~~~~~~~~~~~~~~~~~~New Footer ~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      {/* <div className="h-auto">
        <div
          className="fixed bottom-0  z-[1000] hidden  h-[80px] w-full items-center justify-center border-t-[2px]
      border-solid border-gray-200 bg-[#FFFFFF] p-4 pt-[9px] mq500:flex"
        >
          <div className="flex h-5/6 w-full justify-between px-8 mq400:px-4">
            <div onClick={() => navigate("/")} className="h-[70%] w-[34px]">
              <RiHome5Line
                className={`ml-[2.5px] h-[100%] w-[25px] text-gray-400 ${
                  pathname.includes("") && "text-cyan-500"
                }`}
              />
              <p
                className={`mt-[-8px] font-aleo text-[13px] ${
                  pathname.includes("") && "text-cyan-500"
                }`}
              >
                Home
              </p>
            </div>
            <div
              onClick={() => navigate("/add-post")}
              className={`${pathname.includes("add-post") && "text-cyan-500"} h-[70%] w-[45px]
                text-gray-400`}
            >
              <FiPlusCircle className="mb-[-13px] ml-[6px] h-[100%] w-[22px]" />
              <p
                className={` inline font-aleo text-[13px]  ${
                  pathname.includes("add-post") && "text-cyan-500"
                }`}
              >
                Post ad
              </p>
            </div>
            <div
              onClick={() => navigate("/profile")}
              className={`text h-[70%] w-[34px]  ${
                pathname.includes("profile") && "text-cyan-500"
              }`}
            >
              <FaRegCircleUser
                className={`ml-2 h-[100%] w-[22px] text-gray-400  ${
                  pathname.includes("profile") && "text-cyan-500"
                }`}
              />
              <p
                className={`mt-[-8px] font-aleo text-[13px] text-gray-400 ${
                  pathname.includes("profile") && "text-cyan-500"
                }`}
              >
                Profile
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <ProjectRoutes />
      {/* <DashboardRoutes /> */}
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
