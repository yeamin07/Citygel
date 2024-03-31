import { useEffect, useRef, useState } from "react";
import OctalTree from "./OctalTree";
const Background = () => {
 const [Number,setNumber] = useState(0)
  return (
    <div className="bg-white text-black w-full  pt-3  text-9xl">
      <div className=" relative h-60 w-full  bg-sky-700 p-10">
        <div className="mx-5 flex items-center  justify-around  rounded-md bg-white-A700 p-4 font-bold text-white-A700">
          {[1, 3, 5, 6].map((item, index) => (
            <div
             onClick={()=>setNumber(index)}
              key={index}
              className={`"w-full  rounded-xl text-center text-black-900_87 outline-none hover:bg-sky-700  hover:text-white-A700  focus:bg-sky-800 focus:ring-2 ${index === Number ? 'bg-sky-700 px-3 pt-2 ':null}`}
            >
              Tab One
            </div>
          ))}
        </div>
        <div className="  z-10 mt-5  rounded-md bg-white-A700 p-3">
          <OctalTree />
        </div>
      </div>
    </div>
  );
};

export default Background;
