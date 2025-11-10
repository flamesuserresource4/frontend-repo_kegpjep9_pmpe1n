import { Link, NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/order', label: 'Order' },
  { to: '/gallery', label: 'Gallery' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-rose-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-rose-300 bg-rose-100">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-rose-600">
              <path d="M12 21s-6.716-3.884-9.193-7.21C1.09 11.75 1.5 8.5 4.25 7.25 6.2 6.36 8.32 7.06 9.5 8.5c1.18-1.44 3.3-2.14 5.25-1.25 2.75 1.25 3.16 4.5 1.443 6.54C18.716 17.116 12 21 12 21z" />
            </svg>
          </span>
          <span className="font-semibold tracking-wide text-rose-700">LoveFrame MK</span>
        </Link>
        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-rose-100 text-rose-700'
                    : 'text-rose-700/80 hover:text-rose-800 hover:bg-rose-50'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-rose-100 bg-white/70">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center text-sm text-rose-700/80">
        <p>© {new Date().getFullYear()} SWMedia</p>
      </div>
    </footer>
  )
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fff8f8]">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
