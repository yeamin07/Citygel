// DropdownButton.js
import React, { useState } from "react";
import arrow from "../../assets/images/up-and-down-arrow.png";
const DropdownButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    console.log(`Selected item: ${item}`);
    setIsOpen(false);
  };
 
  return (
    <div className="dropdown">
      <button
        className="w-[174px] h-[50px] rounded-3xl border border-solid border-black-900_87 flex flex-row  justify-center items-center mr-4"
        onClick={handleToggle}
      >
        <img src={arrow} alt="" className="w-[22px] h-[27px] pl-1" />
        {/* <p className="w-[80%]">{props.text}</p> */}
        <div tabIndex={0} role="button" className="btn m-1">{props.text}</div>
      </button>
      {isOpen && (
        <div className="dropdown">
          
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 absolute bg-white-A700">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
