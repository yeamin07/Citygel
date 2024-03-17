import React from 'react'
import { man_pic,logo,yellowcurve,bluecurve,greycurve,sittingman } from 'assets/Allimages'
import { FaCaretDown,FaAngleDown } from "react-icons/fa";
const Fullheader = () => {
  return (
    <div>
        <header className=' bg-gradient-to-r from-[rgb(16,56,76)] to-[rgb(21,60,77)] w-screen h-[100px] mq800:h-[80px] flex justify-between absolute'>
         <div className='flex justify-center items-center flex-grow'><img src={logo} className='h-full mq800:h-[56px]'/></div>
         <div className='flex justify-center items-center h-[70px] mq750:h-[60px] mt-2 mq800:space-x-0 space-x-4 flex-grow-0 '>
            <div className='mq800:hidden block'>
            <h4 className='text-[18px] font-medium font-poppins'>John Smith</h4>
            <p className='text-teal-400 text-[13px]'>My Account <FaCaretDown /></p>
            </div>
            <div className='mq800:hidden block'><img src={man_pic} className='h-full rounded-full mt-[10px] mq750:mt-6px w-[50px] h-[50px] mr-10 mq750:mr-0'/></div>
            {/**Hidden part for mobile */}
            <div className='hidden mq800:block mt-4 w-[130px] h-[30px] border border-sky-500 rounded-2xl flex justify-center items-center
             '>
         <p className="text-[11px] text-white-A700">Change Location <FaAngleDown /></p>   
            </div>

         </div>
        </header>
        <div className='flex'>
            <img src={yellowcurve} className='w-1/6 h-[1000px] mq800:h-[500px] relative top-[100px] mq750:top-[80px] flex-grow'/>
            <img src={bluecurve} className='w-5/6 h-[840px] mq800:h-[390px]  left-0 top-0 flex-grow-0'/>
            <img src={sittingman} className='absolute mq800:right-0 mq800:top-24 right-20 top-48 mq800:w-[320px] mq800:h-[290px] w-[720px] h-[660px]'/>
        </div>
        <div className='absolute top-[300px] left-20 mq800:relative mq800:top-0 mq800:left-6 w-full'>
        <h4 className='text-[48px] mq800:text-[22px]  font-poppins pb-3'>Pricing & Plans</h4>
           <p className='text-[26px] mq800:text-[13px] font-poppins'>Lorem Ipsum is simply dummy text<br/> of the printing and typesetting Lorem Ipsum is<br/>
            simply dummy text of the printing and typesetting Lorem </p> 
        </div>
    </div>
  )
}

export default Fullheader