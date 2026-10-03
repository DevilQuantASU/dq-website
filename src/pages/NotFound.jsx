import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="sheet flex-1 flex flex-col justify-center py-[96px]">
            <h1 className="text-[clamp(40px,8vw,72px)] leading-[1] font-extrabold tracking-[-0.04em] text-chalk">
                Page not found
            </h1>
            <p className="mt-[24px] max-w-[52ch] text-[17px] leading-[28px] text-pencil">
                Error 404: the page you're looking for doesn't exist or has moved. Head back to the home page to find your way.
            </p>
            <Link to="/" className="btn-highlight mt-[24px] w-fit text-[17px]">
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
