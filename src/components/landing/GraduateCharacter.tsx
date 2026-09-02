export function GraduateCharacter({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 460"
      role="img"
      aria-label="Улыбающийся студент-выпускник в мантии и академической шапке поднимает диплом"
      className={className}
    >
      <defs>
        <linearGradient id="kcGown" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.322 0.082 256.4)" />
          <stop offset="100%" stopColor="oklch(0.239 0.058 256.7)" />
        </linearGradient>
        <radialGradient id="kcGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.761 0.14 71.6 / 0.45)" />
          <stop offset="100%" stopColor="oklch(0.761 0.14 71.6 / 0)" />
        </radialGradient>
      </defs>

      <circle cx="210" cy="230" r="185" fill="url(#kcGlow)" />

      <g className="kc-breathe">
        {/* shadow */}
        <ellipse cx="210" cy="424" rx="112" ry="16" fill="oklch(0.239 0.058 256.7 / 0.18)" />

        {/* gown body */}
        <path
          d="M210 150c46 0 74 22 84 60l26 190c2 14-8 22-22 22H122c-14 0-24-8-22-22l26-190c10-38 38-60 84-60z"
          fill="url(#kcGown)"
        />
        {/* stole */}
        <path d="M186 156h18l-6 108-16-10z" fill="oklch(0.761 0.14 71.6)" />
        <path d="M234 156h-18l6 108 16-10z" fill="oklch(0.761 0.14 71.6)" />
        {/* collar */}
        <path
          d="M170 148h80l-40 44-40-44z"
          fill="oklch(0.86 0.09 78)"
          stroke="oklch(0.761 0.14 71.6)"
          strokeWidth="4"
        />
        {/* left arm */}
        <path
          d="M150 176c-24 12-38 40-40 72l-4 44c-1 12 18 14 20 2l10-56 22-30z"
          fill="oklch(0.322 0.082 256.4)"
        />
        <circle cx="112" cy="296" r="15" fill="oklch(0.88 0.05 62)" />

        {/* right arm + diploma group */}
        <g className="kc-arm">
          <path
            d="M262 172c30 6 44 26 56 4 8-14 20-30 34-44 8-8 20 4 12 14-14 16-22 30-28 44-10 24-40 34-74 26z"
            fill="oklch(0.322 0.082 256.4)"
          />
          <circle cx="350" cy="140" r="16" fill="oklch(0.88 0.05 62)" />
          {/* scroll */}
          <g transform="rotate(-28 352 132)">
            <rect x="316" y="112" width="76" height="30" rx="15" fill="oklch(0.99 0.008 84)" />
            <rect x="316" y="112" width="76" height="30" rx="15" fill="none" stroke="oklch(0.9 0.012 260)" strokeWidth="2" />
            <rect x="346" y="104" width="14" height="46" rx="7" fill="oklch(0.761 0.14 71.6)" />
          </g>
          {/* sparkles */}
          <g fill="oklch(0.761 0.14 71.6)">
            <path className="kc-spark" style={{ animationDelay: "0.1s" }} d="M300 78l5 12 12 5-12 5-5 12-5-12-12-5 12-5z" />
            <path className="kc-spark" style={{ animationDelay: "0.45s" }} d="M392 92l4 9 9 4-9 4-4 9-4-9-9-4 9-4z" />
            <circle className="kc-spark" style={{ animationDelay: "0.75s" }} cx="330" cy="60" r="5" />
            <circle className="kc-spark" style={{ animationDelay: "0.3s" }} cx="378" cy="176" r="4" />
          </g>
        </g>

        {/* neck + head */}
        <rect x="196" y="118" width="28" height="34" rx="12" fill="oklch(0.82 0.055 62)" />
        <circle cx="210" cy="90" r="52" fill="oklch(0.88 0.05 62)" />
        {/* ears */}
        <circle cx="159" cy="94" r="9" fill="oklch(0.85 0.052 62)" />
        <circle cx="261" cy="94" r="9" fill="oklch(0.85 0.052 62)" />
        {/* hair */}
        <path d="M162 66c8-26 30-40 48-40s40 14 48 40c-30-14-66-14-96 0z" fill="oklch(0.28 0.03 40)" />
        {/* eyes */}
        <circle cx="192" cy="88" r="6" fill="oklch(0.21 0.034 263.4)" />
        <circle cx="228" cy="88" r="6" fill="oklch(0.21 0.034 263.4)" />
        {/* smile */}
        <path
          d="M190 108c8 12 32 12 40 0"
          fill="none"
          stroke="oklch(0.21 0.034 263.4)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* cheeks */}
        <circle cx="178" cy="102" r="7" fill="oklch(0.78 0.09 30 / 0.5)" />
        <circle cx="242" cy="102" r="7" fill="oklch(0.78 0.09 30 / 0.5)" />

        {/* mortarboard */}
        <rect x="180" y="44" width="60" height="20" rx="8" fill="oklch(0.284 0.066 260.7)" />
        <path d="M210 16l86 34-86 34-86-34z" fill="oklch(0.284 0.066 260.7)" />
        <path d="M210 24l68 26-68 26-68-26z" fill="oklch(0.322 0.082 256.4)" />
        <g className="kc-tassel">
          <path
            d="M214 96c0-24 22-30 34-38"
            fill="none"
            stroke="oklch(0.761 0.14 71.6)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <circle cx="214" cy="100" r="8" fill="oklch(0.761 0.14 71.6)" />
        </g>
      </g>
    </svg>
  );
}
