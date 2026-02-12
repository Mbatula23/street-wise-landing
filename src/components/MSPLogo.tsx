const MSPLogo = ({ size = 36, className = "" }: { size?: number; className?: string }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer frame */}
      <rect
        x="2"
        y="2"
        width="96"
        height="96"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.3"
      />
      {/* Inner frame */}
      <rect
        x="8"
        y="8"
        width="84"
        height="84"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.15"
      />
      {/* M */}
      <text
        x="16"
        y="64"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="30"
        fontWeight="400"
        fill="currentColor"
        opacity="0.85"
      >
        M
      </text>
      {/* S - centered, slightly overlapping */}
      <text
        x="38"
        y="64"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="30"
        fontWeight="400"
        fill="currentColor"
        opacity="0.85"
      >
        S
      </text>
      {/* P */}
      <text
        x="58"
        y="64"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="30"
        fontWeight="400"
        fill="currentColor"
        opacity="0.85"
      >
        P
      </text>
    </svg>
  );
};

export default MSPLogo;
