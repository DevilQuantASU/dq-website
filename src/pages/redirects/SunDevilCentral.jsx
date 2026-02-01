
import React, { useEffect } from 'react';

const SunDevilCentral = () => {
    useEffect(() => {
        window.location.href = "https://sundevilcentral.eoss.asu.edu/DevilQuant/club_signup";
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white">
            <p className="text-xl">Redirecting to Sun Devil Central...</p>
        </div>
    );
};

export default SunDevilCentral;
