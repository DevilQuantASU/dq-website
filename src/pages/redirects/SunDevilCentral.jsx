
import React, { useEffect } from 'react';
import { SUNDEVILCENTRAL_URL } from '../../data/links';

const SunDevilCentral = () => {
    useEffect(() => {
        window.location.href = SUNDEVILCENTRAL_URL;
    }, []);

    return (
        <div className="sheet flex-1 flex items-center py-[96px] text-chalk">
            <p className="font-hand text-[24px]">Redirecting to Sun Devil Central...</p>
        </div>
    );
};

export default SunDevilCentral;
