import { FaUserEdit } from "react-icons/fa";
import { FaUserSlash } from "react-icons/fa6";
import SelectField from "./SelectField";
import { useState } from "react";
import useAxios from "config/api/useAxios";

export default function AdsData({
  editUser,
  handleOption,
  allow,
  setAllow,
  deleteAds,
  mainImage,
  index,
  id,
  price,
  title,
  owners,
  subcategory,
  category,
}) {
  const chooseOption = [
    { label: "Approved", value: "approve" },
    { label: "Reject", value: "reject" },
  ];

  const api = useAxios();

  return (
    <tr className="bg-white flex  justify-between gap-2 border-b hover:bg-gray-50">
      <td className="flex  w-14 items-center px-6 font-medium text-gray-900">
        {id}
      </td>
      <td className="flex w-48 items-center justify-center px-2 py-2.5">
        {" "}
        <img
          src={mainImage}
          alt="userAvator"
          className="h-9 w-9 rounded-full"
        />{" "}
      </td>
      <td className="flex w-52 items-center justify-center px-2"> {title} </td>
      <td className="flex w-48 items-center justify-center px-2"> {price}</td>
      <td className="flex w-28 items-center justify-center px-2">{owners}</td>
      <td className="flex w-40 items-center justify-center px-2">
        {category?.name}
      </td>
      <td className="flex w-40 items-center justify-center px-2">
        {subcategory?.name}
      </td>
      <td className="flex w-32 items-center justify-center px-2">
        <div className="flex justify-center gap-4 text-xl">
          {/* <FaUserSlash className="text-red-500 cursor-pointer" onClick={()=>deleteAds(id)} />
                       <FaUserEdit className="cursor-pointer" /> */}
          <SelectField
            id="action"
            fortext="Select"
            value={allow.category}
            onChange={(e) => handleOption(e.target.value, id)}
            options={chooseOption}
            required
          />
        </div>
      </td>
      <td className="flex w-32 items-center justify-center px-2">
        <div className="flex justify-center gap-4 text-xl">
          <FaUserSlash
            className="cursor-pointer text-red-500"
            onClick={() => deleteAds(id)}
          />
          <FaUserEdit className="cursor-pointer" />
        </div>
      </td>
    </tr>
  );
}
