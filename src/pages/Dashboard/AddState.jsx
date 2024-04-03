import DefaultLayout from "components/Dashboard/layout/DefaultLayout";

import React from 'react'
import Dashtable from "components/Dashboard/DashTable/Dashtable";

import { useState } from "react";
import { Modal } from "antd";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';


const State = () => {


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
    const SubCategoryData = [
        { id: 5, category: "Adu Dhabi,Dubai", subcategory: "Vehicle", Ad: "Ad Name", State: 'United Arab Emirats', },
        { id: 6, category: "Adu Dhabi,Dubai", subcategory: "Vehicle", Ad: "Ad Name", State: 'United Arab Emirats,United State of america,Sudan', },
        { id: 7, category: "Adu Dhabi,Dubai", subcategory: "Vehicle", Ad: "Ad Name", State: 'United Arab Emirats', },
        { id: 8, category: "Adu Dhabi,Dubai", subcategory: "Vehicle", Ad: "Ad Name", State: 'United Arab Emirats', },
        { id: 9, category: "Adu Dhabi,Dubai", subcategory: "Vehicle", Ad: "Ad Name", State: 'United Arab Emirats', },
        { id: 10, category: "Adu Dhabi,Dubai", subcategory: "Vehicle", Ad: "Ad Name", State: 'United Arab Emirats', },
        { id: 11, category: "Adu Dhabi,Dubai", subcategory: "Vehicle", Ad: "Ad Name", State: 'United Arab Emirats', },
        { id: 12, category: "Adu Dhabi,Dubai", subcategory: "Vehicle", Ad: "Ad Name", State: 'United Arab Emirats', },
    ];




    return (
        <DefaultLayout className="flex flex-col justify-start gap-[25px]">
            <p className="font-medium text-[17px] lg:text-[20px] text-black-900_87 ml-3 mb-3">Add State</p>
            <button type="primary" className='bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-2xl  px-10 py-4 text-[14px] lg:text-[18px] font-serif text-white-A700' onClick={showModal}>
                Add State
            </button>
            <Modal title="State" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <input type='text' placeholder='Enter State Name' className='w-[18rem] md:w-full h-[45px] focus:rounded-[12px] focus:border-[1px] 
        focus:border-solid focus:border-cyan-500 text-[13px] md:text-[18px] px-2 bg-cyan-200 rounded-[12px]' />

                <div className="flex flex-col justify-start gap-[2px]">
                <p className='text-[16px] font-medium mb-[3px]'>City:</p> 
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
                                label="Enter City"
                                placeholder="Select City"
                            />
                        )}
                    />
                </Stack>
                </div>

            </Modal>
            <Dashtable
                HeaderD="All State"
                FirstSec="State"
                SecondSec="City"
                ThirdSec="Country"
                fourthSec="Category"
                fifthSec="Action"
                datafromU={SubCategoryData}
                popup={showModal}
            />
        </DefaultLayout>
    )
}

export default State

const city = [
    { title: 'Juha', year: 1994 },
    { title: 'Abu Nerah', year: 1972 },
    { title: 'Shertu', year: 1974 },
    { title: 'Ajmhi', year: 2008 },
    { title: 'Al gui', year: 1957 },
    { title: "Ras Al Turak", year: 1993 },
    { title: 'Tujairah', year: 1994 },
    { title: 'Tul Al Quwain', year: 1994 },
]