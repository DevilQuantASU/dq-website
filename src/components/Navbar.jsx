import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Monogram from './Monogram';
import PenCircle from './PenCircle';
import { DISCORD_URL } from '../data/links';

const pages = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/resources', label: 'Resources' },
    { to: '/projects', label: 'Projects' },
];

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // The mobile menu is open only for the location it was opened on,
    // so any navigation closes it.
    const [openedAt, setOpenedAt] = useState(null);
    const isOpen = openedAt === location.key;
    const setIsOpen = (open) => setOpenedAt(open ? location.key : null);

    // The target page scrolls to `scrollTo` once it has rendered.
    const navigateToSection = (path, sectionId) => {
        navigate(path, { state: { scrollTo: sectionId } });
    };

    const isCurrent = (path) => location.pathname === path;

    return (
        <header className="sticky top-0 z-50 bg-pad border-b border-rule-major">
            <nav className="sheet h-[72px] flex items-center justify-between" aria-label="Main">
                <Link to="/" className="flex items-center gap-3 text-chalk" aria-label="DevilQuant home">
                    <Monogram className="h-[24px] w-auto" />
                    <span className="text-[20px] font-bold tracking-[-0.03em]">DevilQuant</span>
                </Link>

                <div className="hidden lg:flex items-center gap-[28px]">
                    {pages.map(({ to, label }) => (
                        <Link
                            key={to}
                            to={to}
                            aria-current={isCurrent(to) ? 'page' : undefined}
                            className={`relative ${isCurrent(to) ? '' : 'ink-link '}text-[15px] font-medium ${isCurrent(to) ? 'text-chalk' : 'text-pencil hover:text-chalk'}`}
                        >
                            {label}
                            {isCurrent(to) && <PenCircle />}
                        </Link>
                    ))}
                    <button
                        type="button"
                        onClick={() => navigateToSection('/about', 'contact')}
                        className="ink-link text-[15px] font-medium text-pencil hover:text-chalk cursor-pointer"
                    >
                        Contact
                    </button>
                    <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="btn-highlight !min-h-[40px] !px-[16px] text-[15px]">
                        Join the Discord
                    </a>
                </div>

                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    className="lg:hidden btn-pen !min-h-[40px] !px-[16px] text-[15px] cursor-pointer"
                >
                    {isOpen ? 'Close' : 'Menu'}
                </button>
            </nav>

            {isOpen && (
                <div id="mobile-menu" className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-pad overflow-y-auto">
                    <div className="sheet py-[24px] flex flex-col min-h-full">
                        <ul>
                            {pages.map(({ to, label }) => (
                                <li key={to}>
                                    <Link
                                        to={to}
                                        aria-current={isCurrent(to) ? 'page' : undefined}
                                        className={`relative inline-block py-[12px] text-[32px] leading-[48px] font-bold tracking-[-0.03em] ${isCurrent(to) ? 'text-chalk' : 'text-pencil active:text-chalk'}`}
                                    >
                                        {label}
                                        {isCurrent(to) && <PenCircle />}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <button
                                    type="button"
                                    onClick={() => navigateToSection('/about', 'contact')}
                                    className="py-[12px] text-[32px] leading-[48px] font-bold tracking-[-0.03em] text-pencil active:text-chalk cursor-pointer"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                        <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="btn-highlight mt-auto justify-center text-[17px]">
                            Join the Discord
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
