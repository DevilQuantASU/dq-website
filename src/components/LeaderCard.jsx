import React from 'react';
import SocialLinks from './SocialLinks';

const LeaderCard = ({ name, role, bio, image, socialLinks }) => {
    return (
        <article>
            {image ? (
                <img
                    src={image}
                    alt={name}
                    className="w-full h-[240px] object-cover outline outline-[1.5px] outline-chalk/70 -outline-offset-[1.5px]"
                    loading="lazy"
                />
            ) : (
                <div className="w-full h-[240px] flex items-center justify-center bg-pad-deep text-rule-major outline outline-[1.5px] outline-rule-major -outline-offset-[1.5px]">
                    <svg className="w-[72px] h-[72px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                </div>
            )}
            <h3 className="mt-[24px] text-[20px] leading-[24px] font-bold tracking-[-0.02em] text-chalk">{name}</h3>
            <p className="mt-[4px] font-hand text-[18px] leading-[24px] text-redpen">{role}</p>
            <p className="mt-[12px] text-[15px] leading-[24px] text-pencil">{bio}</p>
            <div className="mt-[12px]">
                <SocialLinks links={socialLinks} name={name} />
            </div>
        </article>
    );
};

export default LeaderCard;
