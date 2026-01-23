import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    // Check if we are on the home page
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    // navbar background logic:
    // - If Home page: ALWAYS transparent, no border
    // - If NOT home page: dark background
    const navbarClasses = isHome
        ? "bg-transparent border-none"
        : "bg-gray-900/90 backdrop-blur-md border-b border-gray-800 shadow-md";

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${navbarClasses}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="font-bold text-xl tracking-tight text-white flex items-center gap-2">
                            DevilQuant
                        </Link>
                    </div>
                    <div className="hidden md:ml-6 md:flex md:space-x-8">
                        <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            About Us
                        </Link>
                        <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            Team
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            Research
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            Contact
                        </a>
                    </div>
                    <div className="md:hidden">
                        {/* Mobile menu button placeholder */}
                        <button className="text-gray-300 hover:text-white focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
