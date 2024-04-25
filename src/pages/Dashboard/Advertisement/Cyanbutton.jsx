import React from 'react'

const Cyanbutton = ({btnName,onClick}) => {
  return (
        <button onClick={onClick} className="rounded-[10px] [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] text-[17px] 2xl:text-[20px] md:text-[18px] lg:text-[19px] py-[11px] px-[40px] 2xl:py-[13px] 2xl:px-[55px] lg:py-[12px] lg:px-[50px] text-white-A700">{btnName}</button>
  )
}

export default Cyanbutton

