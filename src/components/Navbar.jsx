import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'bg-emerald-50 text-emerald-700'
        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
    }`

  const mobileNavLinkClass = ({ isActive }) =>
    `block rounded-lg px-3 py-2 text-base font-medium ${
      isActive
        ? 'bg-emerald-50 text-emerald-700'
        : 'text-slate-600 hover:bg-slate-100'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex shrink-0 items-center gap-1">
            <span className="text-xl font-bold text-slate-900">Nexa</span>
            <span className="text-xl font-bold text-emerald-600">Mart</span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-1 md:flex">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <a
              href="/#categories"
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              Categories
            </a>
          </div>

          {/* Search placeholder */}
          <div className="hidden flex-1 max-w-md lg:block">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="search"
                placeholder="Search products, brands..."
                disabled
                className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm text-slate-400 placeholder:text-slate-400 cursor-not-allowed"
                aria-label="Search products (coming soon)"
              />
            </div>
          </div>

          {/* Desktop action icons */}
          <div className="hidden items-center gap-2 sm:flex">
            <Link
              to="/wishlist"
              className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-emerald-600"
              aria-label="Wishlist"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </Link>
            <Link
              to="/cart"
              className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-emerald-600"
              aria-label="Cart"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </Link>
            <Link
              to="/profile"
              className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-emerald-600"
              aria-label="Profile"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-200 py-4 md:hidden">
            <div className="mb-4">
              <input
                type="search"
                placeholder="Search products..."
                disabled
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-400 cursor-not-allowed"
                aria-label="Search products (coming soon)"
              />
            </div>
            <div className="flex flex-col gap-1">
              <NavLink to="/" className={mobileNavLinkClass} end onClick={() => setMobileMenuOpen(false)}>
                Home
              </NavLink>
              <a
                href="/#categories"
                className="block rounded-lg px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Categories
              </a>
              <NavLink to="/wishlist" className={mobileNavLinkClass} onClick={() => setMobileMenuOpen(false)}>
                Wishlist
              </NavLink>
              <NavLink to="/cart" className={mobileNavLinkClass} onClick={() => setMobileMenuOpen(false)}>
                Cart
              </NavLink>
              <NavLink to="/profile" className={mobileNavLinkClass} onClick={() => setMobileMenuOpen(false)}>
                Profile
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
