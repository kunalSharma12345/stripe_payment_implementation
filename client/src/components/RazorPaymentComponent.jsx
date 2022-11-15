import React from "react";
import axios from "axios";
// script for the razor pay..

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const RazorPaymentComponent = () => {
  //
  const onRazorPayButtonClick = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("RazorPay Sdk failed to load ,Are you online ??");
      return;
    }
    // api call
    const data = await axios.post("http://localhost:5300/api/v1/razor");
    console.log("api data response >>>>>>>> ", data);
    console.log("typeof: >>>>>>", typeof data.data.amount);
    console.log("data.amount: ", data.data.amount);
    console.log("data.amount: ", data.data.currency);
    //................................
    var options = {
      key: "rzp_test_Y8NZIKnm3IRtIR",
      currency: data?.data?.currency,
      amount: data?.data?.amount,
      order_id: data?.data?.id,
      name: "Donation",
      description: "Test transaction",
      image: "https://example.com/your_logo",
      handler: function (response) {
        console.log("response: after the payment successfully>>>>>", response);
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Rocky Singh",
        email: "demo@gmail.com",
        contact: "9294874783",
      },
      //   notes: {
      //     address: "Razor Pay cooperate office",
      //   },
      //   theme: {
      //     color: "#F37254",
      //   },
      //   pay_KgAR8lNQL0JzAZ payment id
    };
    const paymentObj = new window.Razorpay(options);
    paymentObj.open();
  };
  return (
    <>
      <h2>This is razor Payment Component</h2>
      <br />
      <button onClick={onRazorPayButtonClick}>
        Checkout for payment using Razor{" "}
      </button>
    </>
  );
};

export default RazorPaymentComponent;
