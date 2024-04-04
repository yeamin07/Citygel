import DefaultLayout from "components/Dashboard/layout/DefaultLayout";

import React from 'react'
import Dashtable from "components/Dashboard/DashTable/Dashtable";

import { useState } from "react";
import { Modal } from "antd";


const SubCategory = () => {
       

   const [isModalOpen, setIsModalOpen] = useState(false);
   const showModal = () => {
     setIsModalOpen(true);
   };
   const handleOk = () => {
     setIsModalOpen(false);
   };
   const handleCancel = () => {
     setIsModalOpen(false);
   };


       {/*~~~~~~~~~~~~~~~~temporary subcategory~~~~~~~~~~~~~~~~~~  */}
    const SubCategoryData = [
        { id: 5,category:"Cycle,Dingi,Sonart,Texi,Helicopter,Flying Weels,Mercedes Benz,Fararri", subcategory: "Vehicle", Ad: "Ad Name", State: 'United Arab Emirats',},
        { id: 6,category:"Motor,Bycycle,Boat", subcategory: "Vehicle", Ad: "Ad Name", State: 'United Arab Emirats,United State of america,Sudan', },
        { id: 7,category:"Motor,Bycycle,Boat", subcategory: "Vehicle", Ad: "Ad Name", State: 'United Arab Emirats', },
        { id: 8,category:"Motor,Bycycle,Boat", subcategory: "Vehicle", Ad: "Ad Name", State: 'United Arab Emirats', },
        { id: 9,category:"Motor,Bycycle,Boat", subcategory: "Vehicle", Ad: "Ad Name", State: 'United Arab Emirats', },
        { id: 10,category:"Motor,Bycycle,Boat", subcategory: "Vehicle", Ad: "Ad Name", State: 'United Arab Emirats', },
        { id: 11,category:"Motor,Bycycle,Boat", subcategory: "Vehicle", Ad: "Ad Name", State: 'United Arab Emirats', },
        { id: 12,category:"Motor,Bycycle,Boat", subcategory: "Vehicle", Ad: "Ad Name", State: 'United Arab Emirats', },
    ];




  return (
    <DefaultLayout className="flex flex-col justify-start gap-[25px]">
       <p className="font-medium text-[17px] lg:text-[20px] text-black-900_87 ml-3 mb-3">Add SubCategory</p>
       <button type="primary" className='bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-2xl  px-10 py-4 text-[14px] lg:text-[18px] font-serif text-white-A700' onClick={showModal}>
              Add SubCategory
            </button>
            <Modal title="SubCategory" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <input type='text' placeholder='Enter SubCategory Name'  className='w-[18rem] md:w-full h-[45px] focus:rounded-[12px] focus:border-[1px] 
        focus:border-solid focus:border-cyan-500 text-[13px] md:text-[18px] px-2 bg-cyan-200 rounded-[12px]' />
            </Modal>
        <Dashtable 
             HeaderD="SubCategories"
            FirstSec="SubCategory"
            SecondSec="Category"
            ThirdSec="Ad"
            fourthSec="State"
            fifthSec="Action"
            datafromU={SubCategoryData}
            popup={showModal}
        />
     </DefaultLayout>
  )
}

export default SubCategory