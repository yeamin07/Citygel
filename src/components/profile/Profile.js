import Background from "./Background";

import ConditionChecker1 from "./ConditionChecker1";
import ConditionChecker from "./ConditionChecker";
import Header1 from "components/Header1";
import CitygelLogo from "../Footer/CitygelLogo";
import { Text } from "components";

const Profile = () => {
  return (
    <div>
      <Header1 className="flex w-full flex-col items-center justify-center" />
      <div className="flex w-full flex-col items-start justify-start gap-[20px] overflow-hidden rounded-31xl bg-gray-200 tracking-[normal]">
        <section className="flex max-w-full flex-col items-start justify-start self-stretch">
          {/* <Background /> */}
          <div className="flex items-center justify-center">
            <div className="text-center ">
              {" "}
              <Text className="28px" as={"h3"}>
                My Profiles
              </Text>{" "}
            </div>
            <div className="text-center ">
              {" "}
              <Text className="28px" as={"h3"}>
                My Profiles
              </Text>{" "}
            </div>
            <div className="text-center ">
              {" "}
              <Text className="28px" as={"h3"}>
                My Profiles
              </Text>{" "}
            </div>
          </div>
        </section>
        <section className="box-border flex max-w-full flex-row items-start justify-center self-stretch px-5 pt-0 pb-5">
          <div className="w- flex max-w-full flex-col items-start justify-start gap-[20px]">
            <ConditionChecker1 />
            <ConditionChecker />
          </div>
        </section>
        <section className="text-gray-1200 box-border flex h-[307px] max-w-full flex-col items-center justify-start gap-[10px] self-stretch bg-whitesmoke-100 py-[37px] px-5 text-left font-poppins text-xl">
          <div className="relative hidden h-[307px] w-full max-w-full bg-whitesmoke-100" />
          <img
            className="relative z-[1] h-[193px] w-[390px] max-w-full object-cover"
            loading="lazy"
            alt=""
            src="/citygel2@2x.png"
          />
          <div className="box-border flex max-w-full flex-row items-start justify-start py-0 pr-1.5 pl-2">
            <div className="relative z-[1] mq450:text-base">
              ©CityGel.com 2024, All rights Reseved
            </div>
          </div>
        </section>
      </div>
      <CitygelLogo />
    </div>
  );
};

export default Profile;
