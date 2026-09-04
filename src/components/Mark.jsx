/*
 * Brand mark: a panel deadfront divided by a single hairline, with three
 * copper breaker bars in the right field. Abstract enough to read at 16px,
 * literal enough to be about this trade. Also drawn in public/favicon.svg.
 */
export default function Mark({ size = 26, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="0.9"
        y="0.9"
        width="22.2"
        height="22.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <line x1="8.4" y1="0.9" x2="8.4" y2="23.1" stroke="currentColor" strokeWidth="1.1" />
      <g className="mark__bars">
        <rect x="11.4" y="5.1" width="8.4" height="2.4" />
        <rect x="11.4" y="10.8" width="8.4" height="2.4" />
        <rect x="11.4" y="16.5" width="8.4" height="2.4" />
      </g>
    </svg>
  )
}
