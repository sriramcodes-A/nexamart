const Hero = ({
  title = "Everything You Need. All in One Place.",
  subtitle = "Discover quality products across fashion, electronics, gaming, home, fitness and more.",
  primaryText = "Shop Now",
  secondaryText = "Explore Categories",
  primaryAction,
  secondaryAction,
  image,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
      {/* Background decoration */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-24">
        
        {/* Content */}
        <div className="max-w-2xl">
          <span className="mb-5 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-indigo-200 backdrop-blur">
            Welcome to NexaMart
          </span>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={primaryAction}
              className="rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              {primaryText}
            </button>

            <button
              type="button"
              onClick={secondaryAction}
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              {secondaryText}
            </button>
          </div>

          {/* Small highlights */}
          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6">
            <div>
              <p className="text-xl font-bold">9+</p>
              <p className="text-xs text-slate-400 sm:text-sm">Categories</p>
            </div>

            <div>
              <p className="text-xl font-bold">200+</p>
              <p className="text-xs text-slate-400 sm:text-sm">Products</p>
            </div>

            <div>
              <p className="text-xl font-bold">24/7</p>
              <p className="text-xs text-slate-400 sm:text-sm">Support</p>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-0 rounded-3xl bg-indigo-500/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">
            {image ? (
              <img
                src={image}
                alt="NexaMart products"
                className="h-[280px] w-full rounded-2xl object-cover sm:h-[380px]"
              />
            ) : (
              <div className="flex h-[280px] items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 sm:h-[380px]">
                <div className="text-center">
                  <div className="text-7xl">🛍️</div>
                  <p className="mt-4 text-xl font-bold">NexaMart</p>
                  <p className="mt-1 text-sm text-white/80">
                    Shop smarter. Live better.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;