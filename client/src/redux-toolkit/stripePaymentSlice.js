import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { stripeApiFn } from "../services/stripeApi";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  responseData: [],
  responseCode: "",
};

export const StripePayment = createAsyncThunk(
  "app/stripePayment",
  async (payload) => {
    console.log("payload: in the slice >", payload);
    try {
      const data = await stripeApiFn(payload);
      return data;
    } catch (error) {
      console.log("Error >>>", error);
    }
  }
);

export const StripePaymentSlice = createSlice({
  name: "StripePayment",
  initialState,
  reducers: {},
  extraReducers: {
    [StripePayment.pending]: (state) => {
      state.isLoading = true;
    },
    [StripePayment.fulfilled]: (state, { payload }) => {
      console.log("payload: in the fulfilled extra reducer >>>", payload);
      state.isLoading = false;
      state.isSuccess = true;
      state.responseData = payload.data;
    },
    [StripePayment.rejected]: (state, { payload }) => {
      state.isError = true;
      state.isLoading = false;
    },
  },
});

export const StripePaymentReducer = StripePaymentSlice.reducer;
