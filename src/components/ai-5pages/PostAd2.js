import FrameComponent2 from "./FrameComponent2";
import FrameComponent3 from "./FrameComponent3";
import CitygelLogo from "./CitygelLogo";
import {
  man_pic,
  logo,
  yellowcurve,
  bluecurve,
  greycurve,
  sittingman,
} from "assets/Allimages";
import { FaCaretDown, FaAngleDown } from "react-icons/fa";
const PostAd2 = () => {
  return (
    <div>
      <div>
        <Fullheade
          fullhead="Preview & Pay"
          fullpara="Lorem Ipsum is simply dummy text
         of the printing"
        />
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

        <div className="flex flex-row  space-x-10 absolute top-[650px] left-[70px] mq1325:flex-col mq750:left-[0px]">
          <div className="w-[354.4px] rounded-mid-5 bg-white shadow-[0px_0px_8.75px_rgba(0,_0,_0,_0.15)] box-border flex flex-col items-start justify-start pt-[8.80000000000291px] px-[7px] pb-[8.69999999999709px] gap-[8.69999999999709px] max-w-full z-[6] border-[1.3px] border-solid border-gray-100">
            <div className="self-stretch h-[253.8px] relative">
              <img
                className="absolute top-[0px] left-[0px] rounded-xl w-[336.9px] h-[253.8px] object-cover"
                alt=""
                src="/rectangle-4624@2x.png"
              />
              <img
                className="absolute top-[234.5px] left-[138.2px] w-[60.4px] h-[10.5px] z-[7]"
                loading="lazy"
                alt=""
                src="/group-10000037291.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[14.10000000000582px] box-border gap-[7.80000000000291px] max-w-full">
              <div className="flex flex-row items-start justify-start gap-[8.5px] text-base-8 text-white mq450:flex-wrap">
                <div className="rounded-[8.75px] [background:linear-gradient(90deg,_#fcb100,_#ed893e)] flex flex-row items-start justify-start pt-[5.30000000000291px] px-[17.5px] pb-[5.19999999999709px]">
                  <div className="relative inline-block min-w-[72px]">
                    Premium
                  </div>
                </div>
                <div className="rounded-[8.75px] [background:linear-gradient(90deg,_#fcb100,_#ed893e)] flex flex-row items-start justify-start pt-[5.30000000000291px] px-[17.5px] pb-[5.19999999999709px]">
                  <div className="relative inline-block min-w-[72px]">
                    Premium
                  </div>
                </div>
                <div className="rounded-[8.75px] [background:linear-gradient(90deg,_#fcb100,_#ed893e)] flex flex-row items-start justify-start pt-[5.30000000000291px] px-[17.5px] pb-[5.19999999999709px]">
                  <div className="relative inline-block min-w-[72px]">
                    Premium
                  </div>
                </div>
              </div>
              <div className="self-stretch relative leading-[35.01px] font-semibold mq450:text-xl mq450:leading-[28px]">
                Dell Touch Screen - Core I7 16GB RAM 512GB
              </div>
              <div className="w-[328.2px] flex flex-col items-start justify-start pt-0 px-0 pb-[5.099999999991269px] box-border gap-[13.30000000000291px] max-w-full text-mid-5 text-gray-1100">
                <div className="relative">Electronics . Computers</div>
                <div className="self-stretch relative text-base-8 leading-[21.88px] text-gray-1200">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting ind...
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                <div className="flex-1 relative leading-[35.01px] font-semibold shrink-0 [debug_commit:612783b] mq450:text-xl mq450:leading-[28px]">
                  AED 980
                </div>
                <div className="flex flex-col items-start justify-start pt-[4.400000000008731px] px-0 pb-0 ml-[-113px] text-mid-5 text-gray-1100">
                  <div className="flex flex-row items-start justify-start gap-[8.69999999999709px] shrink-0 [debug_commit:612783b]">
                    <div className="relative">City Name</div>
                    <div className="h-[23.6px] flex flex-col items-start justify-start pt-[2.599999999991269px] px-0 pb-0 box-border">
                      <img
                        className="w-[21px] h-[21px] relative"
                        loading="lazy"
                        alt=""
                        src="/vuesaxboldlocation1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-mid-5 [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] shadow-[0px_0px_2.63px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-start pt-[14.89999999999418px] pb-[14.400000000008731px] pr-[133px] pl-[123.29999999999563px] box-border whitespace-nowrap max-w-full text-2xl text-white mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="h-[61.3px] w-[336.9px] relative rounded-mid-5 [background:linear-gradient(94.43deg,_#0b90af,_#20c5f2)] shadow-[0px_0px_2.63px_rgba(0,_0,_0,_0.1)] hidden max-w-full" />
              <div className="relative z-[1]">View All</div>
            </div>
          </div>
          {/*This is pay now section*/}
          <div className="flex-1 flex flex-col items-start justify-start pt-[26px] px-0 pb-0 box-border min-w-[686px] max-w-full text-xl-4 text-gray-600 mq750:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[115px] max-w-full mq750:gap-[29px_115px] mq1050:gap-[57px_115px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px] box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[30px] max-w-full">
                  <div className="w-[550px] flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border gap-[6px] max-w-full">
                    <label
                      htmlFor="cardholderName"
                      className="w-[393.9px] relative uppercase inline-block max-w-full mq450:text-base"
                    >
                      Card Holder Name
                    </label>
                    <input
                      type="text"
                      id="cardholderName"
                      className="self-stretch h-[46px] relative text-9xl-1 text-gray-500"
                      defaultValue="Anne Jenny"
                    />
                  </div>
                  <div className="w-[681.4px] flex flex-col items-start justify-start pt-0 px-0 pb-[10.89999999999418px] box-border gap-[9.80000000000291px] max-w-full">
                    <label
                      htmlFor="cardNumber"
                      className="w-[393.9px] relative uppercase inline-block max-w-full mq450:text-base"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      className="self-stretch h-[42.3px] relative text-9xl-1 text-gray-500 font-comfortaa"
                      defaultValue="5790 2533 6570 3631"
                    />
                  </div>
                  <div className="self-stretch flex flex-row mq1325:flex-col items-start justify-start gap-[50px] max-w-full mq750:gap-[50px_25px] mq1050:flex-wrap">
                    <ExpDateInput expDate="06/27" />
                    <CvvInput cvv="262" />
                  </div>
                  <div className="w-[349.6px] flex flex-row items-start justify-start py-0 pr-[27px] pl-[26.80000000000291px] box-border max-w-full text-[15.3px]">
                    <label
                      htmlFor="checkbox1"
                      className="flex-1 relative capitalize shrink-0"
                    >
                      Save card details
                    </label>
                    <input id="checkbox1" type="checkbox" />
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-700 shadow-md flex flex-row items-start justify-start mq800:pt-[13px] mq800:px-[45px] mq800:pb-[8px] pt-[23px] px-[76px] pb-[22px] whitespace-nowrap z-[4] mq800:text-9xl text-11xl text-white mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="relative">Pay Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-64">
        <CitygelLogo />
      </div>
    </div>
  );
};

const ExpDateInput = ({ expDate }) => {
  return (
    <div className="relative">
      <label
        htmlFor="expDate"
        className="uppercase inline-block max-w-full mq450:text-base"
      >
        Exp Date
      </label>
      <input
        type="text"
        id="expDate"
        className="h-[42.3px] relative text-9xl-1 text-gray-500 font-comfortaa"
        defaultValue={expDate}
      />
    </div>
  );
};

const CvvInput = ({ cvv }) => {
  return (
    <div className="relative">
      <label
        htmlFor="cvv"
        className="uppercase inline-block max-w-full mq450:text-base"
      >
        CVV
      </label>
      <input
        type="text"
        id="cvv"
        className="h-[42.3px] relative text-9xl-1 text-gray-500 font-comfortaa"
        defaultValue={cvv}
      />
    </div>
  );
};

export default PostAd2;

const Fullheade = (props) => {
  return (
    <div className="overflow-hidden w-screen h-auto">
      <header className=" bg-gradient-to-r from-[rgb(16,56,76)] to-[rgb(21,60,77)] w-screen h-[100px] mq800:h-[80px] flex justify-between absolute overflow-hidden">
        <div className="flex justify-center items-center flex-grow">
          <img src={logo} className="h-full mq800:h-[56px]" />
        </div>
        <div className="flex justify-center items-center h-[70px] mq750:h-[60px] mt-2 mq800:space-x-0 space-x-4 flex-grow-0 ">
          <div className="mq800:hidden block">
            <h4 className="text-[18px] font-medium font-poppins">John Smith</h4>
            <p className="text-teal-400 text-[13px]">
              My Account <FaCaretDown />
            </p>
          </div>
          <div className="mq800:hidden block">
            <img
              src={man_pic}
              className="h-full rounded-full mt-[10px] mq750:mt-6px w-[50px] h-[50px] mr-10 mq750:mr-0"
            />
          </div>
          {/**Hidden part for mobile */}
          <div
            className="hidden mq800:block mt-4 w-[130px] h-[30px] border border-sky-500 rounded-2xl flex justify-center items-center
             "
          >
            <p className="text-[11px] text-white-A700">
              Change Location <FaAngleDown />
            </p>
          </div>
        </div>
      </header>
      <div className="flex overflow-hidden">
        <img
          src={yellowcurve}
          className="w-1/6 h-[1000px] mq800:h-[500px] relative top-[100px] mq750:top-[80px] flex-grow"
        />
        <img
          src={bluecurve}
          className="w-5/6 h-[840px] mq800:h-[390px]  left-0 top-0 flex-grow-0"
        />
        <img
          src={sittingman}
          className="absolute mq800:right-0 mq800:top-24 right-20 top-48 mq800:w-[320px] mq800:h-[290px] w-[720px] h-[660px]"
        />
      </div>
      <div className="absolute top-[300px] left-20 mq1125:relative mq1125:top-[-40px] mq1125:left-12 mq800:left-6 w-full">
        <h4 className="text-[48px] mq800:text-[22px] mq1500:text-[42px] mq1125:text-[37px] font-poppins pb-3">
          {props.fullhead}
        </h4>
        <p className="text-[26px] mq800:text-[13px] mq1500:text-[22px] mq1125:text-[19px] font-poppins">
          {props.fullpara}
        </p>
      </div>
    </div>
  );
};
