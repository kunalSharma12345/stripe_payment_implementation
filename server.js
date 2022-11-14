require("dotenv").config({ path: "./config/data.env" });
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:5300",
//   })
// );
const stripe = require("stripe")(process.env.STRIPE_PAYMENT_SECRET_KEY);

const PORT = process.env.PORT || 5000;

const storeItems = new Map([
  [1, { priceInCents: 10000, name: "Learn React Today" }],
  [2, { priceInCents: 20000, name: "Learn Css Today" }],
]);

app.get("/", async (req, res) => {
  res.send("Server is working fine");
});

app.post("/api/v1/create-stripe-payment", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      // options regarding the payment type like card , credit card and wallet etc...
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        const storeItem = storeItems.get(item.id);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.ON_SUCCESS_URL}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: process.env.ON_CANCEL_URL,
    });
    res.status(201).json({
      url: session.url,
    });
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
});

app.get("/api/v1/success-page", async (req, res) => {
  console.log(1111111);

  try {
    // res.status(200).json({ prakash: "fg ijuadgsijufgdikuagfiksug" });
    console.log(222222);
    const session = await stripe.checkout.sessions.retrieve(
      req.query.session_id
    );
    console.log("session: >>>>>", session);
    const customer = await stripe.customersq;
    console.log(3333333);
    res.status(301).redirect("https://www.google.com");
    console.log(444444);
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is working at the port number ${PORT}`);
});
