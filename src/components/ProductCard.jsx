const ProductCard = ({
  product,
  onAddToCart,
  onWishlist,
  onClick,
}) => {
  if (!product) return null;

  const {
    image,
    brand,
    name,
    price,
    originalPrice,
    discount,
    rating,
    reviewCount,
    badge,
    stock,
  } = product;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Badge */}
      {badge && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
          {badge}
        </span>
      )}

      {/* Wishlist */}
      <button
        type="button"
        onClick={() => onWishlist?.(product)}
        aria-label="Add to wishlist"
        className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg shadow-md transition hover:scale-105"
      >
        ♡
      </button>

      {/* Image */}
      <button
        type="button"
        onClick={() => onClick?.(product)}
        className="block w-full overflow-hidden bg-slate-50"
      >
        {image ? (
          <img
            src={image}
            alt={name || "Product"}
            className="h-56 w-full object-contain p-5 transition duration-500 group-hover:scale-105 sm:h-64"
          />
        ) : (
          <div className="flex h-56 items-center justify-center bg-slate-100 text-5xl sm:h-64">
            🛍️
          </div>
        )}
      </button>

      {/* Details */}
      <div className="flex flex-1 flex-col p-4">
        {brand && (
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            {brand}
          </p>
        )}

        <button
          type="button"
          onClick={() => onClick?.(product)}
          className="mt-1 text-left"
        >
          <h3 className="line-clamp-2 min-h-[48px] text-sm font-semibold text-slate-900 transition group-hover:text-indigo-600 sm:text-base">
            {name || "Product Name"}
          </h3>
        </button>

        {/* Rating */}
        {rating !== undefined && (
          <div className="mt-3 flex items-center gap-2">
            <span className="rounded-md bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
              ★ {rating}
            </span>

            {reviewCount !== undefined && (
              <span className="text-xs text-slate-400">
                ({reviewCount})
              </span>
            )}
          </div>
        )}

        {/* Price */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {price !== undefined && (
            <span className="text-lg font-bold text-slate-900">
              ₹{price}
            </span>
          )}

          {originalPrice !== undefined && (
            <span className="text-sm text-slate-400 line-through">
              ₹{originalPrice}
            </span>
          )}

          {discount !== undefined && (
            <span className="text-xs font-semibold text-emerald-600">
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Stock */}
        {stock && (
          <p className="mt-2 text-xs font-medium text-slate-500">
            {stock}
          </p>
        )}

        {/* Cart */}
        <button
          type="button"
          onClick={() => onAddToCart?.(product)}
          className="mt-auto pt-5"
        >
          <span className="block w-full rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-indigo-600">
            Add to Cart
          </span>
        </button>
      </div>
    </article>
  );
};

export default ProductCard;