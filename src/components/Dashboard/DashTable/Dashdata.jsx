import { FaUserSlash } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { trash } from "assets/Allimages";

export default function Dashdata({
  category,
  subcategory,
  Ad,
  State,
  data,
  id,
  index,
  deleteItem,
  popup,
}) {
  console.log(data);
  return (
    <tr className="bg-white no-scrollbar mb-2 flex h-auto justify-between border-b text-[12px] text-gray-500 hover:bg-gray-50 sm:text-[15px] lg:text-[17px]">
      <td className="flex  items-center px-6 font-medium text-gray-900 ">
        <div className="flex w-[20rem] items-center justify-start gap-[5px] overflow-auto">
          {/* <input type="checkbox"  className="w-[16px] h-[16px] border-[1px] border-solid border-black-900_87 rounded-[5px] mr-6"/> */}
          <p className="inline-block">{data?.name}</p>
        </div>
        {/* <input type="checkbox"  className="w-[16px] h-[16px] border-[1px] border-solid border-black-900_87 rounded-[5px] mr-6"/>
                <div className="flex justify-start  items-center gap-[2.5px] text-gray-500"><img src={picture} alt="userAvator" className='h-7 w-7 lg:h-9 lg:w-9 rounded-full' />{tit}</div> */}
      </td>
      <td className="flex w-[20rem] items-center justify-start  px-2">
        {" "}
        {data?.subcategories
          ? data?.subcategories.map((item) => item.name)
          : data?.state
            ? data?.state.map((item) => item.name)
            : ""}
      </td>
      <td className="flex w-[20rem] items-center justify-start  px-2">
        {" "}
        {data?.ads ? data?.ads.map((item) => item.title) : ""}
      </td>
      <td className="flex w-[15rem] items-center justify-start  px-2">
        {data.updatedAt}
      </td>
      {/* <td className="px-2 flex items-center justify-start  w-40">
                <button className={`w-[6.7rem] ${status === 'Ban' ? 'bg-blue-100 border-blue-100 text-blue-500 hover:bg-transparent ' : status === 'Banned' ? 'bg-gray-100 border-gray-100 text-gray-600 hover:bg-transparent hover:text-black hover:border-black' : 'bg-[#56C2FF] border-[#56C2FF] hover:text-[#56C2FF]'}  py-1.5 font-medium rounded border `}
                > {status}
                </button>
            </td> */}
      <td className="mx-auto flex w-[10rem] items-center  justify-start px-2">
        <div className="flex w-[90%] flex-row justify-center gap-[3px] ">
          <button
            onClick={() => popup(data)}
            className="rounded-[7px] bg-cyan-600 px-4 py-2 text-[12px] text-white-A700 hover:bg-cyan-800"
          >
            Edit
          </button>
          <button
            onClick={() => deleteItem(data?.name)}
            className="rounded-[7px] bg-red-500 px-4 py-2 text-[12px] text-white-A700 hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
