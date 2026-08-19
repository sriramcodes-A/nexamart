import { useWishlist } from "../context/WishlistContext";

function Profile() {
  const { wishlistCount } = useWishlist();

  const orders =
    JSON.parse(
      localStorage.getItem("nexamart-orders")
    ) || [];

  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="rounded-2xl bg-white p-8 shadow">
        <h1 className="text-3xl font-bold">
          My Profile
        </h1>

        <div className="mt-6 space-y-3">
          <p>
            <strong>Name:</strong> Sathiya
          </p>

          <p>
            <strong>Email:</strong>{" "}
            example@email.com
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            XXXXXXXXXX
          </p>

          <p>
            <strong>Address:</strong>{" "}
            Your Address
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-gray-100 p-5 text-center">
            <h2 className="text-2xl font-bold">
              {orders.length}
            </h2>

            <p>Orders</p>
          </div>

          <div className="rounded-xl bg-gray-100 p-5 text-center">
            <h2 className="text-2xl font-bold">
              {wishlistCount}
            </h2>

            <p>Wishlist</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;