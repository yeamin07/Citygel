import { FaUserSlash } from "react-icons/fa6"
import { FaUserEdit } from "react-icons/fa";
import { trash } from "assets/Allimages";

export default function UserDatas({tit, picture,Name, Email,Phone_number,Action, index }) {
    return (
        <tr className="bg-white border-b text-[12px] sm:text-[15px] lg:text-[17px] hover:bg-gray-50 flex text-gray-500 justify-between mb-2 h-auto no-scrollbar">
            <td className="px-6  font-medium text-gray-900 flex items-center w-[20rem] overflow-auto">
                <input type="checkbox"  className="w-[16px] h-[16px] border-[1px] border-solid border-black-900_87 rounded-[5px] mr-6"/>
                <div className="flex justify-start  items-center gap-[2.5px] text-gray-500"><img src={picture} alt="userAvator" className='h-7 w-7 lg:h-9 lg:w-9 rounded-full' />{tit}</div>
            </td>
            <td className="px-2 flex items-center justify-start  w-[20rem]"> {Name} </td>
            <td className="px-2 flex items-center justify-start  w-[16rem]" > {Email}</td>
            <td className="px-2 flex items-center justify-start  w-[16rem]">{Phone_number}</td>
            {/* <td className="px-2 flex items-center justify-start  w-40">
                <button className={`w-[6.7rem] ${status === 'Ban' ? 'bg-blue-100 border-blue-100 text-blue-500 hover:bg-transparent ' : status === 'Banned' ? 'bg-gray-100 border-gray-100 text-gray-600 hover:bg-transparent hover:text-black hover:border-black' : 'bg-[#56C2FF] border-[#56C2FF] hover:text-[#56C2FF]'}  py-1.5 font-medium rounded border `}
                > {status}
                </button>
            </td> */}
            <td className="px-2 flex items-center justify-start  w-[7rem]">
                <div className="flex justify-start  p-2 bg-red-100 rounded-lg" >
                    <img src={trash} 
                    className="w-[20px] h-[21.5px]"/>
                </div>
            </td>
        </tr>
    )
}
