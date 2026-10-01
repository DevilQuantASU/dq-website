
import React, { useEffect } from 'react';
import { LINKEDIN_URL } from '../../data/links';

const LinkedIn = () => {
    useEffect(() => {
        window.location.href = LINKEDIN_URL;
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-black text-white">
            <p className="text-xl">Redirecting to LinkedIn...</p>
        </div>
    );
};

export default LinkedIn;
