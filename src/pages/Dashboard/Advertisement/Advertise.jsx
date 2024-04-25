
import DefaultLayout from "components/Dashboard/layout/DefaultLayout";
import { cetagory_logo } from "assets/Allimages";
import { nature } from "assets/Allimages";
// import { CopyBlock, dracula } from "react-code-blocks";
// import config from "./config";


import { useState, useRef } from 'react';
//import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
//import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Cyanbutton from "./Cyanbutton";

const Advertise = () => {

  const textareaRef = useRef(null);

  const [code, setCode] = useState(``);

  const  [image,setImage]=useState(null);


  const toggleFun =(e)=>{
    setImage(e)
  }

  return (
    <DefaultLayout classname="container mx-auto mb-6">
      <div className="banner-parent-1 mb-24">
        {/*~~~~~~~~~~~~~Each component~~~~~~~~~~~ */}
        <div className="flex h-auto w-full flex-col justify-start rounded-[15px] border-[1px] border-solid border-gray-200 p-2 shadow-xl space-y-3">
          <h2 className="h-[14%] w-full text-center text-[20px] lg:text-[24px]">
            Banner 1
          </h2>
          <div className=" flex h-auto  sm:h-auto w-full flex-col justify-center items-center gap-[4px] sm:flex-row">
          {/*~~~~~~~~~~~~~~~~~flex and hide ~~~~~~~~~~~~~~~~~~~~~~~ */}
           {image=="image" &&(
            <div className="w-full">
              <form className="pl-3 pt-3">
                <label htmlFor="image" className="text-[20px] text-cyan-600 mb-4">Add Image:</label>
                <input type="file"  id="image" />
              </form>
            </div>
           )}
           {image=="code" && (
            <div className="w-full h-[320px] mb-10">
              <p className="text-[20px] text-cyan-600 mb-4"> Add Code:</p>
              <textarea id="text-1" name="code-block" 
              className="border-2 border-solid border-black-900_87 w-[100%] h-full  overflow-auto rounded-md p-2"
                value={code}
                onChange={(e)=>setCode(e.target.value)}
              />
            </div>
           )}

           {!image && (
            <div className={`flex sm:flex-row flex-col w-full h-auto justify-center items-center`}>
           <Cyanbutton btnName="Add Image"
           onClick={()=>toggleFun("image")}
           />
            <div className="flex w-full items-center justify-center font-serif text-[22px] font-semibold sm:w-[4%]">
              Or
            </div>
            {/*~~~~~~~~~~~~~~~~~~Advertisement Section~~~~~~~~~~~~~ */}
            
            <Cyanbutton btnName="Add Code"
              onClick={()=>toggleFun("code")}
            />
           </div>
           )}
          </div>
          {/*~~~~~~~~~~This is the footer part~~~~~~~*/}
          <div className={`${!image ? "hidden" :"flex"} space-x-2 w-full justify-center items-center`}>
          <button onClick={()=>toggleFun(null)} className="rounded-[10px] bg-current shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] border-2 md:border-2  border-solid border-cyan-500 text-[17px] 2xl:text-[20px] md:text-[18px] lg:text-[19px] py-[11px] px-[40px] 2xl:py-[13px] 2xl:px-[55px] lg:py-[12px] lg:px-[50px] text-black">Edit</button>
          <Cyanbutton btnName="save"/>
          </div>

        </div>
      </div>
    </DefaultLayout>
  );
};

export default Advertise;
