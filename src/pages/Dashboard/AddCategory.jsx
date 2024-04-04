import DefaultLayout from "components/Dashboard/layout/DefaultLayout";

import React from 'react'
import Dashtable from "components/Dashboard/DashTable/Dashtable";

import { useState } from "react";
import { Modal } from "antd";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import SubCategory from './SubCategory';


const AddCategory = () => {


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


    {/*~~~~~~~~~~~~~~~~temporary subcategory~~~~~~~~~~~~~~~~~~  */ }
    const addCategory = [
        { id: 5, category: "Vehicle", subcategory: "Motor Cycle,Car", Ad: "Ad Name", State: 'United Arab Emirats', },
        { id: 6, category: "Vehicle", subcategory: "Motor Cycle,Car", Ad: "Ad Name", State: 'United Arab Emirats,United State of america,Sudan', },
        { id: 7, category: "Vehicle", subcategory: "Motor Cycle,Car", Ad: "Ad Name", State: 'United Arab Emirats', },
        { id: 8, category: "Vehicle", subcategory: "Motor Cycle,Car", Ad: "Ad Name", State: 'United Arab Emirats', },
        { id: 9, category: "Vehicle", subcategory: "Motor Cycle,Car", Ad: "Ad Name", State: 'United Arab Emirats', },
        { id: 10, category: "Vehicle", subcategory: "Motor Cycle,Car", Ad: "Ad Name", State: 'United Arab Emirats', },
        { id: 11, category: "Vehicle", subcategory: "Motor Cycle,Car", Ad: "Ad Name", State: 'United Arab Emirats', },
        { id: 12, category: "Vehicle", subcategory: "Motor Cycle,Car", Ad: "Ad Name", State: 'United Arab Emirats', },
    ];




    return (
        <DefaultLayout className="flex flex-col justify-start gap-[25px]">
            <p className="font-medium text-[17px] lg:text-[20px] text-black-900_87 ml-3 mb-3">Add Category</p>
            <button type="primary" className='bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-2xl  px-10 py-4 text-[14px] lg:text-[18px] font-serif text-white-A700' onClick={showModal}>
                Add Category
            </button>
            <Modal title="Category" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <input type='text' placeholder='Enter Category Name' className='w-[18rem] md:w-full h-[45px] focus:rounded-[12px] focus:border-[1px] 
        focus:border-solid focus:border-cyan-500 text-[13px] md:text-[18px] px-2 bg-cyan-200 rounded-[12px] mb-3' />

                <div className="flex flex-col justify-start gap-[2px]">
                <p className='text-[16px] font-medium mb-[3px]'>SubCategory:</p> 
                <Stack spacing={3} sx={{ width: 500 }} className='w-[6rem] sm:w-[90%] mb-7'>
                    <Autocomplete
                        multiple
                        id="tags-standard"
                        options={city}
                        getOptionLabel={(option) => option.title}
                        defaultValue={[city[5]]}
                        className="w-[18rem] sm:w-[90%]"
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                label="Enter SubCategory"
                                placeholder="Select Subcategory"
                            />
                        )}
                    />
                </Stack>
                </div>

            </Modal>
            <Dashtable
                HeaderD="Category"
                FirstSec="Category"
                SecondSec="Sub Category"
                ThirdSec="Ad Name"
                fourthSec="Country"
                fifthSec="Action"
                datafromU={addCategory}
                popup={showModal}
            />
        </DefaultLayout>
    )
}

export default AddCategory

const city = [
    { title: 'Motor Cycle', year: 1994 },
    { title: 'Car', year: 1972 },
    { title: 'Rikhshaw', year: 1974 },
    { title: 'Cycle', year: 2008 },
    { title: 'Audi', year: 1957 },
    { title: "Used Car", year: 1993 },
    { title: 'Non Used car', year: 1994 },
    { title: 'Uni Vehicle', year: 1994 },
]