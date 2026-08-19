import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      {/* Hero Placeholder */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-emerald-500/20 px-4 py-1.5 text-sm font-medium text-emerald-300">
              India&apos;s Premium Marketplace
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Shop Smarter with{' '}
              <span className="text-emerald-400">NexaMart</span>
            </h1>
            <p className="mt-4 text-lg text-slate-300 sm:text-xl">
              Discover 200+ products across 9 categories — fashion, electronics,
              home essentials and more. Premium quality, unbeatable deals.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-400"
              >
                Browse Products
              </Link>
              <a
                href="#categories"
                className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore Categories
              </a>
            </div>
          </div>
        </div>
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      </section>

      {/* Categories Placeholder */}
      <section id="categories" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Shop by Category</h2>
          <p className="mt-2 text-slate-600">9 categories, 200 products — something for everyone</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: 'Fashion', count: 25, color: 'from-pink-500 to-rose-600' },
            { name: 'Electronics', count: 25, color: 'from-blue-500 to-indigo-600' },
            { name: 'Home & Living', count: 25, color: 'from-amber-500 to-orange-600' },
            { name: 'Sports & Fitness', count: 20, color: 'from-green-500 to-emerald-600' },
            { name: 'Gaming', count: 20, color: 'from-purple-500 to-violet-600' },
            { name: 'Books & Education', count: 20, color: 'from-teal-500 to-cyan-600' },
            { name: 'Beauty & Personal Care', count: 20, color: 'from-fuchsia-500 to-pink-600' },
            { name: 'Kids & Toys', count: 25, color: 'from-yellow-400 to-amber-500' },
            { name: 'Pets / Furry Paws', count: 20, color: 'from-lime-500 to-green-600' },
          ].map((category) => (
            <div
              key={category.name}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition-opacity group-hover:opacity-5`} />
              <h3 className="text-lg font-semibold text-slate-900">{category.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{category.count} products</p>
              <span className="mt-3 inline-block text-xs font-medium text-emerald-600">
                Coming in Phase 2
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Placeholder */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Featured Products</h2>
            <p className="mt-2 text-slate-600">Handpicked deals you don&apos;t want to miss</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50"
              >
                <div className="flex h-48 items-center justify-center bg-slate-100">
                  <svg className="h-12 w-12 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="p-4">
                  <div className="h-4 w-3/4 rounded bg-slate-200" />
                  <div className="mt-2 h-3 w-1/2 rounded bg-slate-200" />
                  <div className="mt-3 h-5 w-1/3 rounded bg-slate-200" />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-400">
            Product cards will appear here in Phase 3
          </p>
        </div>
      </section>

      {/* Offers Placeholder */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 to-emerald-600 p-8 text-white sm:p-12">
          <div className="max-w-xl">
            <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              Special Offers
            </span>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Up to 60% Off This Season</h2>
            <p className="mt-2 text-violet-100">
              Flash sales, exclusive deals and member-only discounts — coming soon.
            </p>
            <button
              type="button"
              disabled
              className="mt-6 cursor-not-allowed rounded-lg bg-white/90 px-6 py-2.5 text-sm font-semibold text-violet-700 opacity-75"
            >
              View Offers (Coming Soon)
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
