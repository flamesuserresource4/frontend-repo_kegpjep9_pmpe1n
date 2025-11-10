import { Link, NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/order', label: 'Order' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/socials', label: 'Socials' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-rose-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-full bg-rose-200 border border-rose-300" />
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
        <p>
          Crafted with care • Light pink, bone white, and red accents
        </p>
        <p className="mt-1">© {new Date().getFullYear()} LoveFrame MK</p>
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
