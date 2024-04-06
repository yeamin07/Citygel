import React from 'react'
import DefaultLayout from "components/Dashboard/layout/DefaultLayout";
import { cetagory_logo } from 'assets/Allimages';
import { nature } from 'assets/Allimages';
import {
  AdvertisingProvider,
  AdvertisingSlot,
  logVersionInfo
} from 'react-advertising';
import config from './config';
const Advertise = () => {
  logVersionInfo();
  return (
    <DefaultLayout classname="container mx-auto mb-6">
       <div className='banner-parent-1'>
         {/*~~~~~~~~~~~~~Each component~~~~~~~~~~~ */}
          <div className='w-full border-[1px] border-solid border-gray-200 shadow-xl rounded-[15px] flex flex-col justify-start h-auto p-2'>
          <h2 className='text-[20px] lg:text-[24px] h-[10%] w-full text-center'>Banner 1</h2>
          <div className=' flex flex-col sm:flex-row justify-start gap-[4px] h-[90%] w-full'>
          <div className='w-full sm:w-[48%]'>
            <img src={nature} className='w-full h-[400px] object-cover rounded-lg' alt='Natural Beauty'/>
          </div>
          <div className='w-full sm:w-[4%] text-[22px] font-serif flex justify-center items-center font-semibold'>
            Or 
          </div>
          <div className='w-full sm:w-[48%]'>
          <AdvertisingProvider config={config} className="flex justify-evenly flex-row">
          <h2 className='text-[25px] font-serif'>Google ad Section </h2>
          <AdvertisingSlot id="banner-ad" />
          </AdvertisingProvider>
          </div>
         </div>
          </div>
       </div>
    </DefaultLayout>
  )
}

export default Advertise