import ProductCard from "./ProductCard";

const FlashSale = ({
  products = [],
  title = "Flash Sale",
  subtitle = "Limited-time deals. Grab them before they're gone.",
  discount = "Up to 60% OFF",
  buttonText = "View All Deals",
  onAction,
  onAddToCart,
  onWishlist,
  onProductClick,
}) => {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        
        {/* Header */}
        <div className="mb-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                {title}
              </h2>

              <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-600">
                {discount}
              </span>
            </div>

            <p className="mt-2 text-sm text-slate-500 sm:text-base">
              {subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onAction}
            className="self-start rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600 sm:self-auto"
          >
            {buttonText}
          </button>
        </div>

        {/* Demo Timer */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="text-sm font-medium text-slate-500">
            Ends in
          </span>

          <div className="flex items-center gap-2">
            <TimerBox value="08" label="HRS" />
            <span className="font-bold text-slate-400">:</span>
            <TimerBox value="42" label="MIN" />
            <span className="font-bold text-slate-400">:</span>
            <TimerBox value="17" label="SEC" />
          </div>
        </div>

        {/* Products */}
        {products.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {products.map((product, index) => (
              <ProductCard
                key={product?.id ?? index}
                product={product}
                onAddToCart={onAddToCart}
                onWishlist={onWishlist}
                onClick={onProductClick}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
            <div className="text-4xl">⚡</div>
            <h3 className="mt-3 font-semibold text-slate-900">
              Flash sale products will appear here
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Pass products through the products prop.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

const TimerBox = ({ value, label }) => {
  return (
    <div className="flex min-w-[52px] flex-col items-center rounded-lg bg-slate-900 px-2 py-2 text-white">
      <span className="text-sm font-bold">{value}</span>
      <span className="text-[9px] text-slate-400">{label}</span>
    </div>
  );
};

export default FlashSale;