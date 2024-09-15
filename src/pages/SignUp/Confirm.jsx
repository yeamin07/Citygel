import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Text, Img, CheckBox, Input } from "../../components";
import Header1 from "../../components/Header1";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import SocialLogin from "components/SocialLogin/SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth/dist/index.cjs";
import auth from "firebase.init";
import { password } from "config/password";
import axios from "axios";
import { ConfirmValidation } from "./ConfirmValidation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "context/AuthContext";
import { jwtDecode } from "jwt-decode";
import CitygelLogo from "components/Footer/CitygelLogo";
import Loading from "components/Loading/Loading";
import { BASE_URL } from "config/api/axios";
export default function Confirm() {
  const {
    handleSubmit,
    register,
    setValue,
    getFieldState,
    getValues,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(ConfirmValidation),
    mode: "onChange",
  });
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  let { setAuthToken, setTUser, tuser } = useContext(AuthContext);
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const fetchUser = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users/${user?.email}`);
      if (response.data) {
        console.log(response.data);
        navigate(from);
      }
    } catch (error) {}
  };
  useEffect(() => {
    fetchUser();
  }, [user, tuser]);

  console.log(errors);
  const onSubmit = async (e) => {
    console.log(e);
    setValue("email", user?.email);
    setLoading(true);
    try {
      const { email } = getValues();
      if (e) {
        const response = await axios.post(
          `${BASE_URL}/users/create-user-confirm`,
          {
            email,
            phoneNumber: e.phoneNumber,
            marketing: e.marketing,
            fullName: e.fullName,
            terms: true,
          },
        );
        console.log(response.data);
        if (response.data) {
          setAuthToken(response.data.data.accessToken);
          setTUser(jwtDecode(response.data.data.accessToken));
          console.log(response.data.data.accessToken);
          localStorage.setItem("authToken", response.data.data.accessToken);
          setLoading(false);
          toast.success("You Account Created Successfully!", {
            position: "top-right",
          });
          navigate(from);
        }
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      navigate("/");
    }
  };

  return (
    <>
      <ToastContainer />
      <Helmet>
        <title>Citygel</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <Header1 />
      <div className="flex w-full flex-col items-center justify-start bg-gray-50">
        <div className="flex w-[32%] flex-col items-center justify-start mq450:w-[100%] ">
          <div className="relative h-[372px]  w-full max-w-[372px]">
            <div className="absolute top-[11%] right-0 left-0 m-auto flex w-full flex-col items-start justify-start">
              <div className="relative h-[257px] w-full">
                <Img
                  src="images/img_background_complete.svg"
                  alt="background_one"
                  className="absolute left-0 bottom-0 right-0 top-0 m-auto h-[257px] justify-center"
                />
                <Img
                  src="images/img_group.svg"
                  alt="image_one"
                  className="absolute right-[28%] top-[26%] m-auto h-[37px]"
                />
              </div>
              <Img
                src="images/img_plant.svg"
                alt="plant_one"
                className="z-[1] mt-[-93px] ml-[58px] h-[104px]"
              />
            </div>
            <div className="absolute bottom-[15%] right-0 left-0 m-auto flex w-[78%] flex-col items-end justify-start">
              <div className="mr-1.5 flex w-[67%] flex-row items-center justify-end">
                <Img
                  src="images/img_character.svg"
                  alt="character_one"
                  className="z-[1] h-[158px]"
                />
                <Img
                  src="images/img_lamp.svg"
                  alt="lamp_one"
                  className="ml-[-6px] h-[203px]"
                />
              </div>
              <Img
                src="images/img_x3c_path_x3e_359.svg"
                alt="x3cpathx3e_one"
                className="mt-[-8px] h-[16px]"
              />
            </div>
            <div className="absolute left-[20%] top-[24%] m-auto flex w-[30%] flex-col items-center justify-start">
              <div className="flex w-full flex-col items-center justify-start">
                <div className="flex w-full flex-col items-center justify-start rounded-md bg-white-A700 p-[18px]">
                  <div className="mt-1.5 flex w-[99%] flex-col items-center justify-start gap-[13px]">
                    <Img
                      src="images/img_group_white_a700.svg"
                      alt="image_two"
                      className="h-[29px] w-[29px]"
                    />
                    <div className="flex w-full flex-col items-center justify-start">
                      <div className="flex w-full flex-row justify-center">
                        <div className="flex w-full flex-col items-start justify-start">
                          <div className="relative h-[12px] w-full">
                            <Img
                              src="images/img_vector_white_a700.svg"
                              alt="vector_one"
                              className="absolute left-0 bottom-0 right-0 top-0 m-auto h-[12px] justify-center"
                            />
                            <Img
                              src="images/img_vector_black_900_03.svg"
                              alt="vector_three"
                              className="absolute right-[6%] bottom-0 top-0 m-auto h-[5px] opacity-0.2"
                            />
                          </div>
                          <div className="z-[1] mt-[-8px] ml-[7px] flex flex-row justify-start">
                            <Text
                              size="s"
                              as="p"
                              className="!font-inter !text-black-900_03"
                            >
                              Name@mail.com
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        size="xs"
                        as="p"
                        className="mt-[11px] w-[24%] !font-inter !text-black-900_03"
                      >
                        Sign up now
                      </Text>
                      <div className="relative mt-[-2px] h-[12px] w-full">
                        <Img
                          src="images/img_vector_cyan_700_01.svg"
                          alt="vector_five"
                          className="absolute left-0 bottom-0 right-0 top-0 m-auto h-[12px] justify-center"
                        />
                        <a
                          href="#"
                          className="absolute top-[17%] right-0 left-0 m-auto w-max"
                        >
                          <Text size="md" as="p" className="!font-inter">
                            Login
                          </Text>
                        </a>
                      </div>
                      <a href="#" className="mt-[5px] w-[36%]">
                        <Text
                          size="xs"
                          as="p"
                          className="!font-inter !text-black-900_03"
                        >
                          Forgot Password?
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="z-[1] mt-[9px] w-[400px]">
            <Text size="8xl" as="p" className="text-center !text-black-900_03">
              Confirm Details
            </Text>
            <Text
              size="3xl"
              as="p"
              className="text-center !text-black-900_7e opacity-0.4"
            >
              Please enter your credential Details.
            </Text>
          </div>
          <div className="mt-[-3px] flex w-full flex-col items-center justify-start">
            {!loading ? (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-2 flex w-full flex-col items-start justify-start">
                  <Text
                    as="p"
                    className="mt-7 ml-1.5 !text-black-900_99 opacity-0.7"
                  >
                    Enter Your Full Name
                  </Text>
                  <div className="relative mt-[15px] h-[80px] w-full rounded-[15px]">
                    <Input
                      register={register}
                      size="lg"
                      onChange={(e) => {
                        setValue("fullName", e.target.value);
                      }}
                      name="fullName"
                      placeholder="Please Type Full Name"
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
                  <div className="relative mt-[5px] block w-full gap-[25px] md:flex ">
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
                  </div>
                  <Text
                    as="p"
                    className="mt-[40px] ml-1.5 !text-black-900_99 opacity-0.7"
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
                      onChange={(e) => {
                        setValue("email", user?.email);
                      }}
                      value={user?.email}
                      placeholder="mail@email.com"
                      className="absolute left-0 bottom-0 right-0 top-0 m-auto w-full !text-black-900_6f"
                    />

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
                        {errors.terms?.message && (
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
            ) : (
              <Loading />
            )}
          </div>
        </div>
        <CitygelLogo />
      </div>
    </>
  );
}
