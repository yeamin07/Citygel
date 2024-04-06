// import "antd/dist/antd.min.css";
import { Input, Button, Divider } from "antd";
import AdsInput from "components/Input/AdsInput";
import { Dropdown, Space } from "antd";
import { useState } from "react";
import { message, Upload } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  nextStep,
  prevStep,
  setCategory,
  setForm,
} from "store/slices/adsPostSlice";
import { Controller, useForm } from "react-hook-form";
const items = [
  {
    label: <p>Email</p>,
    key: "email",
  },
  {
    label: <p>Phone</p>,
    key: "phone",
  },
  {
    type: "divider",
  },
  {
    label: "Both",
    key: "both",
  },
];
const imageStorageKey = "3a1e59ad1d3a8caba2efe37f45b560e9";
const PostFormAd = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    setValue,
  } = useForm();

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(setForm(data));
  };
  const { currentStep, category, subcategory } = useSelector(
    (state) => state.post,
  );
  const [imageUrl, setImageUrl] = useState("");

  const handleFileUpload = async (info) => {
    console.log(info);
    if (info.file.status === "done") {
      const { data } = info.file.response;
      message.success(`${info.file.name} file upload successfully.`);
      setImageUrl(data.url);
      setValue("mainImage", data.url);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const handleMultipleFileUpload = async (info, field) => {
    if (info.file.status === "done") {
      const { data } = info.file.response;

      const currentImages = getValues("moreImages") || [];
      setValue("moreImages", [...currentImages, data.url]);
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };
  const handlePrev = () => {
    dispatch(prevStep());
  };
  console.log(errors);

  console.log(category);
  return (
    <form>
      <div className=" box-border flex max-w-full flex-row  items-center justify-between pt-20 lg:pl-3 ">
        <section className="text-black container mx-auto flex min-h-screen w-[90%] flex-col items-start justify-start gap-[9px] text-left font-poppins text-2xl sm:pl-4 md:mx-0">
          <div className="  flex flex-col items-start justify-start gap-[50px]">
            <div className="flex flex-col items-start justify-start gap-[20px] ">
              <h1 className="font-inherit relative z-[4] m-0 text-[32px] font-medium text-inherit md:text-[45px]">
                Enter Details
              </h1>
              <h3 className="font-inherit text-gray-1200 relative z-[4] m-0  text-sm font-normal text-gray-600 sm:text-lg  ">{`Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem `}</h3>
            </div>
            {/* Fomr */}
            <div className="text-gray-1000 relative z-[100] flex w-full flex-col items-start  justify-start gap-[20px] text-base">
              <AdsInput
                tittle="Type"
                name="type"
                register={register}
                required
                errors={errors}
              />
              <AdsInput
                tittle="Brand"
                name="brand"
                register={register}
                required
                errors={errors}
              />
              <AdsInput
                tittle="Model"
                name="model"
                register={register}
                required
                errors={errors}
              />
              <AdsInput
                tittle="Fuel Type"
                name="fuelType"
                register={register}
                required
                errors={errors}
              />
              <AdsInput
                tittle="Listed By"
                name="listedBy"
                register={register}
                required
                errors={errors}
              />
              <AdsInput
                tittle="Transmission"
                name="transmission"
                register={register}
                required
                errors={errors}
              />
              <AdsInput
                tittle="KM Driven"
                name="kmdriven"
                register={register}
                required
                errors={errors}
              />
              <AdsInput
                tittle="No of Owners"
                name="owners"
                register={register}
                required
                errors={errors}
              />
              <AdsInput
                tittle="Ad Title"
                name="title"
                register={register}
                required
                errors={errors}
              />

              <div className="flex  w-full flex-1 flex-col items-start justify-start gap-[9px] ">
                <div className="flex flex-row items-start justify-start py-0 px-1.5">
                  <div className="text-gray-1000 relative text-left font-poppins text-base">
                    Ad Description
                  </div>
                </div>

                <textarea
                  name="description"
                  placeholder="Add Description"
                  {...register("description", { required: true })}
                  className="text-black focus=bg-gainsboro-300 hover=bg-gainsboro-300  w-full  flex-1 border-0 bg-gainsboro-300 p-7 font-poppins text-xl"
                />
                {errors["description"] &&
                  errors["description"]?.type === "required" && (
                    <span className="text-red-500">This field is required</span>
                  )}
              </div>

              <AdsInput
                tittle="Ad Price"
                name="price"
                type="number"
                register={register}
                required
                errors={errors}
              />
              <div className="box-border flex max-w-full flex-col items-start justify-start gap-[9px] self-stretch px-0 pt-0 pb-[9px]">
                <AdsInput
                  tittle="Country"
                  name="country"
                  register={register}
                  required
                  errors={errors}
                />
                <AdsInput
                  tittle="State"
                  name="state"
                  register={register}
                  required
                  errors={errors}
                />
                <AdsInput
                  tittle="City"
                  name="city"
                  register={register}
                  required
                  errors={errors}
                />
              </div>
              <div className="flex  w-full flex-col items-start justify-start gap-[9px] ">
                <div className="flex flex-row items-start justify-start py-0 px-1.5">
                  <div className="relative z-[2] inline-block min-w-[39px]">
                    Enquiry Type
                  </div>
                </div>
                <div className="text-black z-[4] box-border flex  w-full flex-row items-start  justify-start rounded-mini bg-gainsboro-300 py-[25px] px-[23px] text-xl">
                  <Controller
                    name="selectedContact"
                    control={control}
                    defaultValue={selectedItem} // Set default value if needed
                    render={({ field }) => (
                      <Dropdown
                        className="h-7   rounded-mini border-none px-[10px] py-[1px] outline-none focus:ring-0"
                        menu={{
                          items: items.map((item) => ({
                            ...item,
                            onClick: () => {
                              field.onChange(item.key); // Update the value directly using field.onChange
                            },
                          })),
                        }}
                        trigger={["click"]}
                      >
                        <a onClick={(e) => e.preventDefault()}>
                          {field.value ? (
                            <span>
                              {
                                items.find((item) => item.key === field.value)
                                  .label
                              }
                            </span>
                          ) : (
                            <span>Select</span>
                          )}
                        </a>
                      </Dropdown>
                    )}
                  />
                </div>
              </div>
              <div className="flex max-w-full flex-col items-start justify-start self-stretch">
                <div className="box-border flex max-w-full flex-col items-start justify-start gap-[9px] self-stretch px-0 pt-0 pb-[9px]">
                  <div className="flex flex-row items-start justify-start py-0 px-1.5">
                    <div className="text-gray-1000 relative text-left font-poppins text-base">
                      Main Image
                    </div>
                  </div>
                  <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch rounded-mini bg-gainsboro-300 px-7 pt-7 pb-[22px]">
                    <div className="relative hidden h-20 max-w-full rounded-mini bg-gainsboro-300" />
                    <div className="text-black relative z-[1] text-left font-poppins text-xl mq450:text-base">
                      <Controller
                        name="mainImage"
                        control={control}
                        render={({ field }) => (
                          <Upload
                            name="image"
                            action={`https://api.imgbb.com/1/upload?key=${imageStorageKey}`}
                            onChange={handleFileUpload}
                            className="py-4 pr-7"
                          >
                            <Button className="bg-gainsboro-400">
                              Upload Image
                            </Button>
                          </Upload>
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div className="box-border flex max-w-full flex-col items-start justify-start gap-[9px] self-stretch px-0 pt-0 pb-[9px]">
                  <div className="flex flex-row items-start justify-start py-0 px-1.5">
                    <div className="text-gray-1000 relative text-left font-poppins text-base">
                      More Images
                    </div>
                  </div>
                  <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch rounded-mini bg-gainsboro-300 px-7 pt-3 pb-[22px]">
                    <div className="relative hidden h-10  max-w-full rounded-mini bg-gainsboro-300" />
                    <div className="text-black relative z-[1] text-left font-poppins text-xl mq450:text-base">
                      <Controller
                        name="moreImages"
                        control={control}
                        render={({ field }) => (
                          <Upload
                            name="image"
                            action={`https://api.imgbb.com/1/upload?key=${imageStorageKey}`}
                            onChange={(info) =>
                              handleMultipleFileUpload(info, field)
                            }
                            className="py-4 pr-7"
                            multiple
                          >
                            <Button className="bg-gainsboro-400">
                              Upload Image
                            </Button>
                          </Upload>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-9  w-full">
        <div className="text-white box-border flex max-w-full flex-row justify-center py-0 px-5 text-11xl sm:w-[100%]  sm:flex-col md:px-0 lg:w-[90%] ">
          <div className="flex w-full max-w-full  flex-row items-center  justify-end gap-5 md:justify-between ">
            {currentStep > 1 && (
              <div
                onClick={handlePrev}
                className={`z-[2] box-border  flex  cursor-pointer flex-row  items-center justify-center whitespace-nowrap rounded-md bg-black-900_33 py-2 px-16 pr-5 pl-[29px] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] md:w-[35%] md:rounded-xl md:pt-[23px] md:pb-[22px] `}
              >
                <div className="relative z-[3] text-[14px] text-white-A700 ">
                  Previous
                </div>
              </div>
            )}

            <div className="  flex  flex-col items-center justify-start sm:w-[20%] ">
              <div className=" relative z-[2] flex h-[5px] flex-row items-center justify-between gap-[10px]">
                {[1, 2, 3, 4, 5]?.map((data) => (
                  <div
                    className={`h-full  w-3 rounded-21xl sm:w-4  ${currentStep == data ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                  />
                ))}
              </div>
            </div>

            <div
              onClick={handleSubmit(onSubmit)}
              className={`z-[2] box-border  flex  cursor-pointer flex-row  items-center justify-center whitespace-nowrap rounded-md py-2 px-16 pr-5 pl-[29px] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] md:w-[35%] md:rounded-xl md:pt-[23px] md:pb-[22px] `}
            >
              <div className="relative z-[3] text-[14px] text-white-A700 ">
                {currentStep}/5 Next
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PostFormAd;
