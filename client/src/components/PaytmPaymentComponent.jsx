import React from "react";

const PaytmPaymentComponent = () => {
  const onButtonClickHandler = () => {
    console.log("Button clicked ");
  };

  return (
    <>
      <h2>Paytm Payment Component</h2>
      <button onClick={onButtonClickHandler}>Pay Via Paytm</button>
    </>
  );
};

export default PaytmPaymentComponent;
