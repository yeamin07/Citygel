import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    currentStep: 1,

    form: {},
    date: "",
    category: null,
    subcategory: null,
    total_cost: 0,

    membershipExpire: 0,
    membership: {
      membershipName: null,
      price: null,
      duration: null,
    },
  },
  reducers: {
    nextStep: (state) => {
      state.currentStep += 1;
    },
    prevStep: (state) => {
      state.currentStep -= 1;
    },
    setMembership: (state, action) => {
      state.membership = action.payload;
      state.total_cost = state.membership.price;
    },
    setMembershipExpire: (state, action) => {
      state.membershipExpire = action.payload;
    },
    setForm: (state, action) => {
      state.form = action.payload;
      state.currentStep += 1;
    },

    resetForm: (state) => {
      state.currentStep = 1;
      state.sender = {};
      state.recipient = {};
    },
    setCurrent: (state, action) => {
      state.currentStep = action.payload;
    },

    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSubCategory: (state, action) => {
      state.subcategory = action.payload;
    },
  },
});

export const {
  nextStep,
  prevStep,
  setMembershipExpire,
  setPackageAddon,
  setCurrent,
  setCategory,
  setForm,
  setSubCategory,
  setMembership,
} = postSlice.actions;

export default postSlice;
