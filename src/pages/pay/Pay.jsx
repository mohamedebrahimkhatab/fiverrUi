import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";

import "./Pay.scss";
import newRequest from "../../utils/newRequest";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm";

const stripePromise = loadStripe("pk_test_51N8uSTLxQgBkUR8rhpuOXiBGNuvrwXjtGsjDEaJMUcYm6YKjIMinLvvPJBsWDROWrIjLW2ivtm8XNWyvFNJyDjoe00U1VRt9Gq");

const Pay = () => {
  const [clientSecret, setClientSecret] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await newRequest.post(
          `/orders/create-payment-intent/${id}`
        );
        setClientSecret(res.data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="pay">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Pay;
