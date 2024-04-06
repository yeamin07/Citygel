import DefaultLayout from "components/Dashboard/layout/DefaultLayout";

import React from "react";
import Dashtable from "components/Dashboard/DashTable/Dashtable";
import { useEffect } from "react";
import { useState } from "react";
import { Modal, message } from "antd";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "firebase.init";
import useAxios from "config/api/useAxios";
import { toast } from "react-toastify";

const SubCategory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const api = useAxios();
  const [user1] = useAuthState(auth);
  const [subCategoryName, setSubCategoryName] = useState("");
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [singleCategory, setSubSingleCategory] = useState({});
  const [categoryNameError, setSubCategoryNameError] = useState("");
  const [editingCategory, setEditingSubCategory] = useState(null);
  const handleSubmit = async (item) => {
    if (!subCategoryName.trim()) {
      setSubCategoryNameError("Category name is required");
      return;
    }

    // Reset error state
    setSubCategoryNameError("");

    // Collect all the details here and perform any necessary actions
    const formData = {
      name: subCategoryName,
    };
    console.log("Form Data:", formData);
    if (editingCategory) {
      const updateCategory = await api.patch(
        `subcategory/${editingCategory.name}`,
        formData,
      );
      if (updateCategory.data) {
        toast("SubCategory updated successfully");
        fetchUser();
        handleOk();
      }
    } else {
      const addCategory = await api.post("/subcategory", formData);
      if (addCategory.data) {
        toast("SubCategory added successfully");
        fetchUser();
        handleOk();
      }
    }
    // Close the modal
  };
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);
  const fetchUser = async () => {
    const getAllsubcategory = await api.get("/subcategory");
    setSubCategory(getAllsubcategory.data.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  console.log(category, subcategory);
  const deleteItem = async (name) => {
    const verifyresponse = await api.delete(`/subcategory/${name}/`);
    if (verifyresponse.data) {
      fetchUser();
      message.success("delete Successfully");
    }
  };
  const editUser = async (name) => {
    const verifyresponse = await api.delete(`/subcategory/${name}`);
    if (verifyresponse.data) {
      fetchUser();
      message.success("delete Successfully");
    }
  };

  const showModal = (category) => {
    if (category) {
      setEditingSubCategory(category);
      setSubCategoryName(category.name);
      // setSelectedSubcategories(category.subcategories);
    } else {
      setEditingSubCategory(null);
      setSubCategoryName("");
      // setSelectedSubcategories([]);
    }

    setIsModalOpen(true);
  };
  const showreateModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  {
    /*~~~~~~~~~~~~~~~~temporary subcategory~~~~~~~~~~~~~~~~~~  */
  }
  return (
    <DefaultLayout className="flex flex-col justify-start gap-[25px]">
      <p className="ml-3 mb-3 text-[17px] font-medium text-black-900_87 lg:text-[20px]">
        Add SubCategory
      </p>
      <button
        type="primary"
        className="rounded-2xl bg-gradient-to-r from-cyan-500 to-cyan-700  px-10 py-4 font-serif text-[14px] text-white-A700 lg:text-[18px]"
        onClick={() => showModal()}
      >
        Add SubCategory
      </button>
      <Modal
        title="SubCategory"
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        <input
          type="text"
          placeholder="Enter Category Name"
          className="mb-3 h-[45px] w-[18rem] rounded-[12px] bg-cyan-200 
      px-2 text-[13px] focus:rounded-[12px] focus:border-[1px] focus:border-solid focus:border-cyan-500 md:w-full md:text-[18px]"
          value={subCategoryName}
          onChange={(e) => {
            setSubCategoryName(e.target.value);
            setSubCategoryNameError("");
          }}
          required // Add the required attribute
        />
        {categoryNameError && (
          <p className="text-red-500">{categoryNameError}</p>
        )}
      </Modal>
      <Dashtable
        HeaderD="SubCategories"
        FirstSec="SubCategory"
        SecondSec="Category"
        thirdSec="Ads"
        fourthSec="Date"
        fifthSec="Action"
        {...{ category: subcategory, deleteItem }}
        popup={showModal}
      />
    </DefaultLayout>
  );
};

export default SubCategory;
