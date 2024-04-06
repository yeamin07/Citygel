import DefaultLayout from "components/Dashboard/layout/DefaultLayout";
import React, { useEffect } from "react";
import Dashtable from "components/Dashboard/DashTable/Dashtable";
import { useState } from "react";
import { Modal, message } from "antd";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import SubCategory from "./SubCategory";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "firebase.init";
import useAxios from "config/api/useAxios";
import { toast } from "react-toastify";

const AddCategory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const api = useAxios();
  const [user1] = useAuthState(auth);
  const [categoryName, setCategoryName] = useState("");
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [categoryNameError, setCategoryNameError] = useState("");

  const handleSubmit = async () => {
    if (!categoryName.trim()) {
      setCategoryNameError("Category name is required");
      return;
    }

    // Reset error state
    setCategoryNameError("");

    // Collect all the details here and perform any necessary actions
    const formData = {
      name: categoryName,
      subcategories: selectedSubcategories,
    };
    console.log("Form Data:", formData);
    const addcategory = await api.post("/category", formData);
    if (addcategory.data) {
      toast("category is added");
      handleOk();
    }
    // Close the modal
  };
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);
  const fetchUser = async () => {
    const getAllcategory = await api.get("/category");
    const getAllsubcategory = await api.get("/subcategory");
    setCategory(getAllcategory.data.data);
    setSubCategory(getAllsubcategory.data.data);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  console.log(category, subcategory);
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

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const city = [
    { title: "Motor Cycle", year: 1994 },
    { title: "Car", year: 1972 },
    { title: "Rikhshaw", year: 1974 },
    { title: "Cycle", year: 2008 },
    { title: "Audi", year: 1957 },
    { title: "Used Car", year: 1993 },
    { title: "Non Used car", year: 1994 },
    { title: "Uni Vehicle", year: 1994 },
  ];

  {
    /*~~~~~~~~~~~~~~~~temporary subcategory~~~~~~~~~~~~~~~~~~  */
  }
  const addCategory = [
    {
      id: 5,
      category: "Vehicle",
      subcategory: "Motor Cycle,Car",
      Ad: "Ad Name",
      State: "United Arab Emirats",
    },
    {
      id: 6,
      category: "Vehicle",
      subcategory: "Motor Cycle,Car",
      Ad: "Ad Name",
      State: "United Arab Emirats,United State of america,Sudan",
    },
    {
      id: 7,
      category: "Vehicle",
      subcategory: "Motor Cycle,Car",
      Ad: "Ad Name",
      State: "United Arab Emirats",
    },
    {
      id: 8,
      category: "Vehicle",
      subcategory: "Motor Cycle,Car",
      Ad: "Ad Name",
      State: "United Arab Emirats",
    },
    {
      id: 9,
      category: "Vehicle",
      subcategory: "Motor Cycle,Car",
      Ad: "Ad Name",
      State: "United Arab Emirats",
    },
    {
      id: 10,
      category: "Vehicle",
      subcategory: "Motor Cycle,Car",
      Ad: "Ad Name",
      State: "United Arab Emirats",
    },
    {
      id: 11,
      category: "Vehicle",
      subcategory: "Motor Cycle,Car",
      Ad: "Ad Name",
      State: "United Arab Emirats",
    },
    {
      id: 12,
      category: "Vehicle",
      subcategory: "Motor Cycle,Car",
      Ad: "Ad Name",
      State: "United Arab Emirats",
    },
  ];

  return (
    <DefaultLayout className="flex flex-col justify-start gap-[25px]">
      <p className="ml-3 mb-3 text-[17px] font-medium text-black-900_87 lg:text-[20px]">
        Add Category
      </p>
      <button
        type="primary"
        className="rounded-2xl bg-gradient-to-r from-cyan-500 to-cyan-700  px-10 py-4 font-serif text-[14px] text-white-A700 lg:text-[18px]"
        onClick={showModal}
      >
        Add Category
      </button>
      <Modal
        title="Category"
        visible={isModalOpen}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        <input
          type="text"
          placeholder="Enter Category Name"
          className="mb-3 h-[45px] w-[18rem] rounded-[12px] bg-cyan-200 
      px-2 text-[13px] focus:rounded-[12px] focus:border-[1px] focus:border-solid focus:border-cyan-500 md:w-full md:text-[18px]"
          value={categoryName}
          onChange={(e) => {
            setCategoryName(e.target.value);
            setCategoryNameError("");
          }}
          required // Add the required attribute
        />
        {categoryNameError && (
          <p className="text-red-500">{categoryNameError}</p>
        )}

        <div className="flex flex-col justify-start gap-[2px]">
          <p className="mb-[3px] text-[16px] font-medium">SubCategory:</p>
          <Stack
            spacing={3}
            sx={{ width: 500 }}
            className="mb-7 w-[6rem] sm:w-[90%]"
          >
            <Autocomplete
              multiple
              id="tags-standard"
              options={subcategory}
              getOptionLabel={(option) => option.name}
              value={selectedSubcategories}
              onChange={(event, newValue) => {
                setSelectedSubcategories(newValue);
              }}
              className="w-[18rem] sm:w-[90%]"
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Enter SubCategory"
                  placeholder="Select Subcategory"
                />
              )}
            />
          </Stack>
        </div>
      </Modal>
      <Dashtable
        HeaderD="Category"
        FirstSec="Category"
        SecondSec="Sub Category"
        ThirdSec="Ad Name"
        fifthSec="Action"
        datafromU={category}
        popup={showModal}
      />
    </DefaultLayout>
  );
};

export default AddCategory;
