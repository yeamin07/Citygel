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
      </div>
      <CitygelLogo />
    </div>
  );
};

export default Profile;
