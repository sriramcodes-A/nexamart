import { useEffect, useState } from "react";

function Checkout() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart =
      JSON.parse(localStorage.getItem("nexamart-cart")) || [];

    setCart(savedCart);
  }, []);

  const subtotal = cart.reduce(
    (total, item) =>
      total +
      Number(item.price) *
        Number(item.quantity || 1),
    0
  );

  const delivery = subtotal > 0 ? 50 : 0;

  const discount = 200;

  const total =
    subtotal + delivery - discount;

  return (
    <div className="mx-auto max-w-5xl p-6">
      <h1 className="mb-6 text-3xl font-bold">
        Checkout
      </h1>

      <div className="rounded-xl bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-bold">
          Order Summary
        </h2>

        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="flex justify-between">
            <span>Delivery</span>
            <span>₹{delivery}</span>
          </div>

          <div className="flex justify-between">
            <span>Discount</span>
            <span>-₹{discount}</span>
          </div>

          <hr />

          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>₹{Math.max(total, 0)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;