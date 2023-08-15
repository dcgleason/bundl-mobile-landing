import { useId } from 'react'

export function HeartBackground({
  color,
  width,
  height,
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
      <g fill="none" strokeWidth="3" stroke="hsl(356, 5%, 65%)" id="heart">
        <path
          d="M398.6014099121094 253.14685037252787C742.3076876126802 16.78321660982145 800.000017072771 558.0419407557774 406.99301488916353 723.7762677386091 -0.00001707277101559157 558.0419407557774 57.69231238731982 16.78321660982145 398.6014099121094 253.14685037252787Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  )
}
