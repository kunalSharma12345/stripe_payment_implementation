import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
});

export const stripeApiFn = async (payload) => {
  console.log("payload: in the api function >>>", payload);
  const headers = {
    "Content-Type": "application/json",
  };

  const res = await axiosInstance.post(
    "/create-stripe-payment",
    { ...payload },
    headers
  );
  console.log("response in the api function >>>>: ", res);

  return res;
};
