import { message } from "antd";
import useAxios from "config/api/useAxios";
import auth from "firebase.init";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import AdsData from "./AdsData";

const AllAdsTable = () => {
  const api = useAxios();
  const [user1] = useAuthState(auth);
  const [ads, seAds] = useState([]);
  const [allow, setAllow] = useState("");
  const handleOption = async (value, id) => {
    setAllow(value);
    const verifyresponse = await api.patch(`/ads/${id}`, { status: value });
    if (verifyresponse.data) {
      fetchads();
      message.success("Updated Successfully");
    }
  };
  const fetchads = async () => {
    const verifyresponse = await api.get("/ads");
    seAds(verifyresponse.data.data);
  };
  useEffect(() => {
    fetchads();
  }, []);
  const deleteAds = async (id) => {
    try {
      const verifyresponse = await api.delete(`/ads/${id}`);
      if (verifyresponse.data) {
        fetchads();
        message.success("delete Successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const editads = () => {};
  console.log(ads);

  return (
    <div className="no-scrollbar mt-5 overflow-x-auto rounded-lg shadow">
      <table className="w-full min-w-[500px] text-left rtl:text-right">
        <thead className="bg-[#000000]">
          <tr className="flex w-full justify-between gap-2">
            {[
              "#",
              "mainImage",
              "title",
              "price",
              "owners",
              "category",
              "subcategory",
              "Action",
              "Edit",
            ].map((title, i) => (
              <th
                key={i}
                scope="col"
                className={`flex items-center justify-center  rounded-t-xl py-6 font-medium text-white-A700 w-${i === 0 ? "20" : i === 1 ? "28" : i === 2 ? "48" : i === 3 ? "48" : i === 4 ? "52" : i === 5 ? "40" : "32"}`}
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ads?.map((adsData, i) => (
            <AdsData
              key={adsData.id}
              {...adsData}
              {...{ deleteAds }}
              {...{ editads }}
              {...{ handleOption, allow, setAllow }}
              index={i}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllAdsTable;
