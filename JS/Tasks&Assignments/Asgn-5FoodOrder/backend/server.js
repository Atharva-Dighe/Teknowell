const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const razorpay = new Razorpay({
  key_id: "rzp_test_R9YK7209hKJDcC",
  key_secret: "b9CREZJYAH7y29E4bgu6XNzx",
});

app.post("/create-order", async (req, res) => {
  const options = {
    amount: req.body.amount * 100,
    currency: "INR",
    receipt: "receipt#1",
  };
  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/verify-payment", (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const sign = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSign = crypto
    .createHmac("sha256", "YOUR_KEY_SECRET")
    .update(sign.toString())
    .digest("hex");

  if (razorpay_signature === expectedSign) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
