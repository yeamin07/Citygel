// DropdownButton.js
import React, { useState } from "react";
import arrow from "../../assets/images/up-and-down-arrow.png";
import { Dropdown, Space, Typography } from "antd";




const DropdownButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    console.log(`Selected item: ${item}`);
    setIsOpen(false);
  };
  const items = [
    {
      key: '1',
      label: 'Item 1',
    },
    {
      key: '2',
      label: 'Item 2',
    },
    {
      key: '3',
      label: 'Item 3',
    },
  ];
  return (
    <div className="dropdown">
    
       <Dropdown
       className="w-[174px] h-[50px] rounded-3xl  border border-solid border-black-900_87 flex flex-row items-center justify-center pt-3 mr-4"
    menu={{
      items,
      selectable: true,
      defaultSelectedKeys: ['3'],
    }}
  >
    <Typography.Link>
      <Space >

       <img src={arrow} alt="" className="w-[11px] " />
        <p className="w-[100%] text-[#000000df] font-poppins font-medium mt-2 ">{props.text}</p>
       
      </Space>
    </Typography.Link>
  </Dropdown>
    </div>
  );
};

export default DropdownButton;
