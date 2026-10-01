
import React, { useEffect } from 'react';
import { DISCORD_URL } from '../../data/links';

const Discord = () => {
    useEffect(() => {
        window.location.href = DISCORD_URL;
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-black text-white">
            <p className="text-xl">Redirecting to Discord...</p>
        </div>
    );
};

export default Discord;
