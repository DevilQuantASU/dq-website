import React from 'react';
import { placements } from '../data/placements';

// Logos inked in chalk as one color, centered in whole-square cells:
// 2 columns of 6 squares on phones (the widest wordmarks span both), 4 x 2 of 11 squares on wide screens.
const PlacementLogos = () => (
    <ul className="grid grid-cols-[repeat(2,144px)] lg:grid-cols-[repeat(4,264px)] gap-x-[24px]">
        {placements.map(({ name, logo, height, wide }) => (
            <li key={name} className={`h-[72px] flex items-center justify-center ${wide ? 'col-span-2 lg:col-span-1' : ''}`}>
                <img
                    src={`./logos/${logo}`}
                    alt={name}
                    style={{ height }}
                    className="w-auto max-w-full [filter:brightness(0)_invert(0.93)]"
                    loading="lazy"
                />
            </li>
        ))}
    </ul>
);

export default PlacementLogos;
