import { FaUserEdit } from "react-icons/fa";
import { FaUserSlash } from "react-icons/fa6";
import SelectField from "./SelectField";
import { useState } from "react";
import useAxios from "config/api/useAxios";

export default function AdsData({ editUser,handleOption,allow, setAllow,deleteAds,mainImage,index, id, price, title, owners, subcategory,category }) {
  const chooseOption=[{label:"Approved",value:"approve"},{label:"Reject",value:"reject"}]

const api=useAxios()
   

   

       return (
           <tr className="bg-white border-b  hover:bg-gray-50 flex gap-2 justify-between">
               <td className="px-6  font-medium text-gray-900 flex items-center w-14">
               {id}
               </td>
               <td className="px-2 flex items-center justify-center w-48 py-2.5"> <img src={mainImage} alt="userAvator" className='h-9 w-9 rounded-full' />  </td>
               <td className="px-2 flex items-center justify-center w-52"> {title} </td>
               <td className="px-2 flex items-center justify-center w-48" > {price}</td>
               <td className="px-2 flex items-center justify-center w-28">{owners}</td>
               <td className="px-2 flex items-center justify-center w-40">
                 {category?.name}
               </td>
               <td className="px-2 flex items-center justify-center w-40">
                 {subcategory?.name}
               </td>
               <td className="px-2 flex items-center justify-center w-32">
                   <div className="flex gap-4 justify-center text-xl" >
                       {/* <FaUserSlash className="text-red-500 cursor-pointer" onClick={()=>deleteAds(id)} />
                       <FaUserEdit className="cursor-pointer" /> */}
                       <SelectField
                            id="action"
                            fortext='Select'
                            value={allow.category}
                            onChange={(e)=>handleOption(e.target.value,id)}
                            options={chooseOption}
                            required
                        />
                   </div>
               </td>
               <td className="px-2 flex items-center justify-center w-32">
                   <div className="flex gap-4 justify-center text-xl" >
                     <FaUserSlash className="text-red-500 cursor-pointer" onClick={()=>deleteAds(id)} />
                       <FaUserEdit className="cursor-pointer" /> 
                     
                   </div>
               </td>
           </tr>
       )
   }
   