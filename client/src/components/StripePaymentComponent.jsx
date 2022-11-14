import React from "react";
import { StripePayment } from "../redux-toolkit/stripePaymentSlice";
import { useDispatch, useSelector } from "react-redux";

const StripePaymentComponent = () => {
  const { responseData } = useSelector((state) => state.StripePaymentKey);
  console.log("responseData: in the useSelector >>", responseData);

  const dispatch = useDispatch();
  const onButtonClick = async () => {
    console.log("checkout button clicked");
    const response = await dispatch(
      StripePayment({
        items: [
          { id: 1, quantity: 5 },
          { id: 2, quantity: 4 },
        ],
      })
    );
    console.log("response: ", response);
    window.location = response?.payload?.data?.url;
  };

  return (
    <>
      <h1>Stripe payment Component</h1>
      <button onClick={onButtonClick}>Checkout for payment</button>
    </>
  );
};

export default StripePaymentComponent;
