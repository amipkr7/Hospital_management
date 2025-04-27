import React from "react";
import "./Payment.css";

const Payment = () => {
  const handlePayment = async () => {
    try {
      const response = await fetch("http://localhost:5000/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 500,
          currency: "INR",
          receipt: "receipt#1",
        }),
      });
      console.log(response);

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to create order: ${errorMessage}`);
      }

      const order = await response.json();
      console.log(order);

      // Razorpay payment options
      const options = {
        key: "rzp_test_e06ulY1lGnKEQ7", // Replace with your Razorpay key ID
        amount: order.amount,
        currency: order.currency,
        name: "clinic Management System",
        description: "Test Transaction",
        image: "https://example.com/your_logo", // Replace with your logo URL
        order_id: order.id,
        handler: function (response) {
          alert(
            `Payment Successful!\nPayment ID: ${response.razorpay_payment_id}\nOrder ID: ${response.razorpay_order_id}\nSignature: ${response.razorpay_signature}`
          );
        },
        prefill: {
          name: "John Doe",
          email: "john.doe@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      // Initialize Razorpay instance
      const rzp1 = new window.Razorpay(options);

      // Payment failure handler
      rzp1.on("payment.failed", function (response) {
        alert(
          `Payment Failed!\nError Code: ${response.error.code}\nDescription: ${response.error.description}\nReason: ${response.error.reason}\nOrder ID: ${response.error.metadata.order_id}\nPayment ID: ${response.error.metadata.payment_id}`
        );
      });

      // Open Razorpay payment form
      rzp1.open();
    } catch (error) {
      console.error("Error creating order:", error);
      alert(
        "An error occurred while initiating the payment. Please try again."
      );
    }
  };

  return (
    <div className="payment-container">
      <div className="card1">
        <h1>Make a Payment</h1>
        <p>Pay for your medical services securely through Razorpay</p>
        <button className="pay-button" onClick={handlePayment}>
          Pay INR 500
        </button>
      </div>
    </div>
  );
};

export default Payment;
