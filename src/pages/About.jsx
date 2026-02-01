import React from 'react';
import LeaderCard from '../components/LeaderCard';
import leaders from '../data/leaders.json';

const About = () => {


    // Import all headshots
    const headshots = import.meta.glob('../assets/Headshots/*.{png,jpg,jpeg,svg}', { eager: true });

    // Helper to get image URL
    const getHeadshotUrl = (imageName) => {
        if (!imageName) return null;
        if (imageName.startsWith('http')) return imageName;

        // Try to find the image in the imported headshots
        // The keys are relative paths like '../assets/Headshots/cedric.png'
        const matchingPath = Object.keys(headshots).find(path => path.includes(imageName));
        return matchingPath ? headshots[matchingPath].default : null;
    };

    return (
        <div className="min-h-screen bg-gray-950 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Mission / Intro */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
                        About <span className="text-indigo-500">DevilQuant</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-400">
                        We are a student-run quantitative finance organization dedicated to bridging the gap between academic theory and practical application in financial markets.
                    </p>
                </div>

                {/* What We Do Section */}
                <div className="mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
                            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                            <p className="text-gray-400 leading-relaxed">
                                To provide students with hands-on experience in quantitative analysis, algorithmic trading, and financial data science. We aim to foster a collaborative environment where members can research, build, and test their own trading strategies.
                            </p>
                        </div>
                        <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
                            <h2 className="text-2xl font-bold text-white mb-4">What We Do</h2>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-indigo-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    Algorithmic Trading Competitions
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-indigo-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    Guest Speaker Series from Industry Pros
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-indigo-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    Collaborative Research Projects
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Leadership Section */}
                <div>
                    <h2 className="text-3xl font-extrabold text-white text-center mb-12">Leadership Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {leaders.map((leader, index) => (
                            <LeaderCard
                                key={index}
                                {...leader}
                                image={getHeadshotUrl(leader.image)}
                            />
                        ))}
                    </div>
                </div>
                {/* Contact Section */}
                <div className="mt-20">
                    <div className="relative rounded-2xl bg-gray-900 border border-gray-800 overflow-hidden px-6 py-10 sm:px-12 sm:py-16 text-center shadow-2xl">
                        {/* Decorative background glow */}
                        <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full -z-10 bg-gradient-to-b from-indigo-500/10 to-transparent opacity-50 blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500/20 text-indigo-400 mb-6 border border-indigo-500/30">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>

                            <h2 className="text-3xl font-extrabold text-white mb-4 tracking-tight">Contact Us</h2>
                            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                                Have questions about our research or want to get involved? We'd love to hear from you.
                            </p>

                            <a
                                href="mailto:contact@devilquant.com"
                                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg transition-all hover:scale-105 duration-200 shadow-lg shadow-indigo-500/25 group"
                            >
                                <svg className="w-5 h-5 mr-3 -ml-1 text-indigo-200 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                contact@devilquant.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
