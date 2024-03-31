import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import dataJSON from "../../public/data.json";

export const Table = ({ rows, deleteRow, editRow }) => {
  const fields = Object.keys(Object.values(dataJSON)[0]).filter(
    (item) => !item.startsWith("delta_"),
  );

  return (
    <div className="table-wrapper max-w-full overflow-x-auto">
      <table className="table">
        <thead>
          <tr className="bg-gray-2 dark:bg-meta-4 text-left">
            <th className="text-black dark:text-white min-w-[220px] py-4 px-4 font-medium xl:pl-11">
              Bond
            </th>
            <th className="text-black dark:text-white min-w-[150px] py-4 px-4 font-medium">
              Paramter
            </th>
            <th className="text-black dark:text-white py-4 px-4 font-medium">
              Criterion
            </th>
            <th className="text-black dark:text-white py-4 px-4 font-medium">
              Value to give alert
            </th>
            <th className="text-black dark:text-white py-4 px-4 font-medium">
              Alert type
            </th>
            <th className="text-black dark:text-white py-4 px-4 font-medium">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            return (
              <tr key={idx} className="content-center">
                <td className="dark:border-strokedark border-b border-[#eee] py-5 px-4">
                  {row.id}
                </td>
                <td className="dark:border-strokedark border-b border-[#eee] py-5 px-4">
                  <span className={`label label-${row.para}`}>{row.para}</span>
                </td>

                <td className="dark:border-strokedark border-b border-[#eee] py-5 px-4">
                  <span>
                    {row.criterion == 0
                      ? "goes down by"
                      : row.criterion == 1
                        ? "goes up by"
                        : row.criterion == 2
                          ? "is smaller than"
                          : row.criterion == 3
                            ? "is greater than"
                            : "is equal to"}
                  </span>
                </td>
                <td className="dark:border-strokedark border-b border-[#eee] py-5 px-4">
                  {row.value}
                </td>
                <td className="dark:border-strokedark border-b border-[#eee] py-5 px-4">
                  <span>
                    {row.type == 0
                      ? "Info"
                      : row.type == 1
                        ? "Warning"
                        : "Alert"}
                  </span>
                </td>

                <td className="dark:border-strokedark border-b border-[#eee] py-5 px-4">
                  <span className="actions flex grid-cols-2 gap-4">
                    <BsFillTrashFill
                      className="delete-btn cursor-pointer"
                      onClick={() => deleteRow(idx)}
                    />

                    <BsFillPencilFill
                      className="edit-btn cursor-pointer"
                      onClick={() => editRow(idx)}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
