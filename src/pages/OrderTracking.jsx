import { useLocation } from "react-router-dom";

const statuses = [
  "Order Placed",
  "Confirmed",
  "Packed",
  "Shipped",
  "Out for Delivery",
  "Delivered",
];

function OrderTracking() {
  const location = useLocation();

  const order = location.state?.order;

  const currentStatus =
    order?.status || "Order Placed";

  const currentIndex =
    statuses.indexOf(currentStatus);

  return (
    <div className="mx-auto max-w-3xl p-6">
      <div className="rounded-2xl bg-white p-6 shadow">
        <h1 className="text-2xl font-bold">
          Order Tracking
        </h1>

        {order && (
          <p className="mt-2 text-gray-500">
            Order #{order.id}
          </p>
        )}

        <div className="mt-8 space-y-6">
          {statuses.map((status, index) => {
            const completed =
              index < currentIndex;

            const current =
              index === currentIndex;

            return (
              <div
                key={status}
                className="flex items-center gap-4"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    completed || current
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {completed
                    ? "✓"
                    : current
                    ? "●"
                    : "○"}
                </div>

                <span
                  className={
                    current
                      ? "font-bold"
                      : "text-gray-600"
                  }
                >
                  {status}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OrderTracking;