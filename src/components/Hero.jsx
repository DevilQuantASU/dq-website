import React from 'react';
import { Link } from 'react-router-dom';
import videoBg from '../assets/background_video.mp4';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source
                        src={videoBg}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
                <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    Devil<span className="text-neutral-400">Quant</span>
                </h1>
                <p className="mt-6 text-lg text-neutral-300 sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
                    DevilQuant is the first quantitative finance club at ASU. We are a community of students who are building real projects,
                    networking, participating in competitions, and working with industry professionals.
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
                    <div>
                        <a
                            href="https://discord.com/invite/WJbhDmumXp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center px-8 py-3 text-base font-medium text-black bg-white hover:bg-neutral-200 md:py-4 md:text-lg transition-colors duration-200"
                        >
                            Join Discord
                        </a>
                    </div>
                    <div className="mt-3 sm:mt-0">
                        <Link
                            to="/about"
                            className="w-full flex items-center justify-center px-8 py-3 border border-white/20 text-base font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm md:py-4 md:text-lg transition-colors duration-200"
                        >
                            About Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
