import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Mail, Home as HomeIcon, CircleUserIcon, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // To get the current path for active link highlighting

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { to: '/', icon: HomeIcon, label: 'Home' },
    { to: '/about', icon: ShieldCheck, label: 'About' },
    { to: '/contact', icon: Mail, label: 'Contact' },
    { to: '/profile', icon: CircleUserIcon, label: 'Profile' },
  ];

  return (
    <nav className='bg-gray-900 p-4 sticky top-0 z-50 shadow-xl font-sans'>
      <div className='container mx-auto flex items-center justify-between h-16'>
        {/* Logo */}
        <div className='flex-shrink-0'>
          <Link to='/' className='text-white flex items-center group'>
            <h1 className='font-extrabold text-4xl leading-none'>
              <span className='text-red-500 group-hover:text-red-400 transition-colors duration-300'>&lt;</span>Pass
              <span className='text-red-500 group-hover:text-red-400 transition-colors duration-300'>OP/&gt;</span>
            </h1>
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white focus:outline-none focus:ring-2 focus:ring-red-500 p-2 rounded-md'>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <ul className='hidden md:flex items-center space-x-8 text-lg'>
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-300
                  ${location.pathname === link.to
                    ? 'text-red-500'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
              >
                <link.icon size={20} />
                <span className='font-medium'>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-900 absolute mt-2 left-0 w-full shadow-lg transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <ul className='flex flex-col p-4 space-y-4'>
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={toggleMenu}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-xl transition-all duration-300
                  ${location.pathname === link.to
                    ? 'text-red-500'
                    : 'text-gray-200 hover:bg-gray-700 hover:text-white'
                  }`}
              >
                <link.icon size={24} />
                <span className='font-semibold'>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;