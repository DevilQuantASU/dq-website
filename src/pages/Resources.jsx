import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import guides from '../data/guides/index.js';

const Resources = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    // Resolve active guide from query param, fallback to first guide
    const activeSlug = searchParams.get('guide') || guides[0]?.slug;
    const activeGuide = guides.find((g) => g.slug === activeSlug) || guides[0];

    // Close mobile sidebar on guide change
    useEffect(() => {
        setSidebarOpen(false);
    }, [activeSlug]);

    // Prevent body scroll when mobile sidebar is open
    useEffect(() => {
        if (sidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [sidebarOpen]);

    const handleGuideClick = (slug) => {
        setSearchParams({ guide: slug });
    };

    const sidebarContent = (
        <nav className="p-6 pt-4">
            {/* Sidebar heading */}
            <div className="flex items-center gap-2 mb-6">
                <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h2 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                    Guides
                </h2>
            </div>

            {/* Guide list */}
            <ul className="space-y-1">
                {guides.map((guide) => {
                    const isActive = guide.slug === activeSlug;
                    return (
                        <li key={guide.slug}>
                            <button
                                id={`guide-link-${guide.slug}`}
                                onClick={() => handleGuideClick(guide.slug)}
                                className={`
                                    w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 block
                                    ${isActive
                                        ? 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/30'
                                        : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/60 border border-transparent'
                                    }
                                `}
                            >
                                {guide.title}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );

    return (
        <div className="bg-gray-950 pt-16">
            {/* Mobile sidebar toggle */}
            <button
                id="resources-sidebar-toggle"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden fixed bottom-6 left-6 z-40 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 duration-200"
                aria-label="Open guide navigation"
            >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
            </button>

            {/* Mobile overlay */}
            {sidebarOpen && (
                <div
                    className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Mobile sidebar drawer (fixed, only on small screens) */}
            <aside
                className={`
                    lg:hidden fixed top-16 left-0 z-50 h-[calc(100vh-4rem)] w-72 bg-gray-900/95 backdrop-blur-xl border-r border-gray-800
                    transform transition-transform duration-300 ease-in-out overflow-y-auto
                    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                `}
            >
                <div className="flex justify-end p-4 pb-0">
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="text-gray-400 hover:text-white p-1 rounded-md transition-colors"
                        aria-label="Close navigation"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                {sidebarContent}
            </aside>

            <div className="flex">
                {/* Desktop sidebar (sticky, flows with content) */}
                <aside
                    id="resources-sidebar"
                    className={`
                        hidden lg:block sticky top-16 self-start h-[calc(100vh-4rem)] overflow-y-auto
                        bg-gray-900/95 backdrop-blur-xl border-r border-gray-800
                        transition-all duration-300 ease-in-out flex-shrink-0
                        ${sidebarCollapsed ? 'w-0 border-r-0 overflow-hidden' : 'w-72'}
                    `}
                >
                    {!sidebarCollapsed && sidebarContent}
                </aside>

                {/* Main content */}
                <main className="flex-1 min-h-[calc(100vh-4rem)] min-w-0">
                    {/* Desktop sidebar toggle */}
                    <button
                        id="resources-sidebar-desktop-toggle"
                        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                        className="hidden lg:flex items-center gap-2 mt-6 ml-6 text-gray-500 hover:text-gray-300 text-xs font-medium transition-colors"
                        aria-label={sidebarCollapsed ? 'Show sidebar' : 'Hide sidebar'}
                    >
                        <svg
                            className={`w-4 h-4 transition-transform duration-200 ${sidebarCollapsed ? 'rotate-180' : ''}`}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                        </svg>
                        {sidebarCollapsed ? 'Show guides' : 'Hide guides'}
                    </button>

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
                        {activeGuide ? (
                            <>
                                {/* Guide header */}
                                <header className="mb-10">
                                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                                        {activeGuide.title}
                                    </h1>
                                    {activeGuide.description && (
                                        <p className="mt-4 text-lg text-gray-400 leading-relaxed max-w-3xl">
                                            {activeGuide.description}
                                        </p>
                                    )}
                                    <div className="mt-6 h-px bg-gradient-to-r from-indigo-500/40 via-gray-800 to-transparent" />
                                </header>

                                {/* Guide sections */}
                                <div className="guide-content space-y-10">
                                    {activeGuide.sections.map((section) => (
                                        <section key={section.id} id={section.id}>
                                            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                                <span className="w-1 h-6 bg-indigo-500 rounded-full inline-block" />
                                                {section.title}
                                            </h2>
                                            <div
                                                className="guide-section-content text-gray-300 leading-relaxed"
                                                dangerouslySetInnerHTML={{ __html: section.content }}
                                            />
                                        </section>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="text-center py-20">
                                <p className="text-gray-400 text-lg">Guide not found.</p>
                                <Link to="/resources" className="text-indigo-400 hover:text-indigo-300 mt-4 inline-block">
                                    ← Back to Resources
                                </Link>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Resources;
