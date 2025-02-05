import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Text, Img, CheckBox, Input, Button } from "../../components";
import Header1 from "../../components/Header1";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { SignUpFormValidationSchemas } from "./SignUpFormValidationSchemas";
import PinInput from "react-pin-input";
import SocialLogin from "components/SocialLogin/SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth/dist/index.cjs";
import auth from "firebase.init";
import { password } from "config/password";
import axios from "axios";
import Loading from "components/Loading/Loading";
import AuthContext from "context/AuthContext";
import { jwtDecode } from "jwt-decode";
import CitygelLogo from "components/Footer/CitygelLogo";
import { Dropdown, Select, Space, message } from "antd";
import { BASE_URL } from "config/api/axios";
import { FaAngleDown } from "react-icons/fa6";
import { DownOutlined } from "@ant-design/icons";

export default function SignUpPage() {
  const {
    handleSubmit,
    register,
    getFieldState,
    setValue,
    getValues,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(SignUpFormValidationSchemas),
    mode: "onChange",
  });

  const [user] = useAuthState(auth);
  const [countryCode, setCountryCode] = useState("+971");
  const [countryFlag, setCountryFlag] = useState("https://flagcdn.com/ae.svg");
  const [country, setCountry] = useState([]);
  let { setAuthToken, setTUser, tuser } = useContext(AuthContext);
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  
  const fetchCountry = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/all`);
      if (response.data) {
        console.log(response.data);
        setCountry(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCountry();
  }, []);

  const [createUserWithEmailAndPassword, cuser, gloading, hookerror] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: false });
  const [emailVeri, setEmailVerfi] = useState("");
  console.log(errors);
  const navigate = useNavigate();
  const { state } = useLocation();
  const from = state?.from?.pathname || "/";

  if (tuser && user && navigate) {
    navigate(from, { replace: true });
  }
  const onSubmit = async (e) => {
    console.log(e);
    const email = e.email;
    console.log({
      fullName: e.fullName,
      email: e.email,
      phoneNumber: countryCode + e.phoneNumber,
    });
    try {
      setLoading(true);
      const Verifyresponse = await axios.post(`${BASE_URL}/auth/verify-code`, {
        email: e.email,
        code: e.code,
      });
      if (Verifyresponse.data) {
        const response = await axios.post(`${BASE_URL}/users/create-user`, {
          fullName: e.fullName,
          email: e.email,
          phoneNumber: e.phoneNumber + countryCode,
        });
        const createUser = await createUserWithEmailAndPassword(
          e.email,
          password,
        );

        if (response.data && createUser) {
          setAuthToken(response.data.data.accessToken);
          setTUser(jwtDecode(response.data.data.accessToken));
          console.log(response.data.data.accessToken);
          localStorage.setItem("authToken", response.data.data.accessToken);
          message.success("Login Successfully");
          // message.success("Login Successfully");
        }
        setLoading(false);
        console.log(response.data);
      } else {
        message.error("Wrong Code Entered");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      if (error.response.data.message == "Your Account is already Created") {
        message.error("Your Account is already Created");
      } else message.error("Something Wrong");
    }
  };

  // const { email } = getValues();
  const handleSendCode = async () => {
    setLoading(true);
    console.log(emailVeri);
    try {
      if (emailVeri) {
        const response = await axios.post(`${BASE_URL}/auth/signup-send-code`, {
          email: emailVeri,
        });
        setLoading(false);
        if (response.data) {
          message.success("Otp code sent into your email");
        }
      } else {
        setLoading(false);
        message.error("please enter your email");
      }
    } catch (error) {
      setLoading(false);
      message.error("your account already signup please sign in");
    }
  };
  const handleSelect = (item) => {
    console.log(item);
    const suffiexes = item?.idd?.root + item?.idd?.suffixes[0];
    setCountryFlag(item?.flags?.svg);
    setCountryCode(suffiexes);
  };
  return (
    <>
      <Helmet>
        <title>Citygel</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div>
        <Header1 />
        <div className=" mx-auto flex w-full items-center justify-center overflow-hidden bg-gray-50">
          <div className="flex w-[100%] flex-col items-center justify-start px-5  sm:w-[36rem] sm:px-0">
            <div>
              <Img
                src="images/login.png"
                alt="background_one"
                className=" mx-auto  justify-center "
              />
            </div>
            <div className="z-[1] mt-[9px] w-full">
              <Text
                size="8xl"
                as="p"
                className=" text-center text-[24px] !text-black-900_03 sm:text-[36px]"
              >
                Create an Account
              </Text>
              <Text
                size="3xl"
                as="p"
                className=" text-center !text-[14px] !text-black-900_7e opacity-0.4  sm:text-[16px]"
              >
                Please enter your credential Details.
              </Text>
            </div>
            <div className="mt-[-3px] flex w-full flex-col items-center justify-start lg:w-[88%]">
              {loading || gloading ? (
                <Loading />
              ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mt-2 flex w-full flex-col items-start justify-start">
                    <Text
                      as="p"
                      className="mt-7 ml-1.5 !text-black-900_99 opacity-0.7"
                    >
                      Enter Your Full Name
                    </Text>
                    <div className="relative mt-[15px] h-[80px] w-full  rounded-[15px]">
                      <Input
                        register={register}
                        size="lg"
                        name="fullName"
                        onChange={(e) => {
                          setValue("fullName", e.target.value);
                        }}
                        placeholder="your name"
                        className={`w-full border border-solid border-cyan-700_01 ${
                          errors.fullName?.message
                            ? "border-red-600"
                            : "border-cyan-700_01"
                        }`}
                      />
                      {errors.fullName?.message && (
                        <Text
                          className="xs absolute bottom-[-20px] text-[#ef4c4c] "
                          fontSize="xs"
                          bottom="-19px"
                          position="absolute"
                          color="#E85A2D"
                        >
                          <>{errors.fullName?.message}</>
                        </Text>
                      )}
                    </div>
                    <Text
                      as="p"
                      className="mt-8 ml-1.5 !text-black-900_99 opacity-0.7"
                    >
                      Enter Your Phone number
                    </Text>
                    {/* <div className="relative mt-[5px] block w-full gap-[25px] md:flex ">
                      <Controller
                        control={control}
                        name="phoneNumber"
                        render={({
                          field: { onChange, onBlur, value, name, ref },
                          fieldState: { error },
                        }) => (
                          <PhoneInput
                            country={"us"}
                            value={value}
                            className={
                              value && error === undefined
                                ? "is-valid w-full "
                                : error
                                  ? "has-error w-full "
                                  : value && "is-valid w-full "
                            }
                            placeholder="Phone Number"
                            onChange={onChange}
                          />
                        )}
                      />

                      {errors.phoneNumber?.message && (
                        <Text
                          className="xs absolute bottom-[-20px] text-[#ef4c4c] "
                          fontSize="xs"
                          bottom="-19px"
                          position="absolute"
                          color="#E85A2D"
                        >
                          <>Please enter valid phone number</>
                        </Text>
                      )}
                    </div> */}
                    <div className=" relative mt-[6px] flex h-[70px] w-full flex-row space-x-1 rounded-[15px]">
                      <div className="flex flex-row items-center justify-center space-x-1 rounded-[15px] bg-[#d9d9d950] p-3">
                        <Dropdown
                          menu={{
                            items: country.map((item, index) => ({
                              label: (
                                <div className="flex flex-row items-center justify-center space-x-2">
                                  <img
                                    src={item.flags.svg} // Replace with the actual image source from your API response
                                    className="h-10 w-10 rounded-full"
                                    alt=""
                                  />
                                  <p className="font-semibold">
                                    {item.idd.root}
                                    {item?.idd?.suffixes &&
                                      item?.idd?.suffixes[0]}
                                  </p>
                                </div>
                              ),
                              key: index.toString(),
                              onClick: () => handleSelect(item),
                            })),
                          }}
                          trigger={["click"]}
                        >
                          <a onClick={(e) => e.preventDefault()}>
                            <Space>
                              <img
                                src={countryFlag}
                                className="h-10 w-10 rounded-full"
                                alt=""
                              />
                              <p className="">{countryCode}</p>
                              <FaAngleDown className="text-gray-700" />
                            </Space>
                          </a>
                        </Dropdown>
                      </div>
                      <div className="flex flex-1 items-center rounded-[15px] bg-[#d9d9d950] px-4">
                        <Controller
                          name="phoneNumber"
                          control={control}
                          rules={{ required: "Please enter a phone number" }}
                          render={({ field }) => (
                            <input
                              {...field}
                              className=""
                              type="number"
                              placeholder="(00) 123 456 7890"
                            />
                          )}
                        />
                      </div>
                      {errors.phoneNumber?.message && (
                        <Text
                          className="xs absolute bottom-[-20px] text-[#ef4c4c] "
                          fontSize="xs"
                          bottom="-19px"
                          position="absolute"
                          color="#E85A2D"
                        >
                          <>Please enter valid phone number</>
                        </Text>
                      )}
                    </div>

                    <Text
                      as="p"
                      className="mt-[30px] ml-1.5 !text-black-900_99 opacity-0.7"
                    >
                      Enter Your Email
                    </Text>
                    <div
                      className={`relative mt-[15px] h-[80px] w-full rounded-[15px] border border-solid ${
                        errors.email?.message
                          ? "border-red-600"
                          : "border-cyan-700_01"
                      } `}
                    >
                      <Input
                        register={register}
                        size="2xl"
                        type="email"
                        name="email"
                        placeholder="mail@email.com"
                        // value={emailVeri}
                        onChange={(e) => {
                          setEmailVerfi(e.target.value);
                          setValue("email", e.target.value);
                        }}
                        className="absolute left-0 bottom-0 right-0 top-0 m-auto w-full !text-black-900_6f"
                      />
                      <Button
                        type={"button"}
                        onClick={handleSendCode}
                        color="cyan_700_01"
                        size="5xl"
                        variant="fill"
                        className="absolute right-[1%] bottom-0 top-0 m-auto min-w-[170px] rounded-[15px]"
                      >
                        Send OTP
                      </Button>
                      {errors.email?.message && (
                        <Text
                          className="xs absolute bottom-[-20px] text-[#ef4c4c] "
                          fontSize="xs"
                          bottom="-19px"
                          position="absolute"
                          color="#E85A2D"
                        >
                          <>Please enter valid Email</>
                        </Text>
                      )}
                    </div>

                    <div className="relative mt-9 flex w-full items-center justify-center">
                      <Controller
                        name="code"
                        control={control}
                        defaultValue=""
                        render={({
                          field: { onChange, onBlur, value, name, ref },
                          fieldState: { error },
                        }) => (
                          <div>
                            <PinInput
                              length={6}
                              initialValue=""
                              value={value}
                              onChange={onChange}
                              type="numeric"
                              inputMode="number"
                              style={{ padding: "15px", paddingLeft: "40px" }}
                              inputStyle={{
                                borderColor: "transparent",
                                backgroundColor: "rgba(217, 217, 217, 0.21)",

                                borderRadius: "10px",
                              }}
                              inputFocusStyle={{ borderColor: "#0B90AF" }}
                              onComplete={(value, index) => {}}
                              autoSelect={true}
                              regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                            />
                          </div>
                        )}
                      />
                      {errors.code?.message && (
                        <Text
                          className="xs absolute bottom-[-20px] text-[#ef4c4c] "
                          fontSize="xs"
                          bottom="-19px"
                          position="absolute"
                          color="#E85A2D"
                        >
                          <>Please enter valid Code</>
                        </Text>
                      )}
                    </div>

                    <div className="mx-auto mt-[20px] flex w-full max-w-full flex-row justify-start">
                      <div className="flex w-full flex-col items-start justify-start gap-3">
                        <div className="relative mb-3">
                          <CheckBox
                            color="blue_gray_100_03"
                            name="terms"
                            register={register}
                            label={
                              <span>
                                I am accepting all
                                <span style={{ color: "#00e4e4" }}> Terms</span>
                                <span> &amp; </span>
                                <span style={{ color: "#00e4e4" }}>
                                  Conditions
                                </span>
                              </span>
                            }
                            className="gap-2.5 rounded-md text-left text-[13px]"
                          />
                          {errors.code?.message && (
                            <Text
                              className="xs absolute bottom-[-20px] text-[#ef4c4c] "
                              fontSize="xs"
                              bottom="-19px"
                              position="absolute"
                              color="#E85A2D"
                            >
                              <>You need to agree with terms</>
                            </Text>
                          )}
                        </div>
                        <CheckBox
                          register={register}
                          color="blue_gray_100_03"
                          name="marketing"
                          label="Are you interested to receive marketing communications"
                          className="gap-2.5 rounded-md text-left text-[13px]"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      style={{ backgroundColor: "#0B90AF" }}
                      className="mt-7 h-[80px] w-full rounded-[15px] font-poppins text-[24px] font-normal text-white-A700"
                    >
                      Create Account
                    </button>
                    <div></div>
                    <a href="#" className="mt-8">
                      <Text />
                    </a>
                    <div className="mt-[31px] flex w-full flex-row justify-start">
                      <div className="flex w-full flex-col items-center justify-start">
                        <div className="flex w-full flex-row items-start justify-start gap-[19px]">
                          <div className="mt-[13px] h-[2px] w-[46%] bg-black-900_75 opacity-0.3" />
                          <Text
                            size="2xl"
                            as="p"
                            className="text-center !text-black-900_75 opacity-0.3"
                          >
                            or
                          </Text>
                          <div className="mt-[13px] h-[2px] w-[46%] bg-black-900_75 opacity-0.3" />
                        </div>
                        <SocialLogin />
                        <Text
                          size="2xl"
                          as="p"
                          className="mt-[35px] text-center !text-red-500"
                        >
                          <span className="text-gray_500">
                            Already have an account?
                          </span>
                          <span className="text-red-500"></span>
                          <span
                            className="ml-2 cursor-pointer text-cyan-700_01"
                            onClick={() => navigate("/login")}
                          >
                            Sign in
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <CitygelLogo />
    </>
  );
}
