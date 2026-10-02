
import React, { useEffect } from 'react';
import { SUNDEVILCENTRAL_URL } from '../../data/links';

const SunDevilCentral = () => {
    useEffect(() => {
        window.location.href = SUNDEVILCENTRAL_URL;
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-black text-white">
            <p className="text-xl">Redirecting to Sun Devil Central...</p>
        </div>
    );
};

export default SunDevilCentral;
