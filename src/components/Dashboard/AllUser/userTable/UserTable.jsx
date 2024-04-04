import { useEffect, useState } from "react";
import UserData from "./UserData";
import axios from "config/api/axios";
import useAxios from "config/api/useAxios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "firebase.init";
import { message } from "antd";

export default function UserTable() {
  const api = useAxios();
  const [user1] = useAuthState(auth);
  const [user, setUser] = useState([]);
  const fetchUser = async () => {
    const verifyresponse = await api.get("/users");
    setUser(verifyresponse.data.data);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  const deleteUser = async (email) => {
    const verifyresponse = await api.delete(
      `/users/${email}?newemail=${user1?.email}`,
    );
    if (verifyresponse.data) {
      fetchUser();
      message.success("delete Successfully");
    }
  };
  const editUser = () => {};

  console.log(user);

  return (
    <div className="no-scrollbar mt-5 overflow-x-auto rounded-lg shadow">
      <table className="w-full min-w-[500px] text-left rtl:text-right">
        <thead className="bg-[#20C5F2]">
          <tr className="flex w-full justify-between gap-2">
            {[
              "#",
              "Picture",
              "Email",
              "FullName",
              "Phone Number",
              "Ads",
              "Action",
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
          {user?.map((user, i) => (
            <UserData
              key={user.id}
              {...user}
              {...{ deleteUser }}
              {...{ editUser }}
              index={i}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
