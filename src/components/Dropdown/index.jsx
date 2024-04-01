// DropdownButton.js
import React, { useState } from "react";
import arrow from "../../assets/images/up-and-down-arrow.png";
import { Dropdown, Menu, Space, Typography } from "antd";

const DropdownButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const menu = (
    <Menu onClick={props.handleItemClick}>
      <Menu.Item key="asc">Ascending</Menu.Item>
      <Menu.Item key="desc">Descending</Menu.Item>
    </Menu>
  );
  return (
    <div className="dropdown">
      <Dropdown
        overlay={menu}
        className="mr-4 flex h-[50px]  w-[174px] flex-row items-center justify-center rounded-3xl border border-solid border-black-900_87 pt-3"
      >
        <Typography.Link>
          <Space>
            <img src={arrow} alt="" className="w-[11px] " />
            <p className="mt-2 w-[100%] font-poppins font-medium text-[#000000df] ">
              {props.text}
            </p>
          </Space>
        </Typography.Link>
      </Dropdown>
    </div>
  );
};

export default DropdownButton;
