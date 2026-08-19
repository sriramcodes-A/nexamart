import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-1">
              <span className="text-lg font-bold text-white">Nexa</span>
              <span className="text-lg font-bold text-emerald-400">Mart</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Your premium marketplace for fashion, electronics, home essentials and more.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/products" className="text-sm hover:text-emerald-400 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <a href="/#categories" className="text-sm hover:text-emerald-400 transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <Link to="/wishlist" className="text-sm hover:text-emerald-400 transition-colors">
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Account</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/profile" className="text-sm hover:text-emerald-400 transition-colors">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-sm hover:text-emerald-400 transition-colors">
                  Order History
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-sm hover:text-emerald-400 transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <span className="text-sm text-slate-400">Help Centre</span>
              </li>
              <li>
                <span className="text-sm text-slate-400">Returns Policy</span>
              </li>
              <li>
                <span className="text-sm text-slate-400">Contact Us</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} NexaMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
