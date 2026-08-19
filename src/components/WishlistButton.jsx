import { useWishlist } from "../context/WishlistContext";

function WishlistButton({ product }) {
  const {
    isWishlisted,
    toggleWishlist,
  } = useWishlist();

  const active = isWishlisted(product.id);

  return (
    <button
      type="button"
      onClick={() => toggleWishlist(product)}
      className={`rounded-full p-2 text-xl transition ${
        active
          ? "bg-red-100 text-red-500"
          : "bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-500"
      }`}
      aria-label="Wishlist"
    >
      {active ? "❤️" : "♡"}
    </button>
  );
}

export default WishlistButton;