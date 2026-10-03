import React from 'react';
import { DISCORD_URL, SUNDEVILCENTRAL_URL } from '../data/links';
import { placements } from '../data/placements';

// The tree's pen strokes: a trunk under "you", then a bracket forking to two
// rows centered at 48px and 144px (each row 4 squares tall). Drawn once on load.
const TreeStroke = ({ width, fork, className }) => (
    <svg width={width} height="192" viewBox={`0 0 ${width} 192`} fill="none" className={`shrink-0 text-chalk ${className}`} aria-hidden="true">
        <path
            className="pen-draw"
            pathLength="1"
            d={`M2 96C${fork * 0.3} 94.5 ${fork * 0.7} 97.5 ${fork} 96`}
            stroke="currentColor"
            strokeWidth="2.75"
            strokeLinecap="round"
        />
        <path
            className="pen-draw pen-draw-2"
            pathLength="1"
            d={`M${width - 2} 48C${width - 20} 47 ${fork + 10} 48.5 ${fork} 49C${fork - 0.5} 80 ${fork + 0.8} 118 ${fork} 143C${fork + 12} 144.5 ${width - 20} 143.5 ${width - 2} 144`}
            stroke="currentColor"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const JoinTree = () => (
    <div className="relative flex">
        <span className="absolute left-[2px] top-[50px] font-hand text-[32px] leading-none text-chalk">you</span>
        <TreeStroke width={96} fork={70} className="md:hidden" />
        <TreeStroke width={168} fork={110} className="hidden md:block" />
        <ul>
            <li className="h-[96px] flex items-center">
                <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="btn-highlight !min-h-[56px] !px-[16px] md:!px-[24px] text-[16px] md:text-[18px]">
                    Join the Discord
                </a>
            </li>
            <li className="h-[96px] flex items-center">
                <a href={SUNDEVILCENTRAL_URL} target="_blank" rel="noopener noreferrer" className="btn-pen !px-[12px] md:!px-[24px] text-[14px] md:text-[17px]">
                    Sign up on Sun Devil Central
                </a>
            </li>
        </ul>
    </div>
);

// A highlighter stroke with ragged ends, laid under the claim's baseline.
const MarkerStroke = () => (
    <svg
        className="hl-swipe absolute -left-[8px] -bottom-[5px] h-[12px] w-[calc(100%+18px)] -z-10 text-highlighter"
        viewBox="0 0 400 12"
        preserveAspectRatio="none"
        aria-hidden="true"
    >
        <path
            d="M3 4.5L9 2.2L40 2.8L120 1.6L220 2.4L320 1.2L391 2.1L397 4L394 7.2L398 9.6L330 10.6L230 9.8L130 11L40 10.2L6 10.8L1.5 8.2Z"
            fill="currentColor"
        />
    </svg>
);

const Hero = () => {
    return (
        <section className="sheet relative min-h-[calc(100svh-72px)] flex flex-col justify-center py-[48px]">
            <h1 className="text-[clamp(48px,13vw,96px)] leading-[1] font-extrabold tracking-[-0.04em] text-chalk">
                DevilQuant
            </h1>
            <p className="mt-[24px] font-hand leading-[1.3] text-chalk whitespace-nowrap text-[min(30px,calc((100vw-48px)/17.5))]">
                <span className="relative z-0">
                    the first quantitative finance club at ASU
                    <MarkerStroke />
                </span>
            </p>
            <p className="mt-[32px] max-w-[52ch] text-[17px] leading-[28px] text-pencil">
                We are a community of students who are building real projects, networking, participating in
                competitions, and working with industry professionals.
            </p>
            <div className="mt-[36px]">
                <JoinTree />
            </div>

            {/* Margin note on wide screens: the approved proof, in red pen. */}
            <aside className="hidden lg:block absolute right-[48px] top-1/2 -translate-y-1/2 -rotate-[2deg]">
                <p className="font-hand text-[26px] leading-[1.2] text-redpen">where members have landed</p>
                <svg className="mt-[4px] w-[240px] h-[8px] text-redpen" viewBox="0 0 240 8" fill="none" aria-hidden="true">
                    <path d="M2 5C60 2 150 2.5 238 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <ul className="mt-[12px] grid grid-cols-[auto_auto] gap-x-[24px] gap-y-[4px] whitespace-nowrap font-hand text-[21px] leading-[1.35] text-chalk">
                    {placements.map(({ name }) => (
                        <li key={name}>{name}</li>
                    ))}
                </ul>
            </aside>
        </section>
    );
};

export default Hero;
