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
  const props = {
    name: "file",
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    progress: {
      strokeColor: {
        "0%": "#108ee9",
        "100%": "#87d068",
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },
  };
  console.log(category);
  return (
    <form>
      {" "}
    <main className="w-[100%]  mq750:mt-48">
    <div className=" flex flex-row mq750:flex-col  items-center justify-between pl-10 box-border max-w-full">
        <section className="w-[100%] min-h-screen pl-4 flex flex-col items-start justify-start gap-[9px] max-w-full text-left text-25xl text-black font-poppins">
          <div className="w-[80%] flex flex-col items-start justify-start gap-[50px] max-w-full mq450:gap-[25px_50px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <h1 className="m-0 relative text-inherit font-medium font-inherit z-[4] mq450:text-7xl mq800:text-16xl">
                Enter Details
              </h1>
              <h3 className="m-0 self-stretch relative text-3xl leading-[35px] font-normal font-inherit text-gray-1200 z-[4] mq450:text-lg mq450:leading-[28px]">{`Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem `}</h3>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full text-base text-gray-1000">
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

              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[9px] max-w-full">
                <div className="flex flex-row items-start justify-start py-0 px-1.5">
                  <div className="relative text-base font-poppins text-gray-1000 text-left">
                    Ad Description
                  </div>
                </div>

                <textarea
                  name="description"
                  placeholder="Add Description"
                  {...register("description", { required: true })}
                  className="p-7 self-stretch flex-1 font-poppins text-xl text-black max-w-full bg-gainsboro-300 focus=bg-gainsboro-300 border-0 hover=bg-gainsboro-300"
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
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[9px] box-border gap-[9px] max-w-full">
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
              <div className="self-stretch flex flex-col items-start justify-start gap-[9px] max-w-full">
                <div className="flex flex-row items-start justify-start py-0 px-1.5">
                  <div className="relative inline-block min-w-[39px] z-[2]">
                    Enquiry Type
                  </div>
                </div>
                <div className="self-stretch rounded-mini bg-gainsboro-300 flex flex-row items-start justify-start py-[25px] px-[23px] box-border max-w-full z-[4] text-xl text-black">
                  <Controller
                    name="selectedContact"
                    control={control}
                    defaultValue={selectedItem} // Set default value if needed
                    render={({ field }) => (
                      <Dropdown
                        className="h-7 w-[880px] px-[10px] py-[1px] rounded-mini border-none outline-none focus:ring-0 max-w-full"
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
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[9px] box-border gap-[9px] max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-1.5">
                    <div className="relative text-base font-poppins text-gray-1000 text-left">
                      Main Image
                    </div>
                  </div>
                  <div className="self-stretch rounded-mini bg-gainsboro-300 flex flex-row items-start justify-start pt-7 px-7 pb-[22px] box-border max-w-full">
                    <div className="h-20 w-[880px] relative rounded-mini bg-gainsboro-300 hidden max-w-full" />
                    <div className="relative text-xl font-poppins text-black text-left z-[1] mq450:text-base">
                      <Controller
                        name="mainImage"
                        control={control}
                        render={({ field }) => (
                          <Upload
                            name="image"
                            action={`https://api.imgbb.com/1/upload?key=${imageStorageKey}`}
                            onChange={handleFileUpload}
                            className="pr-7 py-4"
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
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[9px] box-border gap-[9px] max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-1.5">
                    <div className="relative text-base font-poppins text-gray-1000 text-left">
                      More Images
                    </div>
                  </div>
                  <div className="self-stretch rounded-mini bg-gainsboro-300 flex flex-row items-start justify-start pt-3 px-7 pb-[22px] box-border max-w-full">
                    <div className="h-10 w-[880px] relative rounded-mini bg-gainsboro-300 hidden max-w-full" />
                    <div className="relative text-xl font-poppins text-black text-left z-[1] mq450:text-base">
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
                            className="pr-7 py-4"
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
        <section className="mt-[-250px]  mq1050:hidden ml-[140px]">
          <div className="w-[100%] bg-gainsboro-100 flex  items-center justify-center pb-[1000px] pr-5 pl-[21px] box-border min-w-[350px] max-w-full mq800:pt-[298px] mq800:pb-[298px] mq800:box-border mq800:min-w-full mq1125:pt-[458px] mq1125:pb-[458px] mq1125=box-border mq1325:flex-1 mq1325:pt-[705px] mq1325:pb-[705px] mq1325:ox-border">

            <h1 className="m-0 flex justify-center items-center relative text-inherit font-normal font-inherit inline-block min-w-[70px] z-[1] mq450:text-11xl mq800:text-21xl">
              Ad
            </h1>
          </div>
        </section>
      </div>
      <div className="mt-9 min-h-screen  pl-14 mq800:pl-0  w-full">
          <div className="w-[80%] sm:w-[100%] mq1050:w-[100%] py-9 flex flex-row sm:flex-col mq450:flex-col mq800: mq1050:items-center justify-center  py-0 px-5 box-border max-w-full text-11xl text-white">
            <div className="w-full flex flex-row  items-center justify-center gap-5 max-w-full mq1050:justify-between">
              <div
                onClick={handlePrev}
                className="rounded-xl mq1050:w-[30%] cursor-pointer w-[30%] sm:w-[%]  mq750:w-[30%]   bg-[#D3D3D3] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] flex flex-row items-center justify-center pt-[23px] pb-[22px] pr-5 pl-[29px] z-[2]  box-border"
              >
                <div className="relative mr-[7px] z-[3] text-center mq450:text-sm mq750:text-sm mq1050:text-3xl text-white-A700">
                  Previous
                </div>
              </div>
              <div className="h-[47px]  sm:w-[20%] flex flex-col mt-10 items-center justify-start">
                <div className=" h-[5px] flex flex-row items-center justify-between relative gap-[10px] z-[2]">
                  <div
                    className={`h-full  w-11 sm:w-3 mq750:w-2 mq1050:w-5  rounded-21xl ${currentStep == 1 ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                  />
                  <div
                    className={`h-full w-11 sm:w-3 mq750:w-2 mq1050:w-5 rounded-21xl ${currentStep == 2 ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                  />
                  <div
                    className={`h-full w-11 sm:w-3 mq750:w-2 mq1050:w-5 rounded-21xl ${currentStep == 3 ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                  />
                  <div
                    className={`h-full w-11 sm:w-3 mq750:w-2 mq1050:w-5  rounded-21xl ${currentStep == 4 ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                  />
                  <div
                    className={`h-full w-11 sm:w-3 mq750:w-2 mq1050:w-5 rounded-21xl ${currentStep == 5 ? "bg-[#0C92B2]" : "bg-gainsboro-400"}`}
                  />
                </div>
              </div>
              {!errors.root ? (
                <div
                onClick={handleSubmit(onSubmit)}
                  className={`w-[30%] sm:w-[35%]  sm:mt-[8px]  mq750:w-[30%] mq1050:w-[30%]  cursor-pointer rounded-xl [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] flex flex-row items-center justify-center pt-[23px] pb-[22px] pr-5 pl-[29px] box-border whitespace-nowrap z-[2]`}
                >
                  <div className="relative sm:text-[14px] mq1050:text-[16px] z-[3] text-white-A700">
                    {currentStep}/5 Next
                  </div>
                </div>
              ) : (
                <div
                  className={`w-[30%] sm:w-[40%] mq1050:text-[16px]   mq1050:w-[30%] mq750:w-[30%] sm:mt-[8px] mq750:w-[50%]  rounded-xl bg-black-900_33 shadow-[0px_0px_3px_rgba(0,_0,_0,_0.1)] flex flex-row items-center justify-center pt-[23px] pb-[22px] pr-5 pl-[29px] box-border whitespace-nowrap z-[2]`}
                >
                  <div className="relative sm:text-[14px] z-[3] text-white-A700">
                    {currentStep}/5 Next
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <section className="hidden md:block lg:block xl:block">
  <div className="w-[100%] bg-gainsboro-100 flex items-center justify-center pb-[1000px] pr-5 pl-[21px] box-border min-w-[350px] max-w-full md:pt-[298px] md:pb-[298px] md:box-border md:min-w-full lg:pt-[458px] lg:pb-[458px] lg=box-border xl:flex-1 xl:pt-[705px] xl:pb-[705px] xl:ox-border">
    <h1 className="m-0 flex justify-center items-center relative text-inherit font-normal font-inherit inline-block min-w-[70px] z-[1] md:text-11xl lg:text-21xl">
      Ad
    </h1>
  </div>
</section>
    </main>
    </form>
  );
};

export default PostFormAd;
