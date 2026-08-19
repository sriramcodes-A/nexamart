import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders =
      JSON.parse(
        localStorage.getItem("nexamart-orders")
      ) || [];

    setOrders(savedOrders);
  }, []);

  return (
    <div className="mx-auto max-w-5xl p-6">
      <h1 className="mb-6 text-3xl font-bold">
        My Orders
      </h1>

      {orders.length === 0 ? (
        <div className="rounded-xl bg-white p-8 text-center shadow">
          <p className="text-gray-500">
            No orders found.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {orders.map((order) => (
            <div
              key={order.id}
              className="rounded-xl bg-white p-5 shadow"
            >
              <div className="flex flex-wrap justify-between gap-4">
                <div>
                  <h2 className="font-bold">
                    Order #{order.id}
                  </h2>

                  <p className="text-sm text-gray-500">
                    {new Date(
                      order.date
                    ).toLocaleDateString()}
                  </p>
                </div>

                <p className="font-bold">
                  ₹{order.total}
                </p>
              </div>

              <p className="mt-3">
                Status:{" "}
                <span className="font-semibold">
                  {order.status}
                </span>
              </p>

              <Link
                to={`/tracking/${order.id}`}
                state={{ order }}
                className="mt-4 inline-block rounded-lg bg-black px-4 py-2 text-white"
              >
                Track Order
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default OrderHistory;