type LaurelWreathProps = {
  className?: string;
};

const leaves = [
  { x: 98, y: 140, rotate: -32 },
  { x: 85, y: 128, rotate: -48 },
  { x: 75, y: 112, rotate: -64 },
  { x: 69, y: 95, rotate: -80 },
  { x: 69, y: 77, rotate: -96 },
  { x: 75, y: 59, rotate: -112 },
  { x: 84, y: 43, rotate: -128 },
  { x: 95, y: 30, rotate: -144 },
] as const;

/**
 * Hand-drawn laurel branches that frame the "20+ years" trust marker.
 * Two mirrored branches keep the mark symmetrical without an icon dependency.
 */
export function LaurelWreath({ className }: LaurelWreathProps) {
  return (
    <svg
      viewBox="0 0 240 160"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {[false, true].map((mirrored) => (
        <g
          key={mirrored ? "right" : "left"}
          transform={mirrored ? "translate(240 0) scale(-1 1)" : undefined}
        >
          <path
            d="M112 150C80 140 62 112 66 82C69 57 85 38 104 28"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            opacity="0.9"
          />
          <g fill="currentColor">
            {leaves.map((leaf) => (
              <ellipse
                key={`${leaf.x}-${leaf.y}`}
                cx="0"
                cy="-9"
                rx="5.2"
                ry="12"
                transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.rotate})`}
              />
            ))}
          </g>
        </g>
      ))}
    </svg>
  );
}
