const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  // eslint-disable-next-line max-len
  "sk_test_51K0aynDyJIXS7YPOg9bWzAqzEGRYB13u0DLAw1F4l0BkEX5kGuwv6EXetgfjTJY8KwVtd8zAyHnXuPyTkZ1ve7W500w87mIpst"
);

// API

// App config
const app = express();
// Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

// API routes

app.get("/", (request, response) => {
  response.status(200).send("hello Maya");
});

// eslint-disable-next-line max-len
// app.post('/hello', (request, response) => response.status(200).send("hello"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>>>> ", total);

  const paymentIntent = await stripe.paymentIntents
    .create({
      amount: total, // subunits of the currency
      currency: "usd",
    })
    .catch((err) => {
      console.log(err.message);
    });
  // OK -Created

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-f9170/us-central1/api
