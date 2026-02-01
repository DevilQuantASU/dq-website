
import React, { useEffect } from 'react';

const LinkedIn = () => {
    useEffect(() => {
        window.location.href = "https://www.linkedin.com/company/devilquant/";
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white">
            <p className="text-xl">Redirecting to LinkedIn...</p>
        </div>
    );
};

export default LinkedIn;
