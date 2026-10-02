import React from 'react';

// The DQ monogram (public/DQ.png) redrawn as strokes so it inherits text color:
// a D whose bowl is the Q's circle, plus the Q's tail.
const Monogram = ({ className = '', title }) => (
    <svg
        viewBox="92 114 322 262"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="22"
        strokeLinejoin="round"
        role={title ? 'img' : undefined}
        aria-hidden={title ? undefined : true}
    >
        {title && <title>{title}</title>}
        <path d="M285 136H114V351H285" />
        <circle cx="285" cy="243" r="107" />
        <path d="M322 300L376 354" strokeLinecap="round" />
    </svg>
);

export default Monogram;
