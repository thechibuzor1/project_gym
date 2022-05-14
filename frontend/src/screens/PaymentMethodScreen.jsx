import React, { useContext, useState } from "react";
import CheckoutSteps from "../components/CheckoutSteps";
import { Helmet } from "react-helmet-async";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Store } from "../Store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentMethodScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { shippingAddress, paymentMethod },
  } = state;

  const [paymentMethodName, setPaymentMethod] = useState(
      paymentMethod || 'flutterwave'
  );

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate("/shipping");
    }
  }, [shippingAddress, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethodName });
    localStorage.setItem('paymentMethod', paymentMethodName);
    navigate('/Placeorder');
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="container small-container">
        <Helmet>
          <title>Payment Method</title>
        </Helmet>
        <h1 style={{ color: "green" }} className="my-3">
          Payment Method
        </h1>
        <Form onSubmit={submitHandler}>
           
            <div style={{ color: "green" }} className="mb-3">
              <Form.Check
                type="radio"
                id="PayStack"
                label="PayStack"
                value="PayStack"
                checked={paymentMethodName === "PayStack"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </div>
            <div className="mb-3">
            <Button style={{ background: "green" }} type="submit">Continue</Button>
            </div>
          </Form>
      </div>
    </div>
  );
}
