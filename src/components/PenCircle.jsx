import React from 'react';

// A loose red-pen loop (a hand-drawn rounded box) around the current item.
// Place inside a `relative` element; it clears the text by 14px on each side so it never crosses a glyph.
const PenCircle = ({ className = '' }) => (
    <svg
        className={`pointer-events-none absolute -left-[14px] -top-[8px] w-[calc(100%+28px)] h-[calc(100%+16px)] text-redpen ${className}`}
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
    >
        <path
            d="M64 2.5C40 1.8 12 2 5 5C1 7.5 1.5 31 4.5 34.5C9 38.5 46 38 72 37.6C90 37.2 97.5 35.5 98 20C98.5 6 93 3 66 3.4L44 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
        />
    </svg>
);

export default PenCircle;
