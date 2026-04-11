import React from 'react';
import LeaderCard from '../components/LeaderCard';
import leaders from '../data/leaders.json';
import { IconCloud } from '../components/magicui/icon-cloud';
import { DotPattern } from '../components/magicui/dot-pattern';

const placementLogos = [
    "./logos/amazon.svg",
    "./logos/aws.svg",
    "./logos/capitalone.svg",
    "./logos/generaldynamics.svg",
    "./logos/microsoft.svg",
    "./logos/seagate.svg",
    "./logos/servicenow.svg",
    "./logos/wellsfargo.svg",
];

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
        <div className="min-h-screen bg-black pt-24 pb-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Mission / Intro */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        About DevilQuant
                    </h1>
                    <p className="mt-4 text-lg text-neutral-400">
                        We are a student-run quantitative finance organization dedicated to bridging the gap between academic theory and practical application in financial markets.
                    </p>
                </div>

                {/* What We Do Section */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                    <p className="text-neutral-400 leading-relaxed mb-8 border-l-2 border-neutral-700 pl-4">
                        To provide students with hands-on experience in quantitative analysis, algorithmic trading, and financial data science. We aim to foster a collaborative environment where members can research, build, and test their own trading strategies.
                    </p>

                    <h2 className="text-2xl font-bold text-white mb-4">What We Do</h2>
                    <ul className="space-y-2 text-neutral-400">
                        <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-white mr-3 shrink-0"></span>
                            Algorithmic Trading Competitions
                        </li>
                        <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-white mr-3 shrink-0"></span>
                            Guest Speaker Series from Industry Pros
                        </li>
                        <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-white mr-3 shrink-0"></span>
                            Collaborative Research Projects
                        </li>
                    </ul>
                </div>

                {/* Member Placements Section */}
                <div className="mb-20 relative overflow-hidden py-10">
                    <DotPattern
                        width={20}
                        height={20}
                        cr={1.2}
                        glow
                        className="text-neutral-500/60 [mask-image:radial-gradient(circle_at_center,white_20%,transparent_70%)]"
                    />
                    <h2 className="text-2xl font-bold text-white mb-4 text-center relative z-10">Member Placements</h2>
                    <div className="flex justify-center relative z-10">
                        <IconCloud images={placementLogos} />
                    </div>
                </div>

                {/* Leadership Section */}
                <div>
                    <h2 className="text-3xl font-bold text-white text-center mb-12">Leadership Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div className="mt-20" id="contact">
                    <div className="bg-neutral-900 border border-neutral-800 overflow-hidden px-6 py-10 sm:px-12 sm:py-16 text-center">
                        <div>
                            <div className="mx-auto flex items-center justify-center w-16 h-16 border border-neutral-700 text-white mb-6">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>

                            <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Contact Us</h2>
                            <p className="text-neutral-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                                Have questions about our research or want to get involved? We'd love to hear from you.
                            </p>

                            <a
                                href="mailto:contact@devilquant.com"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-black bg-white hover:bg-neutral-200 md:text-lg transition-colors duration-200 group"
                            >
                                <svg className="w-5 h-5 mr-3 -ml-1 text-neutral-600 group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
