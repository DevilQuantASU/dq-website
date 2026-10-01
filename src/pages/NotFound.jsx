import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex-1 flex items-center justify-center bg-black pt-16 px-4">
            <div className="text-center py-24">
                <p className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-4">404</p>
                <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">Page not found</h1>
                <p className="text-neutral-400 mb-10">The page you're looking for doesn't exist or has moved.</p>
                <Link
                    to="/"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-black bg-white hover:bg-neutral-200 transition-colors duration-200"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
