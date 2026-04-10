import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Navigate to a page and then scroll to a section by ID
    const navigateToSection = (path, sectionId) => {
        if (location.pathname === path) {
            // Already on the page, just scroll
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate(path);
            // Wait for the page to render, then scroll
            setTimeout(() => {
                const el = document.getElementById(sectionId);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

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

    // Close mobile menu when location changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // navbar background logic:
    // - If Home page: ALWAYS transparent, no border
    // - If NOT home page: dark background
    const navbarClasses = isHome && !isOpen
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
                        <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            Home
                        </Link>
                        <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            About Us
                        </Link>
                        <Link to="/resources" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            Resources
                        </Link>
                        <Link to="/projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            Projects
                        </Link>
                        <button onClick={() => navigateToSection('/about', 'contact')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            Contact
                        </button>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none p-2"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            {isOpen && (
                <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-b border-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            to="/"
                            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            About Us
                        </Link>
                        <Link
                            to="/resources"
                            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Resources
                        </Link>
                        <Link
                            to="/projects"
                            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Projects
                        </Link>
                        <button
                            onClick={() => navigateToSection('/about', 'contact')}
                            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                        >
                            Contact
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
