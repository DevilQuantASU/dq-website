import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LeaderCard from '../components/LeaderCard';
import PlacementLogos from '../components/PlacementLogos';
import SocialLinks from '../components/SocialLinks';
import leadersByYear from '../data/leaders.json';
import membersByYear from '../data/members.json';

// Combine years from both data sources
const allYears = [...new Set([...Object.keys(leadersByYear), ...Object.keys(membersByYear)])].sort((a, b) => b - a);
const currentYear = new Date().getFullYear().toString();
const defaultYear = allYears.includes(currentYear) ? currentYear : allYears[0];

// Founders are leaders whose role mentions "Founder" in any year, listed once each.
const founders = [...new Map(
    Object.values(leadersByYear)
        .flat()
        .filter((leader) => /founder/i.test(leader.role))
        .map((leader) => [leader.name, { name: leader.name, ...leader.socialLinks }])
).values()];

// Headshots in src/assets/Headshots, keyed by filename (e.g. "cedric.jpg").
const headshots = Object.fromEntries(
    Object.entries(import.meta.glob('../assets/Headshots/*.{png,jpg,jpeg,webp,svg}', { eager: true, import: 'default' }))
        .map(([path, url]) => [path.split('/').pop(), url])
);

// `image` in leaders.json is a Headshots filename, a full URL, or null.
const getHeadshotUrl = (imageName) => {
    if (!imageName) return null;
    if (imageName.startsWith('http')) return imageName;
    return headshots[imageName] ?? null;
};

const whatWeDo = [
    'Algorithmic Trading Competitions',
    'Guest Speaker Series from Industry Pros',
    'Collaborative Research Projects',
];

const sectionHeading = 'text-[32px] leading-[48px] font-bold tracking-[-0.03em] text-chalk';

const YearSelect = ({ value, onChange, years }) => (
    <label className="relative inline-flex items-center">
        <span className="sr-only">Year</span>
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="appearance-none bg-pad text-chalk text-[15px] font-medium min-h-[48px] pl-[16px] pr-[40px] shadow-[inset_0_0_0_1.5px_var(--color-chalk)] cursor-pointer"
        >
            {years.map((year) => (
                <option key={year} value={year}>{year}</option>
            ))}
        </select>
        <svg className="pointer-events-none absolute right-[14px] w-[12px] h-[12px] text-chalk" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
    </label>
);

const About = () => {
    const [selectedYear, setSelectedYear] = useState(defaultYear);
    const location = useLocation();

    // Scroll to a section when navigated here with state.scrollTo (e.g. navbar "Contact")
    useEffect(() => {
        const sectionId = location.state?.scrollTo;
        // Jump rather than animate, so the section is in view as soon as the page
        // renders; a smooth scroll can stall behind main-thread work on slow devices.
        if (sectionId) document.getElementById(sectionId)?.scrollIntoView({ behavior: 'auto' });
    }, [location.key, location.state]);

    const leaders = leadersByYear[selectedYear] || [];
    const members = (membersByYear[selectedYear] || []).slice().sort((a, b) => {
        const partsA = a.name.split(' ');
        const partsB = b.name.split(' ');
        const keyA = partsA.length > 1 ? partsA[partsA.length - 1] : partsA[0];
        const keyB = partsB.length > 1 ? partsB[partsB.length - 1] : partsB[0];
        return keyA.localeCompare(keyB);
    });

    return (
        <div className="sheet py-[72px]">
            <header>
                <h1 className="text-[clamp(48px,10vw,96px)] leading-[1] font-extrabold tracking-[-0.04em] text-chalk">
                    About
                </h1>
                <p className="mt-[24px] max-w-[60ch] text-[17px] leading-[28px] text-pencil">
                    We are a student-run quantitative finance organization dedicated to bridging the gap between academic theory and practical application in financial markets.
                </p>
            </header>

            <section className="mt-[72px] pt-[48px] border-t border-rule-major grid grid-cols-1 md:grid-cols-2 gap-[48px]">
                <div>
                    <h2 className={sectionHeading}>Our Mission</h2>
                    <p className="mt-[12px] max-w-[60ch] text-[16px] leading-[26px] text-pencil">
                        To provide students with hands-on experience in quantitative analysis, algorithmic trading, and financial data science. We aim to foster a collaborative environment where members can research, build, and test their own trading strategies.
                    </p>
                </div>
                <div>
                    <h2 className={sectionHeading}>What We Do</h2>
                    <ul className="mt-[12px] space-y-[12px]">
                        {whatWeDo.map((item) => (
                            <li key={item} className="flex items-center gap-[12px] text-[16px] text-chalk">
                                <svg className="w-[20px] h-[12px] shrink-0 text-redpen" viewBox="0 0 20 12" fill="none" aria-hidden="true">
                                    <path d="M1 7C4 6 7 10 9 10C12 10 15 3 19 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="mt-[72px] pt-[48px] border-t border-rule-major">
                <h2 className={sectionHeading}>Member Placements</h2>
                <div className="mt-[12px]">
                    <PlacementLogos />
                </div>
            </section>

            <section className="mt-[72px] pt-[48px] border-t border-rule-major">
                <div className="flex items-center justify-between gap-[24px]">
                    <h2 className={sectionHeading}>Leadership Team</h2>
                    <YearSelect value={selectedYear} onChange={setSelectedYear} years={allYears} />
                </div>
                <div className="mt-[48px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[24px] gap-y-[48px]">
                    {leaders.map((leader) => (
                        <LeaderCard
                            key={leader.name}
                            {...leader}
                            image={getHeadshotUrl(leader.image)}
                        />
                    ))}
                </div>

                <h2 className={`${sectionHeading} mt-[72px]`}>Members</h2>
                <div className="mt-[24px] max-h-[312px] overflow-y-auto p-[24px] shadow-[inset_0_0_0_1.5px_var(--color-rule-major)] bg-pad">
                    {members.length > 0 ? (
                        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-[24px] gap-y-[12px]">
                            {members.map((member) => (
                                <li key={member.name} className="text-[15px] leading-[24px] text-chalk">
                                    {member.name}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="py-[24px] text-[15px] text-pencil">No members listed for this year.</p>
                    )}
                </div>
            </section>

            <section className="mt-[72px] grid grid-cols-1 md:grid-cols-2 shadow-[inset_0_0_0_1.5px_var(--color-chalk)] bg-pad">
                <div className="p-[24px] md:p-[48px] border-b md:border-b-0 md:border-r border-rule-major">
                    <h2 className={sectionHeading}>Founders</h2>
                    <p className="font-hand text-[18px] leading-[24px] text-redpen">Est. January 2025</p>
                    <p className="mt-[24px] max-w-[48ch] text-[16px] leading-[26px] text-pencil">
                        Founded at Arizona State University to give students a real path into quantitative finance, not just theory.
                    </p>
                </div>
                <ul className="p-[24px] md:p-[48px] flex flex-col justify-center gap-[24px]">
                    {founders.map((founder) => (
                        <li key={founder.name} className="flex items-center justify-between gap-[24px]">
                            <span className="text-[17px] font-semibold text-chalk">{founder.name}</span>
                            <SocialLinks links={founder} name={founder.name} />
                        </li>
                    ))}
                </ul>
            </section>

            <section id="contact" className="mt-[72px] scroll-mt-[96px] pt-[48px] border-t border-rule-major">
                <h2 className={sectionHeading}>Contact Us</h2>
                <p className="mt-[12px] max-w-[60ch] text-[17px] leading-[28px] text-pencil">
                    Have questions about our research or want to get involved? We'd love to hear from you.
                </p>
                <a href="mailto:contact@devilquant.com" className="btn-highlight mt-[24px] text-[17px]">
                    contact@devilquant.com
                </a>
            </section>
        </div>
    );
};

export default About;
