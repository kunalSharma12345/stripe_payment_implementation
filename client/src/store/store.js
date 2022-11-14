import { configureStore } from "@reduxjs/toolkit";
import { StripePaymentReducer } from "../redux-toolkit/stripePaymentSlice";

const store = configureStore({
  reducer: {
    // key:reducer
    StripePaymentKey: StripePaymentReducer,
  },
});

export default store;
