
import React, { useEffect } from 'react';

const Discord = () => {
    useEffect(() => {
        window.location.href = "https://discord.com/invite/WJbhDmumXp";
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white">
            <p className="text-xl">Redirecting to Discord...</p>
        </div>
    );
};

export default Discord;
