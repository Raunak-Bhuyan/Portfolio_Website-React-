const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6 px-6 border-b border-neutral-800">
  

            {/* Navigation Links */}
            <ul className="flex space-x-6 text-neutral-400 text-sm font-medium">
                <li>
                    <a href="#hero" className="hover:text-white transition-colors duration-200">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#about" className="hover:text-white transition-colors duration-200">
                        About
                    </a>
                </li>
                <li>
                    <a href="#projects" className="hover:text-white transition-colors duration-200">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#contacts" className="hover:text-white transition-colors duration-200">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
