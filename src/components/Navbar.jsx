import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed w-full z-50 bg-transparent transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <span className="font-bold text-xl tracking-tight text-white">
                            DevilQuant
                        </span>
                    </div>
                    <div className="hidden md:ml-6 md:flex md:space-x-8">
                        <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            About
                        </a>
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
