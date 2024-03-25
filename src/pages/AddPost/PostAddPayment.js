import useSelection from "antd/es/table/hooks/useSelection";
import { Text } from "components";
import ProductSlider from "pages/Products/ProductCart/ProductSlider";
import { useSelector } from "react-redux";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { StripeCardNumberElement } from "@stripe/stripe-js";
import { useState } from "react";
import useAxios from "config/api/useAxios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "firebase.init";
import { message } from "antd";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const PostAddPayment = () => {
  const { currentStep, category, subcategory, form, membership } = useSelector(
    (state) => state.post,
  );
  const [loading, setLoading] = useState(false);
  console.log(form);
  const payNow = () => {};
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState("");
  const [formErrorMessage, setFormErrorMessage] = useState(null);
  const [user] = useAuthState(auth);
  const [save, setSave] = useState(false); // State variable to track checkbox state
  const [success, setSuccess] = useState(false);
  const handleSaveCardChange = (e) => {
    setSave(e.target.checked);
  };
  const navigate = useNavigate();
  const generateStripeToken = async () => {
    if (!stripe || !elements) {
      console.log("stripe / elements is not set");
      return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement);

    const { token, error } = await stripe.createToken(cardNumberElement, {
      name: name,
    });

    if (!token || error) {
      console.log(error || "Token is not set");
      throw error;
    }

    return token;
  };

  const api = useAxios();
  const ads = { ...form, category, subcategory };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const token = await generateStripeToken();
      // const resultPayment = await api.post(
      //   "https://citygel-backend.onrender.com /api/v1/payment",
      //   {
      //     membershipType: membership,
      //     email: user?.email,
      //     token: token,
      //     save: save,
      //   },
      // );
      // console.log(resultPayment);
      // if (resultPayment.data) {

      const resultPostAds = await api.post(
        "https://citygel-backend.onrender.com /api/v1/ads",
        {
          email: user?.email,
          ...ads,
        },
      );
      console.log(resultPostAds);
      if (resultPostAds.data) {
        message.success("You Ads Post SuccessFully");
        setLoading(false);
        setSuccess(true);
        // }
      }
      setLoading(false);
      toast.success("Your Product is Added");
    } catch (err) {
      console.log("error: ", err);
      setFormErrorMessage(err.message ?? "Something went wrong");
    }
  };
  console.log(category);
  return (
    <div className="pl-20 mq1050:pt-[34px] mq1050:pl-0">
      <div>
        {/* <div className="absolute top-[580px]  left-[80px] mq1325:relative  mq1325:top-5 mq1325:left-[8px] h-auto flex mq1500:flex-col flex-row space-x-6">
        <div className="mq1325:w-[370px] mq450:w-[350px] mq450:ml-7 w-[400px] h-[540px] flex justify-between flex-col border-[1px] border-red-700 
        space-y-2 mb-10 p-2 bg-[#eff0f3]">
          <img src={laptop} className="w-full h-[180px]"/>
          <div className="flex flex-row justify-between"><YellowGredb/><YellowGredb/><YellowGredb/></div>
          <h5 className="text-[24px] mq1050:text-[21px] font-poppins">Dell Touch Screen - core i7 
          16GB RAM 512GB</h5>
          <div className="flex justify-between flex-wrap max-w-[360px] space-y-2">
          <p className="text-[16px] mq1050:text-[15px] text-gray-500">Electronics Computer</p>
          <p className="text-[14px] mq1050:text-[13px] text-gray-500">ljhsdgfksjhfgkdjshgfksdjhgfkjdshgkjhgfj<br/>hsdghfffffsdgjfhgfjhgfghf</p>
          </div>

          <div className="flex justify-between flex-row"><h5 className="text-[22px] mq1050:text-[20px]">ADE 980</h5>
          <p >City Name <TiLocation className="text-cyan-400"/></p></div>

          
          <button className="bg-gradient-to-tl from-cyan-300 to-cyan-600 w-full h-[50px] rounded-2xl text-[15px] text-white-A700" >
            View All
          </button>
        </div> */}
        <div className="">
          <Text
            as="p"
            className="text-start z-[1] mt-[70px] w-[100%] text-[44px]  font-medium !text-black-900_03 sm:text-center  sm:text-[28px] mq450:text-center mq450:text-[28px]"
          >
            Preview & Pay
          </Text>
          <Text
            as="p"
            className="text-start z-[1] mt-3 w-[100%] text-[20px] leading-[35px] !text-black-900_87 opacity-0.8 sm:text-center sm:text-[14px] mq1500:w-[100%] mq450:text-center mq450:text-[14px]"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            Lorem Ipsum is simply dummy text of the printing and typesetting
            Lorem Ipsum is simply dummy text of the printing and typesetting
            Lorem Ipsum 
          </Text>
        </div>
        <div className="flex  flex-row space-x-10  pt-10 mq825:space-x-10 mq750:flex-col mq750:space-x-5  mq450:space-x-2">
          <div className="bg-white z-[6] box-border flex h-[568.8px] w-[354.4px] max-w-full flex-col items-start justify-start gap-[8.69999999999709px] rounded-mid-5 border-[1.3px] border-solid border-gray-100 px-[7px] pt-[8.80000000000291px] pb-[8.69999999999709px] shadow-[0px_0px_8.75px_rgba(0,_0,_0,_0.15)]">
            <div className="relative h-[253.8px] self-stretch">
              <ProductSlider
                mainImage={form.mainImage}
                moreImages={form.moreImages || []}
              />
            </div>
            <div className="box-border flex max-w-full flex-col items-start justify-start gap-[7.80000000000291px] self-stretch px-0 pt-0 pb-[14.10000000000582px]">
              <div className="text-white flex flex-row items-start justify-start gap-[8.5px] text-base-8 mq450:flex-wrap">
                <div className="flex flex-row items-start justify-start rounded-[8.75px] px-[17.5px] pt-[5.30000000000291px] pb-[5.19999999999709px] [background:linear-gradient(90deg,_#fcb100,_#ed893e)]">
                  <div className="relative inline-block min-w-[72px]">
                    Premium
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start rounded-[8.75px] px-[17.5px] pt-[5.30000000000291px] pb-[5.19999999999709px] [background:linear-gradient(90deg,_#fcb100,_#ed893e)]">
                  <div className="relative inline-block min-w-[72px]">
                    Premium
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start rounded-[8.75px] px-[17.5px] pt-[5.30000000000291px] pb-[5.19999999999709px] [background:linear-gradient(90deg,_#fcb100,_#ed893e)]">
                  <div className="relative inline-block min-w-[72px]">
                    Premium
                  </div>
                </div>
              </div>
              <div className="relative self-stretch font-semibold leading-[35.01px] mq450:text-xl mq450:leading-[28px]">
                {form.title}
              </div>
              <div className="text-gray-1100 box-border flex w-[328.2px] max-w-full flex-col items-start justify-start gap-[13.30000000000291px] px-0 pt-0 pb-[5.099999999991269px] text-mid-5">
                <div className="relative">
                  {category} - {subcategory}
                </div>
                <div className="text-gray-1200 relative self-stretch text-base-8 leading-[21.88px]">
                  {form.description}
                </div>
              </div>
              <div className="flex max-w-full flex-row items-start justify-start self-stretch">
                <div className="relative flex-1 shrink-0 font-semibold leading-[35.01px] [debug_commit:612783b] mq450:text-xl mq450:leading-[28px]">
                  AED {form.price}
                </div>
                <div className="text-gray-1100 ml-[-113px] flex flex-col items-start justify-start px-0 pt-[4.400000000008731px] pb-0 text-mid-5">
                  <div className="flex shrink-0 flex-row items-start justify-start gap-[8.69999999999709px] [debug_commit:612783b]">
                    <div className="relative">{form.city}</div>
                    <div className="box-border flex h-[23.6px] flex-col items-start justify-start px-0 pt-[2.599999999991269px] pb-0">
                      <img
                        className="relative h-[21px] w-[21px]"
                        loading="lazy"
                        alt=""
                        src="/vuesaxboldlocation1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-white box-border flex max-w-full flex-row items-start justify-start whitespace-nowrap rounded-mid-5 pt-[14.89999999999418px] pb-[14.400000000008731px] pr-[133px] pl-[123.29999999999563px] text-2xl shadow-[0px_0px_2.63px_rgba(0,_0,_0,_0.1)] [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] mq450:box-border mq450:pl-5 mq450:pr-5">
              <div className="relative hidden h-[61.3px] w-[336.9px] max-w-full rounded-mid-5 shadow-[0px_0px_2.63px_rgba(0,_0,_0,_0.1)] [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)]" />
              <div className="relative z-[1] cursor-pointer text-white-A700">
                View All
              </div>
            </div>
          </div>
          {!success ? (
            <>
              {" "}
              {/*This is pay now section*/}
              <form>
                <div className="box-border flex min-h-screen min-w-[686px] max-w-full flex-1 flex-col items-start justify-start px-0 pt-[26px] pb-0 text-xl-4 text-gray-600 mq750:min-w-full">
                  <div className="flex max-w-full flex-col items-start justify-start gap-[115px] self-stretch mq1050:gap-[57px_115px] mq750:gap-[29px_115px]">
                    <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch py-0 pr-0 pl-[5px] mq750:pl-[0px] mq450:pl-[0px]">
                      <div className="flex max-w-full flex-1 flex-col items-start justify-start gap-[30px]">
                        <div className="box-border flex w-[550px] max-w-full flex-col items-start justify-start gap-[6px] px-0 pt-0 pb-2.5">
                          <label
                            htmlFor="cardholderName"
                            className="relative inline-block w-[393.9px] max-w-full uppercase text-black-900_03 mq450:text-base"
                          >
                            Card Holder Name
                          </label>
                          <input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            style={{ borderBottom: "1px solid gray" }}
                            id="cardholderName"
                            className="
                 
                 relative h-[46px]  self-stretch text-9xl-1 text-gray-500 "
                            defaultValue="Anne Jenny"
                          />
                        </div>
                        <div className="box-border flex w-[681.4px] max-w-full flex-col items-start justify-start gap-[9.80000000000291px] px-0 pt-0 pb-[10.89999999999418px]">
                          <label
                            htmlFor="cardNumber"
                            className="relative inline-block w-[393.9px] max-w-full uppercase text-black-900_03 mq450:text-base"
                          >
                            Card Number
                          </label>

                          <CardNumberElement
                            style={{ borderBottom: "1px solid gray" }}
                            id="card-nr"
                            className="font-comfortaa relative self-stretch border-b-[1px] border-solid  border-gray-500 text-9xl-1 text-gray-500 "
                          />
                        </div>
                        <div className="flex max-w-full flex-row items-start justify-start gap-[50px] self-stretch mq1325:flex-col mq1050:flex-wrap mq750:gap-[50px_25px]">
                          <ExpDateInput expDate="06/27" />

                          <CvvInput cvv="262" />
                        </div>
                        <div className="box-border flex w-full max-w-full flex-row items-center justify-center gap-5 py-0 pr-[27px] pl-[20.80000000000291px] text-[15.3px]">
                          <input
                            id="checkbox1"
                            type="checkbox"
                            checked={save}
                            onChange={handleSaveCardChange}
                            className="rounded border-[3px] border-solid border-r-black-900_03 bg-white-A700"
                          />

                          <label
                            htmlFor="checkbox1"
                            className="relative flex-1 shrink-0 capitalize"
                          >
                            Save card details
                          </label>
                        </div>
                        {formErrorMessage && (
                          <label className=" text-xs text-red-500">
                            {formErrorMessage}
                          </label>
                        )}
                      </div>
                    </div>
                    <div
                      onClick={handleSubmit}
                      className="text-white z-[4] flex flex-row items-start justify-start whitespace-nowrap rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-700 px-[76px] pt-[23px] pb-[22px] text-11xl shadow-md mq800:px-[45px] mq800:pt-[13px] mq800:pb-[8px] mq800:text-9xl mq450:box-border mq450:pl-5 mq450:pr-5"
                    >
                      <div className="relative cursor-pointer text-white-A700">
                        Pay Now
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </>
          ) : (
            <div className="flex w-full flex-col gap-8 p-11 mq825:space-x-10 mq750:flex-col mq750:space-x-5  mq450:space-x-2">
              {/*This is pay now section*/}

              <h1 className="font-poppins text-[38px] font-medium">
                Thank You
              </h1>
              <p className="text-[20px] text-gray-500">
                Lorem Ipsum is simply dummy text of the <br />
                printing and typesetting Lorem Ipsum is <br />
                simply dummy text of the printing and typesetting Lorem{" "}
              </p>
              <button
                onClick={() => navigate("/")}
                className="h-[60px] w-[150px] rounded-2xl bg-gradient-to-br from-cyan-600 to-cyan-400 text-[20px] text-white-A700"
              >
                Go To Home
              </button>

              {/* <div className="w-[270px] h-[400px] flex flex-col justify-between">
          <h1 className="text-[38px] font-medium font-poppins">Thank You</h1>
          <p className="text-[20px] text-gray-500">
            Lorem Ipsum is simply dummy text of the <br />
            printing and typesetting Lorem Ipsum is <br />
            simply dummy text of the printing and typesetting Lorem{" "}
          </p>
          <button className="bg-gradient-to-br from-cyan-600 to-cyan-400 w-[150px] h-[60px] rounded-2xl text-white-A700 text-[20px]">
            Go To Home
          </button>
        </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ExpDateInput = ({ expDate }) => {
  return (
    <div className="relative">
      <label
        htmlFor="expDate"
        className="inline-block max-w-full uppercase text-black-900_03 mq450:text-base"
      >
        Exp Date
      </label>

      <CardExpiryElement
        id="card-exp"
        className=" font-comfortaa relative border-b-[1px] border-solid border-gray-500 text-9xl-1 text-gray-500 "
      />
    </div>
  );
};

const CvvInput = ({ cvv }) => {
  return (
    <div className="relative">
      <label
        htmlFor="cvv"
        className="inline-block max-w-full uppercase text-black-900_03 mq450:text-base"
      >
        CVV
      </label>

      <CardCvcElement
        id="card-cvc"
        style={{ borderBottom: "1px solid gray" }}
        className=" font-comfortaa relative border-b-[1px] border-solid border-gray-500 text-9xl-1 text-gray-500 "
      />
    </div>
  );
};

export default PostAddPayment;
