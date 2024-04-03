import React from 'react'
// const { createRoot } = ReactDOM;
import { useState } from "react";
import { Modal } from "antd";
import DefaultLayout from "components/Dashboard/layout/DefaultLayout";

// import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Dashtable from 'components/Dashboard/DashTable/Dashtable';

const AddCategory = () => {

  //  const [noteTitle, setNoteTitle] = useState('');
  //  const [notes, setnotes] = useState([]);
  //  const [editMode, setEditMode] = useState(false);
  //  const [editableNote, setEditableNote] = useState(null);

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

  {/*~~~~~~~Edit button~~~~~~~~~~~ */}

  const handledit=()=>{
       
  }
    {/*~~~~~~~~~~~Edit category~~~~~~~~~~ */}

        //~~~~~~~~~~~~~~~~~~~~~To update a title~~~~~~~~~~~~~~~
  //   const updatehandler = (e) => {
  //     e.preventDefault();
  //     if (!noteTitle) {
  //         return alert("please enter a valid name!");
  //     }
  //     const newnoted = notes.map((item) => {
  //         if (item.id ===editableNote.id) {
  //             item.title = noteTitle;
  //         }
  //         return item;
  //     }


  //     )
  //     setnotes(newnoted)
  //     setEditMode(false)
  //     setEditableNote(null)
  //     setNoteTitle('');
  // }
  //~~~~~~~~~~~~~~~~~~~~~~To Delete A Node~~~~~~~~~~~~~~~~~
  // const removehandler = (id) => {
  //     const newnotes = notes.filter((item) => item.id !== id);
  //     setnotes(newnotes);
  // }
 

  // const edithandler = (id) => {
  //   const TobeEditedNote = notes.find((item) => item.id === id);
  //   setEditMode(true);
  //   setEditableNote(TobeEditedNote);
  //   setNoteTitle(TobeEditedNote.title);
  // }  
   



{/*~~~~~~~~~~~~~~~~~~~~~Optional data for table~~~~~~~~~~~~~~~~~~~~~~~ */}
  const CategoryData = [
    { id: 5,category:"Vehicle", subcategory: "Cycle,Dingi,Sonartori", Ad: "Ad Name", State: 'United Arab Emirats',},
    { id: 6,category:"Vehicle", subcategory: "Motor,Bycycle,Boat", Ad: "Ad Name", State: 'United Arab Emirats', },
    { id: 7,category:"Vehicle", subcategory: "Motor,Bycycle,Boat", Ad: "Ad Name", State: 'United Arab Emirats', },
    { id: 8,category:"Vehicle", subcategory: "Motor,Bycycle,Boat", Ad: "Ad Name", State: 'United Arab Emirats', },
    { id: 9,category:"Vehicle", subcategory: "Motor,Bycycle,Boat", Ad: "Ad Name", State: 'United Arab Emirats', },
    { id: 10,category:"Vehicle", subcategory: "Motor,Bycycle,Boat", Ad: "Ad Name", State: 'United Arab Emirats', },
    { id: 11,category:"Vehicle", subcategory: "Motor,Bycycle,Boat", Ad: "Ad Name", State: 'United Arab Emirats', },
    { id: 12,category:"Vehicle", subcategory: "Motor,Bycycle,Boat", Ad: "Ad Name", State: 'United Arab Emirats', },
    { id: 13,category:"Vehicle", subcategory: "Motor,Bycycle,Boat", Ad: "Ad Name", State: 'United Arab Emirats', },
    { id: 14,category:"Vehicle", subcategory: "Motor,Bycycle,Boat", Ad: "Ad Name", State: 'United Arab Emirats', },
    { id: 15,category:"Vehicle", subcategory: "Motor,Bycycle,Boat", Ad: "Ad Name", State: 'United Arab Emirats', },
    { id: 16,category:"Vehicle", subcategory: "Motor,Bycycle,Boat", Ad: "Ad Name", State: 'United Arab Emirats', },
    { id: 17,category:"Vehicle", subcategory: "Motor,Bycycle,Boat", Ad: "Ad Name", State: 'United Arab Emirats',},
    { id: 18,category:"Vehicle", subcategory: "Motor,Bycycle,Boat", Ad: "Ad Name", State: 'United Arab Emirats', },
    { id: 19,category:"Vehicle", subcategory: "Motor,Bycycle,Boat", Ad: "Ad Name", State: 'United Arab Emirats', },
    { id: 20,category:"Vehicle", subcategory: "Motor,Bycycle,Boat", Ad: "Ad Name", State: 'United Arab Emirats', },
    { id: 21,category:"Vehicle", subcategory: "Motor,Bycycle,Boat", Ad: "Ad Name", State: 'United Arab Emirats', },
    { id: 22,category:"Vehicle", subcategory: "Motor,Bycycle,Boat", Ad: "tAd Name", State: 'United Arab Emirats', },
];





  return (
    <DefaultLayout>
      <div className='container h-auto'>

        {/*Add Category */}
        <div className='flex flex-col justify-start gap-[14px] sm:justify-start sm:gap-[20px] md:flex-row items-center'>
          <p className='lg:text-[25px] text-[16px] font-serif sm:text-[16px]'>Add Category:</p>
          <div className="">
            <button type="primary" className='bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-2xl  px-10 py-4 text-[14px] lg:text-[18px] font-serif text-white-A700' onClick={showModal}>
              Add Category
            </button>
            <Modal title="Category" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <input type='text' placeholder='Enter Category Name'  className='w-[18rem] md:w-full h-[45px] focus:rounded-[12px] focus:border-[1px] 
        focus:border-solid focus:border-cyan-500 text-[13px] md:text-[18px] px-2 bg-cyan-200 rounded-[12px]' />

              <div className=' mt-10'>
                
                <p className='text-[16px] font-medium mb-5'>SubCategory:</p>
                  <Stack spacing={3} sx={{ width: 500 }} className='w-[200px] sm:w-[400px]'>
                    <Autocomplete
                      multiple
                      id="tags-standard"
                      options={subcategory}
                      getOptionLabel={(option) => option.title}
                      defaultValue={[subcategory[5]]}
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
          </div>
          
        </div>
        {/*~~~~~~~~~~~~~~~~DashTable~~~~~~~~~~~~~~ */}
        <div className='mt-10 w-full mb-16'>
          <Dashtable 
            HeaderD="My Ad"
            FirstSec="Category"
            SecondSec="SubCategory"
            ThirdSec="Ad"
            fourthSec="State"
            fifthSec="Action"
            datafromU={CategoryData}
            popup={showModal}
          />
        </div>
      </div>
    </DefaultLayout>
  )
}

export default AddCategory;

const subcategory = [
  { title: 'Cars', year: 1994 },
  { title: 'Export Cars', year: 1972 },
  { title: 'Motorcycles', year: 1974 },
  { title: 'Heavy Vehicles', year: 2008 },
  { title: 'Boats', year: 1957 },
  { title: "Real Estate", year: 1993 },
  { title: 'General', year: 1994 },
]