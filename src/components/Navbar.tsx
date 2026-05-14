import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-bold">
            🍔 Nutrition App
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="text-white hover:opacity-80">
              Dashboard
            </Link>
            <Link to="/catalog" className="text-white hover:opacity-80">
              Combos
            </Link>
            <Link to="/tracker" className="text-white hover:opacity-80">
              Mi Día
            </Link>
            <Link to="/profile" className="text-white hover:opacity-80">
              Perfil
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
