
import UserDatas from './UserDatas'
import { trash } from "assets/Allimages";

 function Tables() {
    // Dummy Data for users
    const userDatas = [
        { id: 5,tit:"Ad Name", picture: "https://randomuser.me/api/portraits/men/5.jpg", Name: "Jhon new man ", Email: 'Newman@gamil.com',  Phone_number: "+1 234 567 890",Action:"https://ibb.co/bQHnrxN" },
        { id: 6,tit:"Ad Name", picture: "https://randomuser.me/api/portraits/women/6.jpg", Name: "Jhon new man ", Email: 'Newman@gamil.com',  Phone_number: "+1 234 567 890",Action: {trash} },
        { id: 7,tit:"Ad Name", picture: "https://randomuser.me/api/portraits/men/7.jpg", Name: "Jhon new man ", Email: 'Newman@gamil.com',  Phone_number: "+1 234 567 890",Action: {trash} },
        { id: 8,tit:"Ad Name", picture: "https://randomuser.me/api/portraits/women/8.jpg", Name: "Jhon new man ", Email: 'Newman@gamil.com',  Phone_number: "+1 234 567 890",Action: {trash} },
        { id: 9,tit:"Ad Name", picture: "https://randomuser.me/api/portraits/men/9.jpg", Name: "Jhon new man ", Email: 'Newman@gamil.com',  Phone_number: "+1 234 567 890",Action: {trash} },
        { id: 10,tit:"Ad Name", picture: "https://randomuser.me/api/portraits/women/10.jpg", Name: "Jhon new man ", Email: 'Newman@gamil.com',  Phone_number: "+1 234 567 890",Action: {trash} },
        { id: 11,tit:"Ad Name", picture: "https://randomuser.me/api/portraits/men/5.jpg", Name: "Jhon new man ", Email: 'Newman@gamil.com',  Phone_number: "+1 234 567 890",Action:"https://ibb.co/bQHnrxN" },
        { id: 12,tit:"Ad Name", picture: "https://randomuser.me/api/portraits/women/6.jpg", Name: "Jhon new man ", Email: 'Newman@gamil.com',  Phone_number: "+1 234 567 890",Action: {trash} },
        { id: 13,tit:"Ad Name", picture: "https://randomuser.me/api/portraits/men/7.jpg", Name: "Jhon new man ", Email: 'Newman@gamil.com',  Phone_number: "+1 234 567 890",Action: {trash} },
        { id: 14,tit:"Ad Name", picture: "https://randomuser.me/api/portraits/women/8.jpg", Name: "Jhon new man ", Email: 'Newman@gamil.com',  Phone_number: "+1 234 567 890",Action: {trash} },
        { id: 15,tit:"Ad Name", picture: "https://randomuser.me/api/portraits/men/9.jpg", Name: "Jhon new man ", Email: 'Newman@gamil.com',  Phone_number: "+1 234 567 890",Action: {trash} },
        { id: 16,tit:"Ad Name", picture: "https://randomuser.me/api/portraits/women/10.jpg", Name: "Jhon new man ", Email: 'Newman@gamil.com',  Phone_number: "+1 234 567 890",Action: {trash} },
        { id: 17,tit:"Ad Name", picture: "https://randomuser.me/api/portraits/men/5.jpg", Name: "Jhon new man ", Email: 'Newman@gamil.com',  Phone_number: "+1 234 567 890",Action:"https://ibb.co/bQHnrxN" },
        { id: 18,tit:"Ad Name", picture: "https://randomuser.me/api/portraits/women/6.jpg", Name: "Jhon new man ", Email: 'Newman@gamil.com',  Phone_number: "+1 234 567 890",Action: {trash} },
        { id: 19,tit:"Ad Name", picture: "https://randomuser.me/api/portraits/men/7.jpg", Name: "Jhon new man ", Email: 'Newman@gamil.com',  Phone_number: "+1 234 567 890",Action: {trash} },
        { id: 20,tit:"Ad Name", picture: "https://randomuser.me/api/portraits/women/8.jpg", Name: "Jhon new man ", Email: 'Newman@gamil.com',  Phone_number: "+1 234 567 890",Action: {trash} },
        { id: 21,tit:"Ad Name", picture: "https://randomuser.me/api/portraits/men/9.jpg", Name: "Jhon new man ", Email: 'Newman@gamil.com',  Phone_number: "+1 234 567 890",Action: {trash} },
        { id: 22,tit:"Ad Name", picture: "https://randomuser.me/api/portraits/women/10.jpg", Name: "Jhon new man ", Email: 'Newman@gamil.com',  Phone_number: "+1 234 567 890",Action: {trash} },
    ];

    return (
        <div className="container mx-auto w-full rounded-[25px] lg:rounded-[35px] mt-5 overflow-auto !bg-current border-[2px] border-solid border-gray-300 shadow-sm h-auto pb-9 px-9  relative">
             <h1 className='ml-11 mt-5 mb-10 text-[26px] sm:text-[28px] lg:text-[30px] font-medium absolute left-4 '>Enquiries</h1>
            <table className="w-full  mx-auto h-auto mt-20  border-solid border-gray-300  shadow-sm rounded-[25px] lg:rounded-[35px] pb-5">
                <thead  className=" !text-gray-100 ">
                    <tr className="flex w-full py-[25px] justify-around rounded-t-3xl bg-black-2">
                            <th className='w-[20rem] flex justify-center font-extralight'>Title</th>
                            <th className='w-[20rem] flex justify-start border-l-[1px] border-solid border-gray-500 pl-1 font-extralight'>Name</th>
                            <th className='w-[16rem] flex justify-start border-l-[1px] border-solid border-gray-500 pl-1 font-extralight'>Email</th>
                            <th className='w-[16rem] flex justify-start border-l-[1px] border-solid border-gray-500 pl-1 font-extralight'>Phone number</th>
                            <th className='w-[7rem] flex justify-start border-l-[1px] border-solid border-gray-500 pl-1 font-extralight'>Action</th>
                    </tr>
                </thead>
                <tbody className='overflow-auto'>
                    {userDatas?.map((user, i) => <UserDatas key={user.id} {...user} index={i} />)}
                </tbody>
            </table>
        </div>
    )
}

export default Tables;