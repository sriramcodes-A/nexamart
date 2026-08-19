import WishlistButton from "./WishlistButton";

function QuickView({
  product,
  onClose,
  onAddToCart,
}) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative grid w-full max-w-4xl gap-6 rounded-2xl bg-white p-6 md:grid-cols-2">

        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-gray-100 px-3 py-2"
        >
          ✕
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="h-80 w-full rounded-xl object-cover"
        />

        <div className="flex flex-col justify-center">
          <p className="text-sm text-gray-500">
            {product.brand}
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            {product.name}
          </h2>

          <p className="mt-3">
            ⭐ {product.rating || "N/A"}
          </p>

          <p className="mt-4 text-2xl font-bold">
            ₹{product.price}
          </p>

          {product.discount && (
            <p className="mt-2 text-green-600">
              {product.discount}% OFF
            </p>
          )}

          <p className="mt-4 text-gray-600">
            {product.description}
          </p>

          <div className="mt-6 flex items-center gap-3">
            <button
              type="button"
              onClick={() => onAddToCart(product)}
              className="flex-1 rounded-lg bg-black px-5 py-3 text-white"
            >
              Add to Cart
            </button>

            <WishlistButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickView;