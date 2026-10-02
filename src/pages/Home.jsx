import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import PlacementLogos from '../components/PlacementLogos';
import { DISCORD_URL } from '../data/links';

const Home = () => {
    return (
        <>
            <Hero />

            <section className="sheet py-[96px] border-t border-rule-major">
                <h2 className="lg:sr-only font-hand text-[28px] md:text-[32px] leading-[1.2] text-redpen">
                    Where members have landed
                </h2>
                <div className="mt-[24px] lg:mt-0">
                    <PlacementLogos />
                </div>
                <Link to="/about" className="ink-link mt-[24px] inline-block text-[17px] font-semibold text-chalk underline decoration-[1.5px] decoration-chalk/60 underline-offset-[6px]">
                    Meet the members
                </Link>
            </section>

            <section className="sheet py-[96px] md:py-[144px] border-t border-rule-major">
                <h2 className="text-[clamp(40px,8vw,72px)] leading-[1] font-extrabold tracking-[-0.04em] text-chalk">
                    Your move.
                </h2>
                <p className="mt-[24px] max-w-[52ch] text-[17px] leading-[28px] text-pencil">
                    Join the Discord to meet the club.
                </p>
                <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="btn-highlight mt-[24px] text-[17px]">
                    Join the Discord
                </a>
            </section>
        </>
    );
};

export default Home;
