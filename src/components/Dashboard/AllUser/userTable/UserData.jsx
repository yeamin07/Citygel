import { FaUserEdit } from "react-icons/fa";
import { FaUserSlash } from "react-icons/fa6";

export default function UserData({ editUser,deleteUser,email,index, id, ads, phoneNumber, membership, fullName }) {
    const lengthads=ads.length

    const handleTittle = (tittle) => {
       var words = tittle.split(/\s+/);
   
       // Check if the number of words is more than 30
       if (words.length > 3) {
         // Join the first 30 words and append "..."
         return words.slice(0, 3).join(" ") + "...";
       } else {
         return tittle;
       }
     };

       return (
           <tr className="bg-white border-b  hover:bg-gray-50 flex gap-2 justify-between">
               <td className="px-6  font-medium text-gray-900 flex items-center w-14">
               {(index + 1) < 10 ? `0${index + 1}` : index + 1}
               </td>
               <td className="px-2 flex items-center justify-center w-28 py-2.5"> <img src={'https://randomuser.me/api/portraits/men/5.jpg'} alt="userAvator" className='h-9 w-9 rounded-full' />  </td>
               <td className="px-2 flex items-center justify-center w-32"> {handleTittle(email)} </td>
               <td className="px-2 flex items-center justify-center w-48" > {fullName}</td>
               <td className="px-2 flex items-center justify-center w-52">{phoneNumber}</td>
               <td className="px-2 flex items-center justify-center w-40">
                 {lengthads}
               </td>
               <td className="px-2 flex items-center justify-center w-32">
                   <div className="flex gap-4 justify-center text-xl" >
                       <FaUserSlash className="text-red-500 cursor-pointer" onClick={()=>deleteUser(email)} />
                       <FaUserEdit className="cursor-pointer" />
                   </div>
               </td>
           </tr>
       )
   }
   