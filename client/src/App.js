import React from "react";
import { Routes, Route } from "react-router-dom";
import StripePaymentComponent from "./components/StripePaymentComponent";
import OnSuccess from "./components/OnSuccess";
import OnCancel from "./components/OnCancel";

const App = () => {
  return (
    <>
      {/* <div>App Component</div>
      <StripePaymentComponent /> */}

      <Routes>
        <Route path="/" element={<StripePaymentComponent />} />
        <Route path="/success" element={<OnSuccess />} />
        <Route path="/cancel" element={<OnCancel />} />
      </Routes>
    </>
  );
};

export default App;
