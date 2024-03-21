import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    currentStep: 1,

    form: {},
    date: "",
    category: null,
    subcategory: null,
    // packages: [
    //   {
    //     packing: "",
    //     box: {
    //       size: "",
    //       length: "",
    //       width: "",
    //       height: "",
    //       weight: "",
    //     },
    //     items: [
    //       { quantity: 0, description: "", category: "", value: 0, weight: 0 },
    //     ],
    //     items_total_value: 0,
    //   },
    // ],

    addons: {
      insurance: { insured: false, value: 0 },
      taxes_and_duties: { payer: "receiver", value: 0 },
    },
    total_cost: 0,
  },
  reducers: {
    setForm: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    updateInsurance: (state, action) => {
      state.addons.insurance = action.payload;
    },
    updateTaxAndDuties: (state, action) => {
      state.addons.taxes_and_duties = action.payload;
    },
    updateTotalCost: (state, action) => {
      state.total_cost = action.payload;
    },
    nextStep: (state) => {
      state.currentStep += 1;
    },
    prevStep: (state) => {
      state.currentStep -= 1;
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
  // setForm,
  // updateInsurance,
  // updateTaxAndDuties,
  // updateTotalCost,
  nextStep,
  prevStep,
  // setSender,
  // setRecipient,
  // setPackage,
  // setAddOns,
  // resetForm,
  // updateDate,
  setPackageAddon,
  setCurrent,
  setCategory,
  setForm,
  setSubCategory,
} = postSlice.actions;

export default postSlice;
