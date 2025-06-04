const Footer = () => {
  return (
    <footer className='w-full bg-gray-900 text-gray-400 h-16 flex items-center justify-center text-sm md:text-base shadow-inner font-inter'>
      &copy; {new Date().getFullYear()} <span className='text-red-500'>&lt;</span>Pass<span className='text-red-500'>OP/&gt;</span>. All rights reserved.
    </footer>
  );
};

export default Footer;