'use client'

import { useId, useRef, useState } from 'react'
import clsx from 'clsx'
import { motion, useInView, useMotionValue } from 'framer-motion'
import Image from 'next/image'
import GoogleLogo from "../images/logos/google-g.png"
import AppleLogo from "../images/logos/apple-logo.png"

import { AppScreen } from '@/components/AppScreen'

const prices = [
  997.56, 944.34, 972.25, 832.4, 888.76, 834.8, 805.56, 767.38, 861.21, 669.6,
  694.39, 721.32, 694.03, 610.1, 502.2, 549.56, 611.03, 583.4, 610.14, 660.6,
  752.11, 721.19, 638.89, 661.7, 694.51, 580.3, 638.0, 613.3, 651.64, 560.51,
  611.45, 670.68, 752.56,
]
const maxPrice = Math.max(...prices)
const minPrice = Math.min(...prices)

function Chart({
  className,
  activePointIndex,
  onChangeActivePointIndex,
  width: totalWidth,
  height: totalHeight,
  paddingX = 0,
  paddingY = 0,
  gridLines = 6,
  ...props
}) {
  let width = totalWidth - paddingX * 2
  let height = totalHeight - paddingY * 2

  let id = useId()
  let svgRef = useRef()
  let pathRef = useRef()
  let isInView = useInView(svgRef, { amount: 0.5, once: true })
  let pathWidth = useMotionValue(0)
  let [interactionEnabled, setInteractionEnabled] = useState(false)

  let path = ''
  let points = []

  for (let index = 0; index < prices.length; index++) {
    let x = paddingX + (index / (prices.length - 1)) * width
    let y =
      paddingY +
      (1 - (prices[index] - minPrice) / (maxPrice - minPrice)) * height
    points.push({ x, y })
    path += `${index === 0 ? 'M' : 'L'} ${x.toFixed(4)} ${y.toFixed(4)}`
  }

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${totalWidth} ${totalHeight}`}
      className={clsx(className, 'overflow-visible')}
      {...(interactionEnabled
        ? {
            onPointerLeave: () => onChangeActivePointIndex(null),
            onPointerMove: (event) => {
              let x = event.nativeEvent.offsetX
              let closestPointIndex
              let closestDistance = Infinity
              for (
                let pointIndex = 0;
                pointIndex < points.length;
                pointIndex++
              ) {
                let point = points[pointIndex]
                let distance = Math.abs(point.x - x)
                if (distance < closestDistance) {
                  closestDistance = distance
                  closestPointIndex = pointIndex
                } else {
                  break
                }
              }
              onChangeActivePointIndex(closestPointIndex)
            },
          }
        : {})}
      {...props}
    >
      <defs>
        <clipPath id={`${id}-clip`}>
          <path d={`${path} V ${height + paddingY} H ${paddingX} Z`} />
        </clipPath>
        <linearGradient id={`${id}-gradient`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#8b0000" />
          <stop offset="100%" stopColor="#8b0000" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[...Array(gridLines - 1).keys()].map((index) => (
        <line
          key={index}
          stroke="#a3a3a3"
          opacity="0.1"
          x1="0"
          y1={(totalHeight / gridLines) * (index + 1)}
          x2={totalWidth}
          y2={(totalHeight / gridLines) * (index + 1)}
        />
      ))}
      <motion.rect
        y={paddingY}
        width={pathWidth}
        height={height}
        fill={`url(#${id}-gradient)`}
        clipPath={`url(#${id}-clip)`}
        opacity="0.5"
      />
      <motion.path
        ref={pathRef}
        d={path}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        transition={{ duration: 1 }}
        {...(isInView ? { stroke: '#06b6d4', animate: { pathLength: 1 } } : {})}
        onUpdate={({ pathLength }) => {
          pathWidth.set(
            pathRef.current.getPointAtLength(
              pathLength * pathRef.current.getTotalLength()
            ).x
          )
        }}
        onAnimationComplete={() => setInteractionEnabled(true)}
      />
      {activePointIndex !== null && (
        <>
          <line
            x1="0"
            y1={points[activePointIndex].y}
            x2={totalWidth}
            y2={points[activePointIndex].y}
            stroke="#06b6d4"
            strokeDasharray="1 3"
          />
          <circle
            r="4"
            cx={points[activePointIndex].x}
            cy={points[activePointIndex].y}
            fill="#fff"
            strokeWidth="2"
            stroke="#06b6d4"
          />
        </>
      )}
    </svg>
  )
}

export function AppDemo() {
  let [activePointIndex, setActivePointIndex] = useState(null)
  let activePriceIndex = activePointIndex ?? prices.length - 1
  let activeValue = prices[activePriceIndex]
  let previousValue = prices[activePriceIndex - 1]
  let percentageChange =
    activePriceIndex === 0
      ? null
      : ((activeValue - previousValue) / previousValue) * 100

  return (
    <AppScreen>
      <AppScreen.Body>
        <div className="p-4">
          <h1 className="text-2xl font-semibold mb-4">Recognize Sally Sullivan</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="fianceeName" className="block text-sm font-medium text-gray-600">How has Sally embodied our core value of integrity?</label>
              <input type="text" id="fianceeName" name="fianceeName" className="mt-1 p-2 w-full border rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="prompt" className="block text-sm font-medium text-gray-600">What do you especially appreciate about Sally? Why?</label>
              <textarea id="prompt" name="prompt" className="mt-1 p-2 w-full border rounded-md" rows="3"></textarea>
            </div>
            
            <div className="mb-4">

              <div className="space-y-6">

              <button className="w-full bg-[#727B84] text-white py-2 rounded-lg flex items-center justify-center">
              {/* <Image src={AppleLogo} alt="Apple" className="h-4 w-7 mr-1" /> */}
              Send
            </button>
            {/* <button className="w-full bg-[#DF9496] text-white py-2 rounded-lg flex items-center">
            <Image src={GoogleLogo} alt="Google" className="h-4 w-4 mr-2 ml-1" />
              Select from your Google contacts
            </button> */}
            </div>
          </div>
          
            <div className="mb-4">
              <label htmlFor="emails" className="block text-sm font-medium text-gray-600">Input emails</label>
              <input type="email" id="emails" name="emails" className="mt-1 p-2 w-full border rounded-md" />
            </div>
            <button type="submit" className="bg-cyan-500 px-4 py-2 text-center text-sm font-semibold text-white rounded-md">
              Submit
            </button>
          </form>
        </div>
      </AppScreen.Body>
    </AppScreen>
  );
}