import Dashdata from "./Dashdata";
import { trash } from "assets/Allimages";

function Dashtable({
  HeaderD,
  FirstSec,
  SecondSec,
  thirdSec,
  fourthSec,
  fifthSec,
  datafromU,
  popup,
  deleteItem,
  category,
}) {
  // Dummy Data for user
  console.log(category);
  return (
    <div className="container relative mx-auto mt-5 h-auto w-full overflow-auto rounded-[25px] border-[2px] border-solid border-gray-300 !bg-current px-9 pb-9 shadow-sm  lg:rounded-[35px]">
      <h1 className="absolute left-4 ml-11 mt-5 mb-10 text-[26px] font-medium sm:text-[28px] lg:text-[30px] ">
        {HeaderD}
      </h1>
      <table className="mx-auto  mt-20 h-auto w-full  rounded-[25px] border-solid  border-gray-300 pb-5 shadow-sm lg:rounded-[35px]">
        <thead className=" !text-gray-100 ">
          <tr className="flex w-full justify-around rounded-t-3xl bg-black-2 py-[25px] text-[13px] sm:text-[15px] lg:text-[18px]">
            <th className="flex w-[20rem] justify-center font-extralight">
              {FirstSec}
            </th>
            <th className="flex w-[20rem] justify-start border-l-[1px] border-solid border-gray-500 pl-1 font-extralight">
              {SecondSec}
            </th>
            <th className="flex w-[20rem] justify-start border-l-[1px] border-solid border-gray-500 pl-1 font-extralight">
              {thirdSec}
            </th>
            <th className="flex w-[15rem] justify-start border-l-[1px] border-solid border-gray-500 pl-1 font-extralight">
              {fourthSec}
            </th>
            <th className="flex w-[10rem] justify-start border-l-[1px] border-solid border-gray-500 pl-1 font-extralight">
              {fifthSec}
            </th>
          </tr>
        </thead>
        <tbody className="overflow-auto">
          {category?.map((data, i) => (
            <Dashdata
              popup={popup}
              key={data.id}
              {...{ data, deleteItem }}
              index={i}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashtable;
