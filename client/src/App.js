import React from "react";
import { Routes, Route } from "react-router-dom";
import StripePaymentComponent from "./components/StripePaymentComponent";
import OnSuccess from "./components/OnSuccess";
import OnCancel from "./components/OnCancel";
import RazorPaymentComponent from "./components/RazorPaymentComponent";

const App = () => {
  return (
    <>
      {/* <div>App Component</div>
      <StripePaymentComponent /> */}

      <Routes>
        <Route path="/" element={<StripePaymentComponent />} />
        <Route path="/razor" element={<RazorPaymentComponent />} />
        <Route path="/success" element={<OnSuccess />} />
        <Route path="/cancel" element={<OnCancel />} />
      </Routes>
    </>
  );
};

export default App;
