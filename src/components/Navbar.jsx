import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Home as HomeIcon, CircleUserIcon } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className='bg-gray-900 p-4 flex flex-col md:flex-row items-center justify-between h-auto md:h-16 text-white shadow-lg font-inter'>
      {/* Logo */}
      <div className='logo font-extrabold text-4xl text-white mb-4 md:mb-0'>
        <h1>
          <span className='text-red-500'>&lt;</span>Pass
          <span className='text-red-500'>OP/&gt;</span>
        </h1>
      </div>

      {/* Navigation Links */}
      <ul className='flex flex-col md:flex-row gap-4 md:gap-8 text-lg'>
        <li>
          <Link to='/' className='hover:text-red-400 transition-colors duration-300 flex items-center gap-2'>
            <HomeIcon size={20} /> Home
          </Link>
        </li>
        <li>
          <Link to='/about' className='hover:text-red-400 transition-colors duration-300 flex items-center gap-2'>
            <ShieldCheck size={20} /> About
          </Link>
        </li>
        <li>
          <Link to='/contact' className='hover:text-red-400 transition-colors duration-300 flex items-center gap-2'>
            <Mail size={20} /> Contact
          </Link>
        </li>
        <li>
          <Link to='/profile' className='hover:text-red-400 transition-colors duration-300 flex items-center gap-2'>
            <CircleUserIcon size={20} /> Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;