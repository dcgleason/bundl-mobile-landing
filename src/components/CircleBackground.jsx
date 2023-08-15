import { useId } from 'react'

export function CircleBackground({
  color,
  width = 700,
  height = 700, // Adjusted height to match width for a perfect circle
  ...props
}) {
  let id = useId()

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 800"
      width={width}
      height={height}
      fill="none"
      className="absolute inset-0 h-full w-full animate-spin-slow"
      aria-hidden="true"
      {...props}
    >
      <defs>
        <linearGradient
          id={id}
          x1="79"
          y1="16"
          x2="105"
          y2="237"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color} />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle
        cx="400"
        cy="400"
        r="400"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
    </svg>
  )
}
