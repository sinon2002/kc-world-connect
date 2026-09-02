export function GraduateCharacter({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 620"
      role="img"
      aria-label="Улыбающийся студент-выпускник в длинной мантии и академической шапке поднимает диплом"
      className={className}
    >
      <defs>
        <radialGradient id="kcGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="oklch(0.761 0.14 71.6 / 0.35)" />
          <stop offset="100%" stopColor="oklch(0.761 0.14 71.6 / 0)" />
        </radialGradient>
      </defs>

      <circle cx="210" cy="300" r="215" fill="url(#kcGlow)" />

      <g className="kc-breathe">
        {/* floor shadow */}
        <ellipse cx="210" cy="588" rx="96" ry="13" fill="oklch(0.239 0.058 256.7 / 0.16)" />

        {/* legs — straight simple lines */}
        <rect x="185" y="470" width="16" height="96" rx="8" fill="oklch(0.284 0.066 260.7)" />
        <rect x="219" y="470" width="16" height="96" rx="8" fill="oklch(0.284 0.066 260.7)" />
        {/* shoes */}
        <path d="M175 566h30a6 6 0 0 1 6 6v6h-42v-6a6 6 0 0 1 6-6z" fill="oklch(0.21 0.034 263.4)" />
        <path d="M215 566h30a6 6 0 0 1 6 6v6h-42v-6a6 6 0 0 1 6-6z" fill="oklch(0.21 0.034 263.4)" />

        {/* gown — long bell/trapeze silhouette, flat fill */}
        <path
          d="M172 176h76c26 0 40 16 44 42l40 234c2 12-6 20-18 20H106c-12 0-20-8-18-20l40-234c4-26 18-42 44-42z"
          fill="oklch(0.239 0.058 256.7)"
        />
        {/* front opening */}
        <path d="M206 178h8l6 292h-20z" fill="oklch(0.284 0.066 260.7)" />

        {/* left arm bent at the waist */}
        <path
          d="M154 190c-24 8-34 30-38 56l-8 52c-2 12 8 18 18 14l50-18-6-24-36 12 8-40z"
          fill="oklch(0.284 0.066 260.7)"
        />
        <circle cx="182" cy="300" r="15" fill="oklch(0.88 0.05 62)" />

        {/* collar with gold trim */}
        <path
          d="M178 172h64l-32 46-32-46z"
          fill="oklch(0.284 0.066 260.7)"
          stroke="oklch(0.761 0.14 71.6)"
          strokeWidth="7"
          strokeLinejoin="round"
        />

        {/* right arm raised in an arc away from the face + diploma */}
        <g className="kc-arm" style={{ transformOrigin: "252px 200px" }}>
          <path
            d="M252 182c26 4 40 20 50 44l38 84c5 12-13 20-19 8l-38-76-16 22z"
            fill="oklch(0.284 0.066 260.7)"
          />
          <circle cx="344" cy="308" r="15" fill="oklch(0.88 0.05 62)" />
          {/* scroll */}
          <g transform="rotate(-30 344 300)">
            <rect x="308" y="288" width="76" height="26" rx="13" fill="oklch(0.99 0.008 84)" />
            <rect x="338" y="282" width="13" height="38" rx="6" fill="oklch(0.761 0.14 71.6)" />
          </g>
          {/* sparkles */}
          <g fill="oklch(0.761 0.14 71.6)">
            <path className="kc-spark" style={{ animationDelay: "0.1s" }} d="M300 244l5 12 12 5-12 5-5 12-5-12-12-5 12-5z" />
            <path className="kc-spark" style={{ animationDelay: "0.45s" }} d="M388 262l4 9 9 4-9 4-4 9-4-9-9-4 9-4z" />
            <circle className="kc-spark" style={{ animationDelay: "0.75s" }} cx="330" cy="220" r="5" />
            <circle className="kc-spark" style={{ animationDelay: "0.3s" }} cx="376" cy="352" r="4" />
          </g>
        </g>

        {/* neck + head (approx 1/6.5 of figure height) */}
        <rect x="200" y="152" width="20" height="26" rx="9" fill="oklch(0.82 0.055 62)" />
        <circle cx="210" cy="128" r="42" fill="oklch(0.88 0.05 62)" />
        {/* hair */}
        <path d="M170 116c4-24 20-36 40-36s36 12 40 36c-26-12-54-12-80 0z" fill="oklch(0.28 0.03 40)" />
        {/* eyes */}
        <circle cx="196" cy="128" r="4.5" fill="oklch(0.21 0.034 263.4)" />
        <circle cx="224" cy="128" r="4.5" fill="oklch(0.21 0.034 263.4)" />
        {/* smile */}
        <path
          d="M197 143c7 9 20 9 26 0"
          fill="none"
          stroke="oklch(0.21 0.034 263.4)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* mortarboard */}
        <rect x="186" y="90" width="48" height="16" rx="6" fill="oklch(0.21 0.034 263.4)" />
        <path d="M210 66l76 28-76 28-76-28z" fill="oklch(0.239 0.058 256.7)" />
        <g className="kc-tassel" style={{ transformOrigin: "276px 94px" }}>
          <path
            d="M276 94c12 8 15 22 14 38"
            fill="none"
            stroke="oklch(0.761 0.14 71.6)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <rect x="283" y="128" width="14" height="20" rx="7" fill="oklch(0.86 0.09 78)" />
        </g>
      </g>
    </svg>
  );
}
