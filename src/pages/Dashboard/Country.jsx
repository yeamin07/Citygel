import { Modal } from "antd";
import DefaultLayout from "components/Dashboard/layout/DefaultLayout";

// import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Dashtable from 'components/Dashboard/DashTable/Dashtable';

import { useState, useEffect } from 'react'
import axios from 'axios';


const Country = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');

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


    {/*Fecthing data for country~~~~~~~~~~ */ }

    useEffect(() => {
        // Fetch countries and flags
        axios.get('https://countriesnow.space/api/v0.1/countries/states')
            .then(response => {
                setCountries(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching countries:', error);
            });
    }, []);

    const handleCountryChange = (event) => {
        const selectedCountryName = event.target.value;
        console.log(selectedCountryName);
        setSelectedCountry(selectedCountryName);}




    return (
        <DefaultLayout>
            <div className='container h-auto'>

                {/*Add Country */}
                <div className='flex flex-col justify-start gap-[14px] sm:justify-start sm:gap-[20px] md:flex-row items-center'>
                    <p className='lg:text-[25px] text-[16px] font-serif sm:text-[16px]'>Add Country:</p>
                    <div className="">
                        <button type="primary" className='bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-2xl  px-10 py-4 text-[14px] lg:text-[18px] font-serif text-white-A700' onClick={showModal}>
                            Add Country
                        </button>
                        <Modal className="w-[6rem] sm:w-[100%]" title="Country" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                            {/* <input type='text' placeholder='Enter Country Name' className='w-full md:w-full h-[45px] focus:rounded-[12px] focus:border-[1px] 
focus:border-solid focus:border-cyan-500 text-[13px] md:text-[18px] px-2 bg-cyan-200 rounded-[12px]' /> */}


                            <div className="flex sm:flex-row flex-col items-center">
                                <label htmlFor="country" className="mb-1 sm:mr-2">Select a Country:</label>
                                <select id="country" className="px-4 py-2 border border-gray-300 rounded-md" value={selectedCountry} onChange={handleCountryChange}>
                                    <option value="">Select a country...</option>
                                    {countries.map(country => (
                                        <option key={country.name} value={country.name}>{country.name}</option>
                                    ))}
                                </select>
                            </div>

                            {/*~~~~~~~~~~end of country ~~~~~~~~~~~ */}
                            <div className='flex flex-col justify-start gap-[10px] mt-10'>

                                <p className='text-[16px] font-medium mb-[3px]'>States:</p>
                                <Stack spacing={3} sx={{ width: 500 }} className='w-[6rem] sm:w-[90%] mb-7'>
                                    <Autocomplete
                                        multiple
                                        id="tags-standard"
                                        options={country}
                                        getOptionLabel={(option) => option.title}
                                        defaultValue={[country[5]]}
                                        className="w-[18rem] sm:w-[90%]"
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                variant="standard"
                                                label="Enter States"
                                                placeholder="Select States"
                                            />
                                        )}
                                    />
                                </Stack>

                                <p className='text-[16px] font-medium mb-[3px]'>Citys:</p>
                                <Stack spacing={3} sx={{ width: 500 }} className='w-[6rem] sm:w-[90%] mb-3'>
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
                                                className="w-[3rem]"
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
                        HeaderD="Country"
                        FirstSec="Country"
                        SecondSec="States"
                        ThirdSec="Ad"
                        fourthSec="User"
                        fifthSec="Action"
                        datafromU={CountryData}
                        popup={showModal}
                    />
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Country

const country = [
    { title: 'Dubai', year: 1994 },
    { title: 'AbuDhabi', year: 1972 },
    { title: 'Sharjah', year: 1974 },
    { title: 'Ajman', year: 2008 },
    { title: 'Al Ain', year: 1957 },
    { title: "Ras Al Khaimah", year: 1993 },
    { title: 'Fujairah', year: 1994 },
    { title: 'Umm Al Quwain', year: 1994 },
]

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

const CountryData = [
    { id: 5, category: "United Arab Emirat", subcategory: "Dubai,Shajah", Ad: "Ad Name", State: 'Mike Alice', },
    { id: 6, category: "United Arab Emirat", subcategory: "Dubai,Shajah", Ad: "Ad Name", State: 'Mike Alice', },
    { id: 7, category: "United Arab Emirat", subcategory: "Dubai,Shajah", Ad: "Ad Name", State: 'Mike Alice', },
    { id: 8, category: "United Arab Emirat", subcategory: "Dubai,Shajah", Ad: "Ad Name", State: 'Mike Alice', },
    { id: 9, category: "United Arab Emirat", subcategory: "Dubai,Shajah", Ad: "Ad Name", State: 'Mike Alice', },
    { id: 10, category: "United Arab Emirat", subcategory: "Dubai,Shajah", Ad: "Ad Name", State: 'Mike Alice', },
    { id: 11, category: "United Arab Emirat", subcategory: "Dubai,Shajah", Ad: "Ad Name", State: 'Mike Alice', },
    { id: 12, category: "United Arab Emirat", subcategory: "Dubai,Shajah", Ad: "Ad Name", State: 'Mike Alice', },
];