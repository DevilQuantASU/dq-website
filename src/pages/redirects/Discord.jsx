
import React, { useEffect } from 'react';
import { DISCORD_URL } from '../../data/links';

const Discord = () => {
    useEffect(() => {
        window.location.href = DISCORD_URL;
    }, []);

    return (
        <div className="sheet flex-1 flex items-center py-[96px] text-chalk">
            <p className="font-hand text-[24px]">Redirecting to Discord...</p>
        </div>
    );
};

export default Discord;
