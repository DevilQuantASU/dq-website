
import React, { useEffect } from 'react';
import { LINKEDIN_URL } from '../../data/links';

const LinkedIn = () => {
    useEffect(() => {
        window.location.href = LINKEDIN_URL;
    }, []);

    return (
        <div className="sheet flex-1 flex items-center py-[96px] text-chalk">
            <p className="font-hand text-[24px]">Redirecting to LinkedIn...</p>
        </div>
    );
};

export default LinkedIn;
