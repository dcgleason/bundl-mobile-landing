import { useId } from 'react'

export function CircleBackground({
  color,
  className,
 ...props
}) {
  let id = useId()

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 800"
      fill="none"
      className={`w-full h-full sm:w-1/2 sm:h-1/2 ${className}`}
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
