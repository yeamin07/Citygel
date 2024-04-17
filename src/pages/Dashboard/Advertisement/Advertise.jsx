
import DefaultLayout from "components/Dashboard/layout/DefaultLayout";
import { cetagory_logo } from "assets/Allimages";
import { nature } from "assets/Allimages";
// import { CopyBlock, dracula } from "react-code-blocks";
// import config from "./config";


import { useState, useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Snippet from "./Snippet";

const Advertise = () => {

  const textareaRef = useRef(null);

  // const [code, setCode] = useState(`
  //   const fib = (n) => {
  //     if (n <= 1) {
  //       return n;
  //     }
  //     return fib(n - 1) + fib(n - 2);
  //   };
  // `);

  const code= '(num) => num + 1';

  // logVersionInfo();
  // const [language, changeLanguage] = useState("jsx");
  // const [languageDemo, changeDemo] = useState(sample["jsx"]);
  // const [lineNumbers, toggleLineNumbers] = useState(true);
  return (
    <DefaultLayout classname="container mx-auto mb-6">
      <div className="banner-parent-1 mb-16">
        {/*~~~~~~~~~~~~~Each component~~~~~~~~~~~ */}
        <div className="flex h-auto w-full flex-col justify-start rounded-[15px] border-[1px] border-solid border-gray-200 p-2 shadow-xl">
          <h2 className="h-[14%] w-full text-center text-[20px] lg:text-[24px]">
            Banner 1
          </h2>
          <div className=" flex h-[90%] w-full flex-col justify-start gap-[4px] sm:flex-row">
            <div className="w-full sm:w-[48%]">
              <img
                src={nature}
                className="h-[400px] w-full rounded-lg object-cover"
                alt="Natural Beauty"
              />
            </div>
            <div className="flex w-full items-center justify-center font-serif text-[22px] font-semibold sm:w-[4%]">
              Or
            </div>
            {/*~~~~~~~~~~~~~~~~~~Advertisement Section~~~~~~~~~~~~~ */}
            <div className="w-full sm:w-[48%] h-[400px]  rounded-[0px] overflow-auto cursor-pointer">
             <Snippet
             />
            </div>

          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Advertise;
