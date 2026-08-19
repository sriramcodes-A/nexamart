import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";

function Wishlist() {
  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="mx-auto max-w-4xl p-8 text-center">
        <h1 className="text-3xl font-bold">
          My Wishlist ❤️
        </h1>

        <p className="mt-4 text-gray-500">
          Your wishlist is empty.
        </p>

        <Link
          to="/products"
          className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl p-6">
      <h1 className="mb-6 text-3xl font-bold">
        My Wishlist ❤️
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {wishlist.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-xl bg-white shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-52 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="font-semibold">
                {product.name}
              </h2>

              <p className="mt-2 font-bold">
                ₹{product.price}
              </p>

              <button
                type="button"
                onClick={() =>
                  removeFromWishlist(product.id)
                }
                className="mt-4 w-full rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;