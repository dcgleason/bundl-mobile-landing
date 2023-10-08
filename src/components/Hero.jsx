'use client'

import { useId } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

import { AppDemo } from '@/components/AppDemo'
import { AppStoreLink } from '@/components/AppStoreLink'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import logoBbc from '@/images/logos/bbc.svg'
import logoCbs from '@/images/logos/cbs.svg'
import logoCnn from '@/images/logos/cnn.svg'
import logoFastCompany from '@/images/logos/fast-company.svg'
import logoForbes from '@/images/logos/forbes.svg'
import logoHuffpost from '@/images/logos/huffpost.svg'
import logoTechcrunch from '@/images/logos/techcrunch.svg'
import logoWired from '@/images/logos/wired.svg'
import BundlBook from "@/images/bundl-red-book.png"
import dynamic from 'next/dynamic';
import PDFViewer from './PDFViewer'
import '../styles/pdf.css';


import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';


// const DynamicPDFViewer = dynamic(
//   () => import('./PDFViewer'),
//   { ssr: false }
// );






function BackgroundIllustration(props) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />/
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DF9496" />
            <stop offset="1" stopColor="#DF9496" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DF9496" />
            <stop offset="1" stopColor="#DF9496" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

const Testimonials = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://testimonial.to/js/iframeResizer.min.js';
    script.onload = () => {
      if (iframeRef.current) {
        window.iFrameResize({ log: false, checkOrigin: false }, '#testimonialto-bundl-tag-all-light-animated');
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      height="200px"
      id="testimonialto-bundl-tag-all-light-animated"
      src="https://embed-v2.testimonial.to/w/bundl?animated=on&theme=light&shadowColor=f7f7f7&speed=0.5&hideDate=on&hideSource&tag=all"
      frameborder="0"
      width="100%"
    ></iframe>
  );
};

const style = {
  height: '100vh',
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media(min-width: 768px)': {
      height: '500px',
      width: '800px',
  },
};

function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4" />
      <path
        d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
        fill="#A3A3A3"
        stroke="#A3A3A3"
      />
    </svg>
  )
}

export function Hero() {

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [currentImage, setCurrentImage] = useState(0); // 0 for alyssa-bundl.png and 1 for marrissa-bundl.png

  const images = [
    '/alysssa-bundl.png',
    '/marissa-bundl.png'
  ];



  return (
    <div className="py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-medium tracking-tight text-gray-900">
           Make your loved one cry tears of joy.
           </h1>
            <p className="mt-6 text-lg text-gray-600">
            Blow your loved one away by gifting them a book full of heartwarming messages from their family and friends. <br></br> <br></br>With Bundl&apos;s mobile app, easily gift meaningful, prompt-driven written notes, audio-clips, and memorable pictures in the from of a book. <br></br><br></br> A great gift for milestone birthdays, baby-showers, retirement parties, etc.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              <AppStoreLink />
              {/* <Button
                href="https://youtu.be/4TYv2PhG89A?t=73"
                variant="outline"
              >
                <PlayIcon className="h-6 w-6 flex-none" />
                <span className="ml-2.5">Watch for pre-proposal vibes</span>
              </Button> */}
            </div>
          </div>
          <div className="relative sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
                <BackgroundIllustration /* ... your other classes and props here ... */ />
                <div className="mx-4 px-9 [mask-image:linear-gradient(to_bottom,white_95%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:bottom-auto lg:-top-20 lg:h-auto lg:px-0 xl:bottom-0">
                  <div className="image-container h-full w-full flex flex-col items-center"> {/* Flex container for vertical alignment */}
                    <div className="mb-2"> {/* Container for buttons */}
                      {/* Previous button */}
                      {currentImage > 0 && (
                          <button className="mr-2 bg-[#DF9496] text-white rounded" onClick={() => setCurrentImage(prev => prev - 1)}>
                          Previous
                      </button>
                      )}
                      {/* Next button */}
                      {/* Next button */}
                      {currentImage < images.length - 1 && (
                          <button className="bg-[#DF9496] text-white rounded" onClick={() => setCurrentImage(prev => prev + 1)}>
                              Next
                          </button>
                      )}
                    </div>
                    <img src={images[currentImage]} alt="Bundl Image" className="w-full h-auto object-contain max-h-full" />
                  </div>
                  {/* ... other components and code here ... */}
                </div>
              </div>


          {/* <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
            <p className="text-center text-sm font-semibold text-gray-900 lg:text-left">
              As featured in
            </p>
            <ul
              role="list"
              className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start"
            >
              {[
                ['Forbes', logoForbes],
                ['TechCrunch', logoTechcrunch],
                ['Wired', logoWired],
                ['CNN', logoCnn, 'hidden xl:block'],
                ['BBC', logoBbc],
                ['CBS', logoCbs],
                ['Fast Company', logoFastCompany],
                ['HuffPost', logoHuffpost, 'hidden xl:block'],
              ].map(([name, logo, className]) => (
                <li key={name} className={clsx('flex', className)}>
                  <Image src={logo} alt={name} className="h-8" unoptimized />
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </Container>
    </div>
  )
}
