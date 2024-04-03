
import Dashdata from './Dashdata'
import { trash } from "assets/Allimages";

 function Dashtable({ HeaderD,FirstSec,SecondSec,ThirdSec,fourthSec,fifthSec,datafromU,popup}) {
    // Dummy Data for user

    return (
        <div className="container mx-auto w-full rounded-[25px] lg:rounded-[35px] mt-5 overflow-auto !bg-current border-[2px] border-solid border-gray-300 shadow-sm h-auto pb-9 px-9  relative">
             <h1 className='ml-11 mt-5 mb-10 text-[26px] sm:text-[28px] lg:text-[30px] font-medium absolute left-4 '>{HeaderD}</h1>
            <table className="w-full  mx-auto h-auto mt-20  border-solid border-gray-300  shadow-sm rounded-[25px] lg:rounded-[35px] pb-5">
                <thead  className=" !text-gray-100 ">
                    <tr className="flex w-full py-[25px] text-[13px] sm:text-[15px] lg:text-[18px] justify-around rounded-t-3xl bg-black-2">
                            <th className='w-[20rem] flex justify-center font-extralight'>{FirstSec}</th>
                            <th className='w-[20rem] flex justify-start border-l-[1px] border-solid border-gray-500 pl-1 font-extralight'>{SecondSec}</th>
                            <th className='w-[20rem] flex justify-start border-l-[1px] border-solid border-gray-500 pl-1 font-extralight'>{ThirdSec}</th>
                            <th className='w-[15rem] flex justify-start border-l-[1px] border-solid border-gray-500 pl-1 font-extralight'>{fourthSec}</th>
                            <th className='w-[10rem] flex justify-start border-l-[1px] border-solid border-gray-500 pl-1 font-extralight'>{fifthSec}</th>
                    </tr>
                </thead>
                <tbody className='overflow-auto'>
                    {datafromU?.map((category, i) => <Dashdata popup={popup}  key={category.id} {...category} index={i} />)}
                </tbody>
            </table>
        </div>
    )
}

export default Dashtable;