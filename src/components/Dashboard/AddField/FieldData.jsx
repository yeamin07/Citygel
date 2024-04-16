import { FaUserEdit } from "react-icons/fa";
import { FaUserSlash } from "react-icons/fa6";
import useAxios from "config/api/useAxios";

export default function FieldData({
  type,
  label,
  name,
  options,
  subcategory,
  id,
  index,
  deleteAds,
}) {
  const chooseOption = [
    { label: "Approved", value: "approve" },
    { label: "Reject", value: "reject" },
  ];

  const api = useAxios();

  return (
    <tr className="bg-white flex  justify-between gap-2 border-b hover:bg-gray-50">
      <td className="flex  w-10 items-center px-6 font-medium text-gray-900">
        {index + 1}
      </td>

      <td className="flex w-52 items-center justify-center px-2">
        {" "}
        {subcategory?.name}
      </td>
      <td className="flex w-48 items-center justify-center px-2">
        {" "}
        {options?.map((item) => item, "")}
      </td>
      <td className="flex w-28 items-center justify-center px-2">
        {type || ""}
      </td>
      <td className="flex w-40 items-center justify-center px-2">
        {" "}
        {name || ""}
      </td>

      <td className="flex w-56 items-center justify-center px-2 text-[12px]">
        {label}
      </td>
      <td className="flex w-32 items-center justify-center px-2">
        <div className="flex justify-center gap-4 text-xl">
          <FaUserSlash
            className="cursor-pointer text-red-500"
            onClick={() => deleteAds(name)}
          />
          <FaUserEdit className="cursor-pointer" />
        </div>
      </td>
    </tr>
  );
}
