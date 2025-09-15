const cartArray = JSON.parse(localStorage.getItem('arr'));
console.log("Array retrived from Restaurant Page is : ", cartArray);

const billList = document.getElementById('billList');
const totalCost = document.getElementById('total');

if (cartArray && cartArray.length > 0) {
  let totalPrice = 0;
  const listItems = cartArray.map(item => {
    totalPrice += item.TotalPrice;
    return `<li>${item.Name} - ₹${item.Price} x ${item.Quantity} = ₹${item.TotalPrice}</li>`;
  });
  billList.innerHTML = listItems.join('');
  total.innerText = `Total Amount: ₹${totalPrice}`;
}
else {
  billList.innerHTML = "<li>Your cart is empty.</li>";
  totalAmount.innerText = "";
}


//Razorpay

async function payNow() {
  // 1. Get total from your cart
  const cartArray = JSON.parse(localStorage.getItem('arr'));
  let totalPrice = cartArray.reduce((acc, item) => acc + item.TotalPrice, 0);

  // 2. Create order from backend
  const response = await fetch("http://localhost:5000/create-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount: totalPrice })
  });
  const order = await response.json();

  // 3. Open Razorpay checkout
  var options = {
    key: "rzp_test_R9YK7209hKJDcC",
    amount: order.amount,
    currency: order.currency,
    name: "My Food App",
    description: "Order Payment",
    order_id: order.id,
    handler: async function (response) {
      // 4. Verify payment
      const verify = await fetch("http://localhost:5000/verify-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(response)
      });
      const result = await verify.json();
      if (result.success) {
        alert("🎉 Payment Successful!");
      } else {
        alert("❌ Payment Verification Failed!");
      }
    },
    theme: { color: "#3399cc" }
  };
  const rzp = new Razorpay(options);
  rzp.open();