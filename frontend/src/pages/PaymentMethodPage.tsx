import { useContext, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import CheckoutSteps from '../components/CheckoutSteps'
import { Store } from '../Store'
import { toast } from 'react-toastify'

export default function PaymentMethodPage() {
  const navigate = useNavigate()
  const { state, dispatch } = useContext(Store)
  const {
    cart: { shippingAddress, paymentMethod },
  } = state

  const [paymentMethodName, setPaymentMethodName] = useState(
    paymentMethod || 'PayPal'
  )
  useEffect(() => {
    if (!shippingAddress.address) {
      navigate('/shipping')
    }
  }, [shippingAddress, navigate])

const submitHandler = (e: React.SyntheticEvent) => {
  e.preventDefault();
  dispatch({ type: "SAVE_PAYMENT_METHOD", payload: paymentMethodName });
  localStorage.setItem("paymentMethod", paymentMethodName);
  if (paymentMethodName === "PayPal" || paymentMethodName === "Stripe") {
    navigate("/placeorder");
  } else if (paymentMethodName === "Pay on Delivery") {
    toast.info("Your order has been placed with pay on delivery.");
    navigate("/");
  } else if (paymentMethodName === "M-Pesa") {
    // handle M-Pesa payment
    toast.info("Your order has been placed with M-Pesa.");
    navigate("/");
  }
};


  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="container small-container">
        <Helmet>
          <title>Payment Method</title>
        </Helmet>
        <h1 className="my-3">Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="PayPal"
              label="PayPal"
              value="PayPal"
              checked={paymentMethodName === "PayPal"}
              onChange={(e) => setPaymentMethodName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="Stripe"
              label="Stripe"
              value="Stripe"
              checked={paymentMethodName === "Stripe"}
              onChange={(e) => setPaymentMethodName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="PaymentOnPickup"
              label="Payment on Pickup"
              value="PaymentOnPickup"
              checked={paymentMethodName === "PaymentOnPickup"}
              onChange={(e) => setPaymentMethodName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="Mpesa"
              label="M-Pesa"
              value="Mpesa"
              checked={paymentMethodName === "Mpesa"}
              onChange={(e) => setPaymentMethodName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <Button type="submit">Continue</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}


    // @emotion/styled
    // "@mui/icons-material": "^5.11.11",
    // "@mui/material": "^5.11.11",
    // "@mui/x-data-grid": "^6.0.0",
    // "@reduxjs/toolkit": "^1.9.3",
    // "react": "^18.2.0",
    // "react-dom": "^18.2.0",
    // "react-redux": "^8.0.5",
    // "react-router-dom": "^6.8.2",
    // "recharts": "^2.4.3",
    // "regression": "^2.0.1"