import { message } from "antd";
import useAxios from "config/api/useAxios";
import auth from "firebase.init";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import AdsData from "./FieldData";

const AllField = () => {
  const api = useAxios();
  const [user1] = useAuthState(auth);
  const [ads, seAds] = useState([]);
  const [allow, setAllow] = useState("");
  const handleOption = async (value, id) => {
    setAllow(value);
    const verifyresponse = await api.patch(`/ads/${id}`, { status: allow });
    if (verifyresponse.data) {
      fetchads();
      message.success("delete Successfully");
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
    const verifyresponse = await api.delete(`/ads/${id}`);
    if (verifyresponse.data) {
      fetchads();
      message.success("delete Successfully");
    }
  };
  const editads = () => {};
  console.log(ads);

  return (
    <div className="no-scrollbar mt-5 overflow-x-auto rounded-lg shadow">
      <table className="w-full min-w-[500px] text-left rtl:text-right">
        <thead className="bg-[#20C5F2]">
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
                className={`flex items-center justify-center py-3 font-medium w-${i === 0 ? "14" : i === 1 ? "28" : i === 2 ? "32" : i === 3 ? "48" : i === 4 ? "52" : i === 5 ? "40" : "32"}`}
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

export default AllField;
