import React from 'react';
import LeaderCard from '../components/LeaderCard';

const About = () => {
    const leaders = [
        {
            name: "Alex Morgan",
            role: "President",
            bio: "Alex is a senior majoring in Computer Science and Finance. He leads the club's overall strategy and partnerships.",
            image: null, // Placeholder will form
            socialLinks: {
                linkedin: "#",
                github: "#"
            }
        },
        {
            name: "Sarah Chen",
            role: "Head of Research",
            bio: "Sarah specializes in algorithmic trading and machine learning. She oversees all research projects and workshops.",
            image: null,
            socialLinks: {
                linkedin: "#",
                portfolio: "#"
            }
        },
        {
            name: "David Kim",
            role: "Tech Lead",
            bio: "David is responsible for the club's technical infrastructure and data pipelines. He loves Rust and Python.",
            image: null,
            socialLinks: {
                github: "#",
                linkedin: "#"
            }
        },
        // Add more leaders as needed
    ];

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
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
