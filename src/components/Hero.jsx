import React from 'react';
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
                <div className="absolute inset-0 bg-gray-950/70 backdrop-blur-[2px]"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    <span className="block drop-shadow-md">Data-Driven</span>
                    <span className="block text-indigo-400 mt-2 drop-shadow-md">Insights</span>
                </h1>
                <p className="mt-6 text-lg text-gray-200 sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                    DevilQuant leverages advanced quantitative analysis to uncover market opportunities. We bridge the gap between academic research and practical trading strategies.
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
                    <div className="rounded-md shadow">
                        <a
                            href="#"
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg transition-all hover:scale-105 duration-200 shadow-lg shadow-indigo-500/30"
                        >
                            Get Started
                        </a>
                    </div>
                    <div className="mt-3 sm:mt-0">
                        <a
                            href="#"
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm md:py-4 md:text-lg transition-all hover:scale-105 duration-200 border-white/20"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
