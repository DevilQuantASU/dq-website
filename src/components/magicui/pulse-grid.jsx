import React, { useMemo } from 'react';

export function PulseGrid({
  spacing = 80,
  baseOpacity = 0.08,
  pulseOpacity = 0.25,
  pulseChance = 0.3,
  className = '',
}) {
  const lines = useMemo(() => {
    const hCount = Math.ceil(2000 / spacing);
    const vCount = Math.ceil(2000 / spacing);

    const makeLine = () => ({
      delay: Math.random() * 6,
      duration: 3 + Math.random() * 3, // 3-6s per cycle
      willPulse: Math.random() < pulseChance,
    });

    return {
      horizontal: Array.from({ length: hCount }, makeLine),
      vertical: Array.from({ length: vCount }, makeLine),
    };
  }, [spacing, pulseChance]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>{`
          @keyframes grid-pulse {
            0%, 100% { opacity: ${baseOpacity}; }
            50% { opacity: ${pulseOpacity}; }
          }
        `}</style>
        {lines.horizontal.map((line, i) => (
          <line
            key={`h${i}`}
            x1="0"
            y1={i * spacing}
            x2="100%"
            y2={i * spacing}
            stroke="white"
            strokeWidth="0.5"
            opacity={line.willPulse ? baseOpacity : baseOpacity}
            style={
              line.willPulse
                ? {
                    animation: `grid-pulse ${line.duration}s ${line.delay}s ease-in-out infinite`,
                  }
                : undefined
            }
          />
        ))}
        {lines.vertical.map((line, i) => (
          <line
            key={`v${i}`}
            x1={i * spacing}
            y1="0"
            x2={i * spacing}
            y2="100%"
            stroke="white"
            strokeWidth="0.5"
            opacity={line.willPulse ? baseOpacity : baseOpacity}
            style={
              line.willPulse
                ? {
                    animation: `grid-pulse ${line.duration}s ${line.delay}s ease-in-out infinite`,
                  }
                : undefined
            }
          />
        ))}
      </svg>
    </div>
  );
}
