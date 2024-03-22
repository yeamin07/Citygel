import React from "react";

const AdsInput = ({
  tittle,
  type = "text",
  name,
  register,
  required,
  errors,
}) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full">
      <div className="flex flex-row items-start justify-start py-0 px-1.5">
        <div className="relative inline-block min-w-[39px] z-[2]">{tittle}</div>
      </div>
      <div className="self-stretch rounded-mini bg-gainsboro-300 flex flex-row items-start justify-start py-[25px] px-[23px] box-border max-w-full z-[4] text-xl text-black">
        <input
          type={type}
          name={name}
          placeholder={`Add ${tittle}`}
          {...register(name, { required })}
          className="h-7 w-[880px] px-[10px] py-[6px] rounded-mini bg-black-900_03 border-none outline-none focus:ring-0 max-w-full"
        />
      </div>
      {errors[name] && errors[name]?.type === "required" && (
        <span className="text-red-500">This field is required</span>
      )}
    </div>
  );
};

export default AdsInput;
