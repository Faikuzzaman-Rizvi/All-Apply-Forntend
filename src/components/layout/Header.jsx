import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { navLinks } from '../../utils/constants.jsx'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <header 
      id="header" 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'scrolled bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="logo flex items-center gap-3" onClick={closeMenu}>
            <div className="logo-icon w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-400 text-white flex items-center justify-center rounded-lg font-bold text-lg">
              AA
            </div>
            <div className="logo-text text-2xl font-bold text-gray-800">
              All<span className="text-blue-600">Apply</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="nav-links hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 font-medium rounded-lg transition-colors ${
                      isActive 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Auth Buttons - Desktop */}
          <div className="auth-buttons hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="btn btn-outline px-5 py-2 font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn btn-primary px-5 py-2 font-medium text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg hover:shadow-lg transition-all hover:opacity-90"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ease-in-out ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
          style={{ top: '80px' }}
        >
          <div className="container mx-auto px-4 py-6">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `px-4 py-3 text-lg font-medium rounded-lg transition-colors block ${
                        isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50'
                      }`
                    }
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                to="/login"
                onClick={closeMenu}
                className="btn btn-outline px-4 py-3 text-center font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={closeMenu}
                className="btn btn-primary px-4 py-3 text-center font-medium text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg hover:shadow-lg transition-all"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header