const OfferBanner = ({
  title = "Big Savings Are Here",
  subtitle = "Discover amazing deals across NexaMart.",
  discount = "50% OFF",
  buttonText = "Shop Now",
  image,
  onAction,
}) => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      
      {/* Decoration */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-black/10 blur-3xl" />

      <div className="relative grid items-center gap-8 px-6 py-10 sm:px-10 lg:grid-cols-2 lg:px-14 lg:py-12">
        
        <div className="text-white">
          <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider">
            Limited Time Offer
          </span>

          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            {title}
          </h2>

          <p className="mt-3 max-w-lg text-sm leading-6 text-white/80 sm:text-base">
            {subtitle}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <span className="text-3xl font-black sm:text-4xl">
              {discount}
            </span>

            <button
              type="button"
              onClick={onAction}
              className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              {buttonText}
            </button>
          </div>
        </div>

        {image && (
          <div className="hidden lg:block">
            <img
              src={image}
              alt={title}
              className="mx-auto h-56 w-full rounded-2xl object-cover shadow-2xl"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default OfferBanner;